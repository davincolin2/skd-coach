# SKD Coach — web app belajar SKD CPNS (1 pengguna)

Buka `index.html` langsung di browser (tanpa server, tanpa build). Data tersimpan di `localStorage` (kunci `skd-coach-v1`); gunakan **Pengaturan → Export JSON** untuk backup.

## File
| File | Isi |
|---|---|
| `index.html` | UI + seluruh logika. Objek `CONFIG` di paling atas script memuat semua aturan SKD, proporsi topik (`PROPORSI_TOPIK`), kalender H-minus, durasi menu, Leitner, XP. |
| `questions.js` | Bank soal HOTS (`window.QUESTION_BANK`): **220 soal orisinal (2× Paket Penuh CAT BKN)** (`TWK: 60, TIU: 70, TKP: 90`, `verified:false`) dengan distribusi sub-topik presisi mengikuti kisi-kisi resmi SKD CAT BKN (Kepmen PANRB No. 321/2024). |
| `materi.js` | Studio Materi Visual, Peta Konsep, Jembatan Keledai, Kartu Hafalan Aktif per topik (`window.MATERI`), tampil di menu **Materi Ringkas** dan di langkah Blok Fokus. |
| `README.md` | Dokumen ini. |

## Cara pakai singkat
1. **Hari Ini** → isi tanggal ujian & jam belajar (60/90/120) → tombol besar **Mulai Sesi Hari Ini** menjalankan menu sebagai stepper (satu langkah per layar, timer per langkah).
2. Kerjakan **Tes diagnostik** sekali (15 soal) agar prioritas topik langsung terarah.
3. Latihan dari buku/bimbel dicatat di **Catat Eksternal** (latihan, skor simulasi penuh, soal salah).
4. **Rencana** menampilkan kalender semua hari sampai ujian. Mengganti tanggal ujian (Pengaturan) membuat ulang kalender tanpa menghapus hari yang sudah selesai (progres disimpan per tanggal).

## Asumsi yang saya ambil (karena brief ambigu)
- **Rencana mulai dari hari tanggal ujian pertama kali diatur.** Hari antara tanggal mulai dan hari ini yang tidak selesai ditandai *terlewat* dan tidak ditumpuk.
- **N > 28:** hari lebihnya (H-N s/d H-29) jadi *hari ringan*. **N < 28:** kalender mulai dari baris H-N. **N < 10 (dan ≥ 3):** hari pertama diganti menjadi 1 hari *simulasi baseline* (Fase 1 dipadatkan). Untuk N antara 10–24 tidak ada hari baseline otomatis; gunakan tes diagnostik.
- **"Topik berfrekuensi tinggi" (Fase 1)** adalah tebakan saya, ada di `CONFIG.TOPIK_FREQUENSI_TINGGI`. Ubah sesuai pengalamanmu.
- **Streak** naik jika semua langkah bertanda *core* selesai: langkah 1, 2, 5 untuk hari penuh (Warm-up, Blok Fokus, Review Kesalahan). Hari simulasi: Warm-up, Simulasi, Review Mendalam. Hari lain: langkah setara (Warm-up + review). **Mode Padat** (Warm-up + Blok Fokus) juga mengkredit streak karena tidak punya langkah review.
- **Freeze streak (2):** dipakai otomatis untuk menutup hari terlewat saat aplikasi dibuka; bila habis, streak kembali ke 0.
- **Mode Padat 30 menit** ditawarkan di kartu Hari Ini hanya bila hari kemarin (hari belajar) terlewat.
- **Soal TKP "salah":** pilihan dengan skor < `CONFIG.TKP_OK_MIN` (4) masuk Buku Kesalahan. Akurasi TKP = skor / skor maksimum.
- **Log eksternal TKP:** isi *skor total* dan *jumlah soal* (maks = soal × 5). Skor simulasi eksternal TWK/TIU harus kelipatan 5.
- **Estimasi skor** per subtes = rata-rata rasio 3 entri terakhir (latihan, sesi harian, simulasi, log eksternal) × skor maksimum. Prioritas subtes = selisih terbesar passing grade − estimasi (belum ada data dianggap selisih = passing grade). Tidak ada persentase peluang lolos.
- **Pindah topik Blok Fokus:** topik dilewati jika 2 sesi terakhir (minimal 2 soal) akurasi ≥ 80%.
- **Simulasi Mini:** bila bank < 110 soal (atau satu subtes kurang dari kuotanya) simulasi memakai proporsi 30:35:45 yang diskalakan, durasi proporsional, skor diskalakan ke skala penuh dan diberi label *MINI (estimasi)*. Lencana "Lolos passing grade" hanya dari simulasi penuh.
- **Urutan subtes simulasi** dipilih sebelum mulai (6 kombinasi) dan dicatat; perbandingan ada di halaman Simulasi/Statistik.
- **Label kesalahan simulasi:** soal kosong otomatis berlabel "kehabisan waktu" (bisa diubah); lainnya diberi label manual di Review Mendalam.
- **Menit fokus** target harian = semua menit belajar tercatat (langkah sesi, latihan, Pomodoro, log eksternal).
- Bank internal telah diperbarui menjadi **220 soal HOTS penuh (2× Paket CAT BKN)** (`TWK 60, TIU 70, TKP 90`) sehingga setiap sesi **Simulasi Penuh 110 soal / 100 menit** memprioritaskan soal yang belum muncul di simulasi sebelumnya, ditambah **pengacak urutan opsi A–E otomatis (Option Shuffler)** agar pengguna tidak menghafal huruf kunci jawaban.
- Proporsi sub-topik di `questions.js` (220 soal) dan `CONFIG.PROPORSI_TOPIK` (per 110 soal simulasi):
  - **TWK (60 soal total · 30 soal/simulasi · 27,3%)**: Pilar Negara 16 soal (8/sim · 26,7%), Nasionalisme 12 soal (6/sim · 20,0%), Integritas 12 soal (6/sim · 20,0%), Bela Negara 10 soal (5/sim · 16,7%), Bahasa Indonesia 10 soal (5/sim · 16,7%).
  - **TIU (70 soal total · 35 soal/simulasi · 31,8%)**: Numerik 30 soal (15/sim · 42,9%), Logika 16 soal (8/sim · 22,9%), Verbal 14 soal (7/sim · 20,0%), Figural 10 soal (5/sim · 14,3%).
  - **TKP (90 soal total · 45 soal/simulasi · 40,9%)**: Pelayanan Publik 16 soal (8/sim · 17,8%), Profesionalisme 16 soal (8/sim · 17,8%), TIK 16 soal (8/sim · 17,8%), Jejaring Kerja 14 soal (7/sim · 15,6%), Sosial Budaya 14 soal (7/sim · 15,6%), Anti-Radikalisme 14 soal (7/sim · 15,6%).
- Soal seed TWK hanya berisi fakta konstitusional/historis yang terverifikasi; tetap berstatus *Belum diverifikasi* sesuai aturan sistem.

## Menambah soal
Pengaturan → **Impor soal**: tempel JSON array (atau `{"soal":[...]}`), klik Validasi, lalu Impor. Atau edit `questions.js`.
```json
{"id":"TWK-101","subtes":"TWK","topik":"Pilar Negara","soal":"...","opsi":["A","B","C","D","E"],"kunci":2,"pembahasan":"...","tingkat":1,"verified":false}
{"id":"TKP-101","subtes":"TKP","topik":"Pelayanan Publik","soal":"...","opsi":["A","B","C","D","E"],"skor":[1,5,3,4,2],"pembahasan":"...","tingkat":2}
```

## Debug
`window.SKD` di console menyediakan `buildCalendar(examDate, startDate)`, `scoreSubtes`, `menuFor`, `validateQuestion`, dll. Contoh: `SKD.buildCalendar('2026-12-05','2026-11-07').map(d=>d.k+':'+d.type)`.

## Status pengujian
Lingkungan pembuatan tidak bisa menjalankan perintah shell/browser, jadi kode **belum diuji di browser**. Lihat `walkthrough.md` untuk daftar uji manual.
