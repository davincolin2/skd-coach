# Changelog — SKD Coach Bank Soal & Automasi

Riwayat pembaruan bank soal, materi ringkas, dan sistem automasi (terbaru di atas). Dihasilkan dari `automation-log.json`.

## 2026-11-21 — `SUCCESS` (weekly-learn · adaptive difficulty)
- **Soal baru:** `0` · **Total bank:** `374` soal (`102 TWK | 119 TIU | 153 TKP`)
- **Peningkatan ilmu belajar (#1):** Implementasi *Desirable Difficulty* adaptif (`CONFIG.ADAPTIF`, `rollingAccFor()`, `adaptiveLevelInfo()`, integrasi soft-penalty di `pickQuestions()` untuk menjaga zona akurasi bergulir 70–85%), badge tingkat `L1 Dasar` / `L2 Aplikasi` / `L3 HOTS` di `mountQuestion()`, tampilan target level di `Blok Fokus` & `Latihan Topik`, serta perbaikan filter `minLevel: 3` HOTS di `pickSimQuestions()`.

## 2026-11-21 — `SUCCESS` (manual · backfill + setup)
- **Soal baru:** `+22` (`TWK-097..102`, `TIU-113..119`, `TKP-145..153`)
- **Total bank:** `374` soal (`102 TWK | 119 TIU | 153 TKP` — rasio presisi `30:35:45`)
- **Fokus gap:** TIU Kecukupan Data (0 → 2), TIU Memperkuat/Melemahkan Argumen (1 → 3), TIU Matriks Figural 3×3 (1 → 2), TIU Jaring-Jaring Kubus 3D (1 → 2), TIU Deret Huruf & Pecahan Dua Larik (4 → 5), TWK KUHP Nasional & Checks-Balances, TWK EYD V & Wacana Panjang, TKP Service Recovery, AI/PDP, Netralitas & Anti-Radikalisme
- **Sistem baru:** `tools/validate.js` + `tools/id-ledger.json` (hard gate), panel **🆕 Update Terbaru Bank Soal** di `#/hari-ini`, tabel **Riwayat Update Otomatis** di `#/pengaturan`, `sources.json`, dan 4 kartu metode baru di `materi.js`.

## 2026-11-20 — `SUCCESS` (manual · `06b8c7f`)
- **Soal baru:** `+22` (`TWK-091..096`, `TIU-106..112`, `TKP-136..144`)
- **Total bank:** `352` soal (`96 TWK | 112 TIU | 144 TKP`)
- **Fokus gap:** Deret Dua Larik, Tabel & Grafik, Kuantitatif Geometri, Silogisme & Modus, Penalaran Analitis, Deret Serial Figural, Service Recovery, AI & UU PDP
- **Catatan:** Manual follow-up batch: +22 soal HOTS (330 -> 352), filter batch_baru & era eksplisit, plus 6 SVG baru.

## 2026-11-19 — `MISSED` (slot A)
- **Soal baru:** `0` · **Total bank:** `330` soal
- **Catatan:** Slot 12:11 WIB terlewat (PC/Antigravity tidak aktif saat jadwal cron).

## 2026-11-18 — `MISSED` (slot A)
- **Soal baru:** `0` · **Total bank:** `330` soal
- **Catatan:** Slot 12:11 WIB terlewat (PC/Antigravity tidak aktif saat jadwal cron).

## 2026-11-17 — `SUCCESS` (slot A · `c95adfe`)
- **Soal baru:** `0` (rotasi lama) · **Total bank:** `330` soal
- **Catatan:** Update PREDIKSI_2026, +2 kartu materi.js (Anti-Intervensi Data, Once-Only), rotasi TIU-053 pie-chart SVG.

## 2026-11-16 — `SUCCESS` (slot A · `7930b0a`)
- **Soal baru:** `0` (rotasi lama) · **Total bank:** `330` soal
- **Catatan:** Update PREDIKSI_2026, tambah Anti Split-Contract & deepfake di materi.js, rotasi 2 soal & SVG.
