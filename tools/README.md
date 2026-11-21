# SKD Coach Validation Tooling

Deterministic zero-dependency Node.js validation gate used by both manual edits and scheduled Antigravity automations.

## Usage

```bash
# Fast gate (exit 0 = PASS, 1 = FAIL; updates tools/id-ledger.json on PASS)
node tools/validate.js

# Full report (adds per-topic & per-subtype coverage table, file sizes, all warnings)
node tools/validate.js --full

# Dry-run without updating id-ledger.json
node tools/validate.js --no-update-ledger
```

## Checks Enforced

1. **Syntax**: Parses `questions.js`, `materi.js`, `visuals.js` (if present), and all inline `<script>` tags in `index.html`.
2. **Schema**: Unique IDs (`TWK|TIU|TKP-NNN`), valid `topik` from `materi.js`, 5 unique options, `verified: true`, valid `kunci` (`0..4`) or `TKP` `skor` permutation `[1..5]`.
3. **Ratio**: Active (non-retired) questions stay within `±1` of exact `30:35:45` CAT BKN proportions.
4. **Duplicates**: Exact normalized stems fail; Jaccard word similarity `>= 0.80` emits a warning.
5. **Length Bias**: Best option cannot be `> 1.20×` AND `> 18` chars longer than the 2nd-longest option (whitelist: `TIU-018`, `TIU-052`).
6. **ID Immutability**: Compares per-ID SHA-1 hashes against `tools/id-ledger.json`. Modified existing IDs fail unless explicitly listed in the newest `automation-log.json` entry's `allowedEdits`. Removed IDs fail (use `retired: true`).
7. **SVG Integrity**: Every `TIU Figural` item and visual-cued `TIU` item must have a matching renderer case in `index.html` (or `visuals.js`).
8. **Answer-Leak Guard**: Rendered text in visual SVG blocks must not reveal short/numeric answers.
9. **Batch Metadata**: All post-baseline items (`TWK > 90`, `TIU > 105`, `TKP > 135`) must carry `dibuat: "YYYY-MM-DD"` and `era`.
