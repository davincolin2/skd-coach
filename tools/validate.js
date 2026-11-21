#!/usr/bin/env node
/**
 * Deterministic validation gate for SKD Coach (no npm dependencies).
 * Usage:
 *   node tools/validate.js         (fast gate, exit 0 = PASS, 1 = FAIL)
 *   node tools/validate.js --full  (adds coverage table, file sizes, full warnings)
 *   node tools/validate.js --no-update-ledger (do not write tools/id-ledger.json on PASS)
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const LEDGER_PATH = path.join(__dirname, 'id-ledger.json');
const LOG_PATH = path.join(ROOT, 'automation-log.json');

const FULL = process.argv.includes('--full');
const NO_UPDATE_LEDGER = process.argv.includes('--no-update-ledger');

const errors = [];
const warnings = [];

function fail(code, msg, extra) {
  errors.push(Object.assign({ code, message: msg }, extra || {}));
}
function warn(code, msg, extra) {
  warnings.push(Object.assign({ code, message: msg }, extra || {}));
}

function hashQuestion(q) {
  const payload = JSON.stringify({
    soal: q.soal || '',
    opsi: q.opsi || [],
    kunci: typeof q.kunci === 'number' ? q.kunci : null,
    skor: Array.isArray(q.skor) ? q.skor : null
  });
  return crypto.createHash('sha1').update(payload, 'utf8').digest('hex');
}

function normExact(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s+\-*/=%^<>&|]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function wordSet(s) {
  return new Set(
    normExact(s)
      .split(' ')
      .filter(w => w.length > 0)
  );
}

// 1. SYNTAX CHECKS
let Q = [];
let MATERI = {};
let html = '';
let visualSource = '';

try {
  const sbQ = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'questions.js'), 'utf8'), sbQ, { filename: 'questions.js' });
  Q = sbQ.window.QUESTION_BANK || [];
  if (!Array.isArray(Q) || Q.length === 0) fail('SYNTAX_QUESTIONS', 'window.QUESTION_BANK is missing or empty');
} catch (e) {
  fail('SYNTAX_QUESTIONS', 'Failed to load questions.js: ' + e.message);
}

try {
  const sbM = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'materi.js'), 'utf8'), sbM, { filename: 'materi.js' });
  MATERI = sbM.window.MATERI || {};
  if (!MATERI.TWK || !MATERI.TIU || !MATERI.TKP) fail('SYNTAX_MATERI', 'window.MATERI missing TWK/TIU/TKP');
} catch (e) {
  fail('SYNTAX_MATERI', 'Failed to load materi.js: ' + e.message);
}

try {
  html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const scriptMatches = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)];
  if (!scriptMatches.length) fail('SYNTAX_HTML', 'No inline <script> blocks found in index.html');
  scriptMatches.forEach((m, i) => {
    new vm.Script(m[1], { filename: 'index.html#script-' + i });
  });
  visualSource = html;
} catch (e) {
  fail('SYNTAX_HTML', 'Inline script syntax error in index.html: ' + e.message);
}

const visualsPath = path.join(ROOT, 'visuals.js');
if (fs.existsSync(visualsPath)) {
  try {
    const vSrc = fs.readFileSync(visualsPath, 'utf8');
    new vm.Script(vSrc, { filename: 'visuals.js' });
    visualSource += '\n' + vSrc;
  } catch (e) {
    fail('SYNTAX_VISUALS', 'Syntax error in visuals.js: ' + e.message);
  }
}

// Allowed topics from materi.js
const allowedTopics = {};
for (const sub of ['TWK', 'TIU', 'TKP']) {
  allowedTopics[sub] = new Set((MATERI[sub] || []).map(x => x.topik));
}

// 2. SCHEMA + 5. DISTRACTOR BIAS + 9. BATCH METADATA
const BIAS_WHITELIST = new Set(['TIU-018', 'TIU-052']);
const BASELINE_MAX = { TWK: 90, TIU: 105, TKP: 135 };
const seenIds = new Set();
const activeCounts = { TWK: 0, TIU: 0, TKP: 0 };
const totalCounts = { TWK: 0, TIU: 0, TKP: 0 };

Q.forEach((q, idx) => {
  const id = q && q.id;
  if (typeof id !== 'string' || !/^(TWK|TIU|TKP)-\d{3}$/.test(id)) {
    fail('SCHEMA_ID', `Item #${idx} has invalid id: ${id}`, { id });
    return;
  }
  if (seenIds.has(id)) fail('DUP_ID', `Duplicate id: ${id}`, { id });
  seenIds.add(id);

  const prefix = id.slice(0, 3);
  const num = parseInt(id.slice(4), 10);
  if (q.subtes !== prefix) fail('SCHEMA_SUBTES', `${id}: subtes (${q.subtes}) does not match id prefix`, { id });
  if (totalCounts[q.subtes] != null) totalCounts[q.subtes]++;
  if (!q.retired && activeCounts[q.subtes] != null) activeCounts[q.subtes]++;

  if (!allowedTopics[q.subtes] || !allowedTopics[q.subtes].has(q.topik)) {
    fail('SCHEMA_TOPIK', `${id}: topik "${q.topik}" not in allowed materi.js topics for ${q.subtes}`, { id });
  }
  if (typeof q.soal !== 'string' || q.soal.trim().length < 25) {
    fail('SCHEMA_SOAL', `${id}: soal must be >= 25 chars`, { id });
  }
  if (!Array.isArray(q.opsi) || q.opsi.length !== 5 || q.opsi.some(o => typeof o !== 'string' || !o.trim())) {
    fail('SCHEMA_OPSI', `${id}: opsi must be 5 non-empty strings`, { id });
  } else {
    const uniq = new Set(q.opsi.map(o => o.trim()));
    if (uniq.size !== 5) fail('SCHEMA_OPSI_DUP', `${id}: opsi contains duplicate options`, { id });
  }
  if (typeof q.pembahasan !== 'string' || q.pembahasan.trim().length < 40) {
    fail('SCHEMA_PEMBAHASAN', `${id}: pembahasan must be >= 40 chars`, { id });
  }
  if (!Number.isInteger(q.tingkat) || q.tingkat < 1 || q.tingkat > 3) {
    fail('SCHEMA_TINGKAT', `${id}: tingkat must be integer 1..3`, { id });
  }
  if (q.verified !== true) {
    fail('SCHEMA_VERIFIED', `${id}: verified must be true`, { id });
  }

  let bestIdx = -1;
  if (q.subtes === 'TKP') {
    if (!Array.isArray(q.skor) || q.skor.length !== 5 || q.skor.slice().sort((a, b) => a - b).join(',') !== '1,2,3,4,5') {
      fail('SCHEMA_TKP_SKOR', `${id}: TKP skor must be permutation of [1,2,3,4,5]`, { id });
    } else {
      bestIdx = q.skor.indexOf(5);
    }
  } else {
    if (!Number.isInteger(q.kunci) || q.kunci < 0 || q.kunci > 4) {
      fail('SCHEMA_KUNCI', `${id}: kunci must be integer 0..4`, { id });
    } else {
      bestIdx = q.kunci;
    }
  }

  // Distractor length bias
  if (!BIAS_WHITELIST.has(id) && bestIdx >= 0 && Array.isArray(q.opsi) && q.opsi.length === 5) {
    const lens = q.opsi.map(o => String(o).length);
    const bestLen = lens[bestIdx];
    const secondLongest = lens.filter((_, i) => i !== bestIdx).sort((a, b) => b - a)[0];
    if (bestLen > secondLongest * 1.20 && (bestLen - secondLongest) > 18) {
      fail('LENGTH_BIAS', `${id}: best option (${bestLen} chars) exceeds 1.20x & +18 chars vs 2nd longest (${secondLongest} chars)`, { id, bestLen, secondLongest });
    }
  }

  // Batch metadata check (post-baseline ids or explicitly dated ids)
  const isPostBaseline = num > (BASELINE_MAX[prefix] || 999);
  if (isPostBaseline || q.dibuat) {
    if (typeof q.dibuat !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(q.dibuat)) {
      fail('META_DIBUAT', `${id}: post-2026-11-20 item missing valid dibuat (YYYY-MM-DD)`, { id });
    }
    if (q.era !== 'prediksi2027' && q.era !== 'fr_historis') {
      fail('META_ERA', `${id}: post-2026-11-20 item must set era to "prediksi2027" or "fr_historis"`, { id });
    }
  }
});

// 3. RATIO CHECK (active questions within ±1 of 30:35:45)
const activeTotal = activeCounts.TWK + activeCounts.TIU + activeCounts.TKP;
if (activeTotal > 0) {
  const targets = {
    TWK: (activeTotal * 30) / 110,
    TIU: (activeTotal * 35) / 110,
    TKP: (activeTotal * 45) / 110
  };
  for (const sub of ['TWK', 'TIU', 'TKP']) {
    const diff = Math.abs(activeCounts[sub] - targets[sub]);
    if (diff > 1.0001) {
      fail('RATIO_DRIFT', `${sub} active count ${activeCounts[sub]} drifts > ±1 from exact 30:35:45 target (${targets[sub].toFixed(2)}) for total ${activeTotal}`, { subtes: sub, actual: activeCounts[sub], target: +targets[sub].toFixed(2) });
    }
  }
}

// 4. DUPLICATES (exact FAIL, Jaccard >= 0.80 WARN)
const exactMap = new Map();
const tokenItems = Q.filter(q => !q.retired).map(q => ({
  id: q.id,
  norm: normExact(q.soal),
  words: wordSet(q.soal)
}));
for (let i = 0; i < tokenItems.length; i++) {
  const a = tokenItems[i];
  if (exactMap.has(a.norm)) {
    fail('DUP_EXACT', `Exact duplicate stem between ${exactMap.get(a.norm)} and ${a.id}`, { ids: [exactMap.get(a.norm), a.id] });
  } else {
    exactMap.set(a.norm, a.id);
  }
  for (let j = i + 1; j < tokenItems.length; j++) {
    const b = tokenItems[j];
    let inter = 0;
    for (const w of a.words) if (b.words.has(w)) inter++;
    const union = a.words.size + b.words.size - inter;
    const jac = union ? inter / union : 0;
    if (jac >= 0.80) {
      warn('DUP_NEAR', `Near-duplicate stems (${(jac * 100).toFixed(0)}% Jaccard): ${a.id} vs ${b.id}`, { ids: [a.id, b.id], jaccard: +jac.toFixed(3) });
    }
  }
}

// 6. ID IMMUTABILITY CHECK (against tools/id-ledger.json + automation-log.json allowedEdits)
let allowedEdits = new Set();
if (fs.existsSync(LOG_PATH)) {
  try {
    const logArr = JSON.parse(fs.readFileSync(LOG_PATH, 'utf8'));
    if (Array.isArray(logArr) && logArr.length > 0 && Array.isArray(logArr[0].allowedEdits)) {
      allowedEdits = new Set(logArr[0].allowedEdits);
    }
  } catch (e) {
    warn('LOG_PARSE', 'Could not parse automation-log.json: ' + e.message);
  }
}

const currentHashes = {};
Q.forEach(q => { if (q && q.id) currentHashes[q.id] = hashQuestion(q); });

let ledgerInitialized = false;
if (fs.existsSync(LEDGER_PATH)) {
  try {
    const ledger = JSON.parse(fs.readFileSync(LEDGER_PATH, 'utf8'));
    const prevHashes = ledger.hashes || {};
    for (const [id, oldHash] of Object.entries(prevHashes)) {
      if (!currentHashes[id]) {
        fail('IMMUTABLE_REMOVED', `Existing id ${id} was removed from questions.js (retire instead of deleting)`, { id });
      } else if (currentHashes[id] !== oldHash && !allowedEdits.has(id)) {
        fail('IMMUTABLE_MODIFIED', `Existing id ${id} changed hash without being listed in latest automation-log.json allowedEdits`, { id });
      }
    }
  } catch (e) {
    fail('LEDGER_PARSE', 'Failed to parse tools/id-ledger.json: ' + e.message);
  }
} else {
  ledgerInitialized = true;
}

// 7. SVG INTEGRITY + 8. ANSWER-LEAK GUARD
function extractCaseBlocks(src) {
  const blocks = {};
  const fnRe = /function\s+(?:figuralSVG|mathLogicVisualSVG)\s*\([^)]*\)\s*\{[\s\S]*?\n\}/g;
  const fns = src.match(fnRe) || [];
  const combined = fns.join('\n');
  const caseRe = /case\s+['"]((?:TWK|TIU|TKP)-\d{3})['"]\s*:([\s\S]*?)(?=\n\s*(?:case\s+['"]|default\s*:))/g;
  let m;
  while ((m = caseRe.exec(combined)) !== null) {
    blocks[m[1]] = m[2];
  }
  return blocks;
}

const svgBlocks = extractCaseBlocks(visualSource);
const visualPromptRe = /(?:perhatikan|amati|berdasarkan|lihat)\s+(?:baris contoh|kelima gambar|gambar|diagram|grafik|tabel|denah|sketsa|matriks|jaring-jaring|kurva|bagan|kotak|petak)|(?:gambar|diagram|grafik|denah|sketsa|matriks|jaring-jaring)\s+(?:di atas|di samping|berikut)/i;

function extractVisibleText(block) {
  // Concatenate string literals inside the JS case block, then strip HTML/SVG tags to inspect rendered text
  const parts = [];
  const strRe = /'((?:\\.|[^'\\])*)'|"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = strRe.exec(block)) !== null) {
    parts.push(m[1] !== undefined ? m[1] : m[2]);
  }
  const joined = parts.join(' ');
  const textOnly = joined.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return textOnly;
}

Q.forEach(q => {
  if (q.retired) return;
  const needsVisual = (q.subtes === 'TIU' && q.topik === 'Figural') || (q.subtes === 'TIU' && q.topik !== 'Verbal' && visualPromptRe.test(q.soal));
  if (needsVisual && !svgBlocks[q.id]) {
    fail('SVG_MISSING', `${q.id}: visual stem requires renderer case in index.html/visuals.js`, { id: q.id });
  }
  if (svgBlocks[q.id] && q.subtes !== 'TKP' && Number.isInteger(q.kunci)) {
    const ans = String(q.opsi[q.kunci] || '').trim();
    const isNumericOrShort = (/^[\d.,\-\/%°\s]+$/.test(ans) || ans.length <= 12) && ans.length >= 2;
    // Skip algebraic comparison relations like "X > Y" or single-word generic labels already in stem
    const skipGeneric = /^[XYPQ]\s*[<>≤≥=]\s*[XYPQ]$/i.test(ans);
    if (isNumericOrShort && !skipGeneric) {
      const visible = extractVisibleText(svgBlocks[q.id]);
      const stemHasAns = q.soal.includes(ans);
      const hasToken = val => {
        const v = String(val || '').trim();
        if (v.length < 2) return false;
        const escaped = v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return new RegExp('(^|[^A-Za-z0-9])' + escaped + '($|[^A-Za-z0-9])').test(visible);
      };
      // If >=3 of the 5 options appear in the diagram (e.g. Gambar A..E or Loket 1..5), the diagram is labelling all choices, not leaking the answer.
      const matchedOpts = q.opsi.filter(hasToken).length;
      if (!stemHasAns && hasToken(ans) && matchedOpts < 3) {
        fail('SVG_ANSWER_LEAK', `${q.id}: SVG visual text appears to leak answer "${ans}"`, { id: q.id, ans });
      }
    }
  }
});

// Coverage table for --full
function computeCoverage() {
  const active = Q.filter(q => !q.retired);
  const byTopic = {};
  active.forEach(q => {
    const k = `${q.subtes}|${q.topik}`;
    byTopic[k] = (byTopic[k] || 0) + 1;
  });

  const subtypeChecks = {
    'TIU|Kecukupan Data': q => q.subtes === 'TIU' && (/kecukupan data/i.test(q.tipe || '') || /pernyataan \(1\)[\s\S]*pernyataan \(2\)/i.test(q.soal)),
    'TIU|Memperkuat/Melemahkan Argumen': q => q.subtes === 'TIU' && (/argumen/i.test(q.tipe || '') || /(?:memperkuat|memperlemah|melemahkan)\s+(?:argumen|simpulan|kesimpulan)/i.test(q.soal)),
    'TIU|Analogi Kalimat': q => q.subtes === 'TIU' && q.topik === 'Verbal' && /hubungan objek pada kalimat|pola hubungan logis/i.test(q.soal),
    'TIU|Matriks 3x3': q => q.subtes === 'TIU' && q.topik === 'Figural' && /matriks/i.test(q.soal + ' ' + (q.tipe || '')),
    'TIU|Jaring-jaring / 3D': q => q.subtes === 'TIU' && q.topik === 'Figural' && /jaring|kubus|lipat|3d/i.test(q.soal + ' ' + (q.tipe || '')),
    'TIU|Deret Pecahan/Desimal/Huruf/Dua-Larik': q => q.subtes === 'TIU' && q.topik === 'Numerik' && (/deret|pola|lanjut/i.test(q.soal)) && (/[0-9]+\/[0-9]+|0\.[0-9]|,[0-9]|√|\^|[A-Z],\s*[A-Z],\s*[A-Z]|dua larik/i.test(q.soal + ' ' + (q.tipe || ''))),
    'TIU|P vs Q Tidak Dapat Ditentukan': q => q.subtes === 'TIU' && q.topik === 'Numerik' && !/kecukupan data/i.test(q.tipe || '') && /tidak dapat ditentukan|tidak cukup/i.test((q.opsi || [])[q.kunci] || ''),
    'TIU|Silogisme >=3 Premis / Negasi': q => q.subtes === 'TIU' && q.topik === 'Logika' && (/Premis 3|ingkaran|negasi|kontraposisi|ekuivalen/i.test(q.soal) || (q.soal.match(/Jika /gi) || []).length >= 2),
    'TIU|Analitis Kompleks (Meja/Jadwal/Urutan)': q => q.subtes === 'TIU' && q.topik === 'Logika' && /melingkar|bundar|berderet|baris|shift|jadwal|urutan|peringkat|sesi/i.test(q.soal),
    'TWK|KUHP / UU ASN / UU PDP': q => q.subtes === 'TWK' && /KUHP|1 Tahun 2023|1\/2023|PDP|27 Tahun 2022|20 Tahun 2023|20\/2023/i.test(q.soal + ' ' + (q.pembahasan || '')),
    'TWK|EYD V / Naskah Dinas': q => q.subtes === 'TWK' && q.topik === 'Bahasa Indonesia' && /EYD|naskah dinas|surat|efektif|baku/i.test(q.soal + ' ' + (q.pembahasan || '')),
    'TKP|AI / SPBE / PDP / Siber': q => q.subtes === 'TKP' && /AI|kecerdasan buatan|SPBE|siber|phishing|deepfake|PDP|ransomware|SSO/i.test(q.soal + ' ' + (q.tipe || '')),
    'TKP|Service Recovery': q => q.subtes === 'TKP' && q.topik === 'Pelayanan Publik' && /error|gangguan|antrean|komplain|marah|service recovery|keluhan/i.test(q.soal + ' ' + (q.tipe || '')),
    'TKP|Netralitas / Whistleblowing / Konflik': q => q.subtes === 'TKP' && /netral|pilkada|pemilu|kampanye|whistle|konflik kepentingan|benturan kepentingan|gratifikasi|suap|amplop/i.test(q.soal + ' ' + (q.pembahasan || '') + ' ' + (q.tipe || ''))
  };
  const bySubtype = {};
  for (const [k, fn] of Object.entries(subtypeChecks)) {
    bySubtype[k] = active.filter(fn).length;
  }

  const files = ['index.html', 'questions.js', 'materi.js', 'visuals.js', 'automation-log.json'];
  const fileSizesKB = {};
  files.forEach(f => {
    const fp = path.join(ROOT, f);
    if (fs.existsSync(fp)) fileSizesKB[f] = +(fs.statSync(fp).size / 1024).toFixed(1);
  });

  return { byTopic, bySubtype, fileSizesKB };
}

const passed = errors.length === 0;

if (passed && !NO_UPDATE_LEDGER) {
  fs.writeFileSync(
    LEDGER_PATH,
    JSON.stringify({ updatedAt: new Date().toISOString(), count: Q.length, hashes: currentHashes }, null, 2) + '\n',
    'utf8'
  );
}

const report = {
  status: passed ? 'PASS' : 'FAIL',
  totalQuestions: Q.length,
  activeQuestions: activeTotal,
  counts: activeCounts,
  retiredCount: Q.length - activeTotal,
  svgCasesFound: Object.keys(svgBlocks).length,
  ledgerInitialized,
  errorCount: errors.length,
  warningCount: warnings.length,
  errors,
  warnings: FULL ? warnings : warnings.slice(0, 10)
};

if (FULL) {
  Object.assign(report, computeCoverage());
}

console.log(JSON.stringify(report, null, 2));
process.exit(passed ? 0 : 1);
