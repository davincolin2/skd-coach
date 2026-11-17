/* =====================================================================
   MATERI RINGKAS & VISUAL MEMORY ANCHORS SKD (window.MATERI)
   Dirancang dengan prinsip Psikologi Kognitif:
   1. Chunking & Dual-Coding (peta konsep visual k -> v)
   2. Von Restorff Isolation Effect (kata kunci, pasal, rumus ditonjolkan)
   3. Mnemonic / Jembatan Keledai (akronim pengikat memori jangka panjang)
   4. Active Recall (format "Kunci = Jawaban" untuk mode Tutup & Uji Ingatan)
   ===================================================================== */
window.MATERI = {
  UMUM: {
    judul: 'Strategi & Psikologi Lulus SKD CPNS',
    poin: [
      'TWK & TIU: Benar = +5, Salah = 0, Kosong = 0. Jangan pernah mengosongkan jawaban! Jika waktu mepet, eliminasi 2 opsi ekstrem lalu pilih yang paling masuk akal.',
      'TKP: Semua opsi bernilai 1 s/d 5 (Kosong = 0). Kunci skor 5: pilih tindakan paling proaktif, berempati, taat prosedur (SOP), dan mengutamakan kepentingan publik.',
      'Manajemen Waktu: 110 soal dalam 100 menit (±54 detik/soal). Jika 1 soal memakan >60 detik, tandai Ragu-ragu, lompati, dan amankan soal mudah dulu.',
      'Target Aman Passing Grade: TWK min. 65 (13 benar dari 30) · TIU min. 80 (16 benar dari 35) · TKP min. 166 (rata-rata 3,7 poin dari 45 soal). Wajib lolos KETIGANYA.',
      'Urutan Pengerjaan Rekomendasi: TKP dulu (saat pikiran masih segar untuk membaca skenario) → TWK (penalaran kebangsaan) → TIU (hitungan & logika). Bandingkan hasilnya di menu Simulasi.',
      'Metode Belajar Otak Aktif: Baca Peta Konsep 2 menit → Aktifkan "Mode Uji Ingatan" (tebak kata kunci yang ditutup) → Kerjakan latihan soal → Tulis 1 kalimat aturan di Buku Kesalahan.'
    ],
    peta: [
      { k: 'TWK (30 Soal)', v: 'Target ≥ 65 (Min. 13 Benar) · Fokus Penalaran & Studi Kasus', tag: 'TWK' },
      { k: 'TIU (35 Soal)', v: 'Target ≥ 80 (Min. 16 Benar) · Fokus Pola Cepat & Eliminasi', tag: 'TIU' },
      { k: 'TKP (45 Soal)', v: 'Target ≥ 166 (Rata-rata 3,7/soal) · Fokus Konsistensi Skor 4-5', tag: 'TKP' },
      { k: '100 Menit', v: '±54 detik/soal · Jangan terpaku di 1 soal hitungan panjang', tag: 'WAKTU' }
    ]
  },
  TWK: [
    {
      topik: 'Nasionalisme',
      ringkas: 'Cinta tanah air yang inklusif, menjaga persatuan bangsa, dan memahami tonggak sejarah berdirinya NKRI.',
      jembatan: 'BU-SU-PA-PRO-SAH = Budi Utomo (20 Mei 08) → Sumpah Pemuda (28 Okt 28) → Pancasila (1 Jun 45) → Proklamasi (17 Agt 45) → Sahkan UUD (18 Agt 45).',
      peta: [
        { k: '20 Mei 1908', v: 'Budi Utomo lahir → Hari Kebangkitan Nasional (awal perjuangan organisasi modern)' },
        { k: '28 Okt 1928', v: 'Sumpah Pemuda → Satu tumpah darah, satu bangsa, menjunjung bahasa persatuan Indonesia' },
        { k: '22 Juni 1945', v: 'Piagam Jakarta → Dirumuskan Panitia Sembilan (BPUPKI)' },
        { k: '18 Agt 1945', v: 'Sidang PPKI I → Mengesahkan UUD 1945, memilih Presiden-Wapres, membentuk KNIP' },
        { k: 'Alur Konstitusi', v: 'UUD 1945 (1945-1949) → Konstitusi RIS (1949-1950) → UUDS 1950 (1950-1959) → Dekrit 5 Juli 1959' }
      ],
      inti: [
        'Nasionalisme Indonesia = cinta tanah air dan mendahulukan kepentingan bangsa tanpa merendahkan bangsa lain (bukan chauvinisme/etnosentrisme).',
        'Tonggak sejarah utama: 20 Mei 1908 Budi Utomo (Hari Kebangkitan Nasional); 28 Oktober 1928 Sumpah Pemuda; 1 Juni 1945 lahirnya istilah Pancasila; 17 Agustus 1945 Proklamasi; 18 Agustus 1945 PPKI mengesahkan UUD 1945.',
        'Sikap di era globalisasi: terbuka terhadap kemajuan iptek dunia, tetap melestarikan budaya lokal, bangga menggunakan produk dalam negeri, dan menjaga persatuan di ruang digital.',
        'Sejarah perumusan dasar negara: BPUPKI membahas dasar negara (29 Mei–1 Juni 1945); Panitia Sembilan menyusun Piagam Jakarta (22 Juni 1945); PPKI mengesahkan UUD 1945 pada 18 Agustus 1945.',
        'Perjalanan konstitusi: UUD 1945 (18 Agt 1945 - 27 Des 1949) → Konstitusi RIS (27 Des 1949 - 17 Agt 1950) → UUDS 1950 (17 Agt 1950 - 5 Jul 1959) → Dekrit Presiden 5 Juli 1959 kembali ke UUD 1945.'
      ],
      hafal: [
        '20 Mei 1908 = Hari Kebangkitan Nasional (Budi Utomo)',
        '28 Oktober 1928 = Hari Sumpah Pemuda (Kongres Pemuda II)',
        '22 Juni 1945 = Piagam Jakarta oleh Panitia Sembilan',
        '17 Agustus 1945 = Proklamasi Kemerdekaan RI',
        '18 Agustus 1945 = Pengesahan UUD 1945 oleh PPKI',
        '5 Juli 1959 = Dekrit Presiden kembali ke UUD 1945'
      ],
      tips: [
        'JEBAKAN: Opsi ekstrem seperti "menolak semua budaya asing" atau "menganggap suku sendiri paling mulia" pasti SALAH.',
        'TRIK CEPAT: Pilih opsi yang memadukan identitas nasional + keterbukaan global + persatuan lintas daerah.'
      ]
    },
    {
      topik: 'Integritas',
      ringkas: 'Keselarasan antara hati, ucapan, dan tindakan sesuai kode etik serta nilai antikorupsi, meskipun tanpa pengawasan.',
      jembatan: '9 Nilai Antikorupsi KPK: JuPeMa DiTaKeSeBeA (Jujur, Peduli, Mandiri — Disiplin, Tanggung jawab, Kerja keras — Sederhana, Berani, Adil). Core Value ASN: BerAKHLAK.',
      peta: [
        { k: 'Inti Integritas', v: 'Jujur, Disiplin, Tanggung Jawab (konsisten kata & perbuatan walau tak diawasi)' },
        { k: 'Etos Kerja', v: 'Mandiri, Kerja Keras, Sederhana (tidak bergaya hidup mewah / flexing)' },
        { k: 'Sikap Sosial', v: 'Peduli, Berani, Adil (berani menolak & melaporkan kecurangan)' },
        { k: 'Batas Gratifikasi', v: 'Wajib lapor ke KPK maksimal 30 hari kerja sejak diterima' },
        { k: 'Anti Split-Contract', v: 'Dilarang memecah paket pengadaan E-Katalog untuk menghindari tender terbuka' },
        { k: 'Anti-Intervensi Data', v: 'Verifikasi DTSEN/bansos wajib objektif sesuai fakta lapangan walau ada tekanan kerabat atasan' },
        { k: 'ASN BerAKHLAK', v: 'Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif' }
      ],
      inti: [
        'Integritas = konsistensi antara perkataan, perbuatan, dan nilai moral/hukum, terutama ketika tidak ada orang lain yang mengawasi.',
        'Sembilan nilai antikorupsi KPK: Jujur, Peduli, Mandiri, Disiplin, Tanggung jawab, Kerja keras, Sederhana, Berani, Adil.',
        'Gratifikasi yang berhubungan dengan jabatan dan berlawanan dengan kewajiban wajib ditolak, atau jika tidak bisa ditolak seketika, wajib dilaporkan ke KPK paling lambat 30 hari kerja.',
        'Nilai dasar ASN (BerAKHLAK): Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif.'
      ],
      hafal: [
        'JuPeMa DiTaKeSeBeA = 9 nilai antikorupsi KPK (Jujur, Peduli, Mandiri, Disiplin, Tanggung jawab, Kerja keras, Sederhana, Berani, Adil)',
        'Batas lapor gratifikasi ke KPK = Maksimal 30 hari kerja sejak diterima',
        'Akuntabel (BerAKHLAK) = Bertanggung jawab atas kepercayaan & menggunakan aset negara secara jujur'
      ],
      tips: [
        'JEBAKAN: Opsi "menerima hadiah lalu disumbangkan ke panti asuhan" atau "membantu kerabat asalkan syarat hampir lengkap" tetap melanggar integritas.',
        'TRIK CEPAT: Pada kasus suap/titipan/gratifikasi, selalu pilih menolak dengan sopan dan melaporkan melalui saluran resmi (WBS/KPK).'
      ]
    },
    {
      topik: 'Bela Negara',
      ringkas: 'Tekad, sikap, dan tindakan warga negara yang teratur dan menyeluruh untuk menjaga kedaulatan NKRI berdasarkan Pancasila & UUD 1945.',
      jembatan: 'Pasal 27(3) = Bela Negara (Umum) vs Pasal 30(1) = Pertahanan & Keamanan (Hankam). 5 Nilai: Cinta - Sadar - Yakin Pancasila - Rela Berkorban - Kemampuan Awal.',
      peta: [
        { k: 'Pasal 27 Ayat (3)', v: 'Setiap warga negara berhak & wajib ikut serta dalam upaya PEMBELAAN NEGARA' },
        { k: 'Pasal 30 Ayat (1)', v: 'Tiap-tiap warga negara berhak & wajib ikut serta dalam usaha PERTAHANAN & KEAMANAN negara' },
        { k: 'UU No. 3 / 2002 & UU 23 / 2019', v: 'Pertahanan Negara & PSDN (Komcad, Pengabdian Profesi, & Kedaulatan Ekologis/Pangan)' },
        { k: '5 Nilai Dasar', v: '1) Cinta tanah air · 2) Sadar berbangsa/bernegara · 3) Yakin Pancasila · 4) Rela berkorban · 5) Kemampuan awal' },
        { k: 'Fokus PHTC 2026', v: 'Satgas Konservasi Polhut & Manggala Agni (pencegahan karhutla), ketahanan pangan/energi nasional' }
      ],
      inti: [
        'Dasar hukum konstitusional: Pasal 27 ayat (3) UUD NRI 1945 (upaya pembelaan negara) dan Pasal 30 ayat (1) UUD NRI 1945 (usaha pertahanan dan keamanan negara), UU No. 3 Tahun 2002, serta UU No. 23 Tahun 2019 (PSDN).',
        'Lima nilai dasar bela negara: (1) Cinta tanah air, (2) Sadar berbangsa dan bernegara, (3) Setia/yakin pada Pancasila sebagai ideologi negara, (4) Rela berkorban untuk bangsa dan negara, (5) Memiliki kemampuan awal bela negara.',
        'Wujud bela negara nonmiliter dalam keseharian: pengabdian profesi tanpa pamrih (seperti Satgas Polhut & Manggala Agni menjaga hutan dan memadamkan karhutla), ketahanan pangan lokal, menjaga kelestarian lingkungan, melawan disinformasi digital, dan ketaatan hukum.'
      ],
      hafal: [
        'Pasal 27 ayat (3) UUD 1945 = Hak & kewajiban ikut serta dalam upaya pembelaan negara',
        'Pasal 30 ayat (1) UUD 1945 = Hak & kewajiban ikut serta dalam usaha pertahanan dan keamanan negara',
        '5 Nilai Bela Negara = Cinta tanah air, Sadar berbangsa, Yakin Pancasila, Rela berkorban, Kemampuan awal',
        'Pasal Populer Lain = Pasal 28 (HAM), Pasal 29 (Agama), Pasal 31 (Pendidikan 20%), Pasal 33 (Ekonomi)'
      ],
      tips: [
        'JEBAKAN: Opsi yang menyatakan bela negara "hanya tugas TNI/Polri" atau "harus angkat senjata" adalah SALAH.',
        'TRIK CEPAT: Bedakan kata kunci di soal — jika soal menyebut "upaya pembelaan negara" pilih Pasal 27 ayat (3); jika menyebut "usaha pertahanan dan keamanan" pilih Pasal 30 ayat (1).'
      ]
    },
    {
      topik: 'Pilar Negara',
      ringkas: 'Empat tiang penyangga kehidupan berbangsa: Pancasila (Ideologi), UUD 1945 (Konstitusi), NKRI (Bentuk Negara), Bhinneka Tunggal Ika (Semboyan).',
      jembatan: '4 Pilar = Pa-U-N-Bhi. Pasal 1 Ayat 1-2-3 = (1) Kesatuan-Republik, (2) Kedaulatan Rakyat sesuai UUD, (3) Negara Hukum. Simbol Pasal 35-36B = Bendera (35), Bahasa (36), Lambang (36A), Lagu (36B).',
      peta: [
        { k: 'Sila 1 — Bintang', v: 'Ketuhanan: toleransi umat beragama, bebas beribadah, tidak memaksakan agama' },
        { k: 'Sila 2 — Rantai', v: 'Kemanusiaan: kesetaraan derajat, HAM, tenggang rasa, membela kebenaran & keadilan' },
        { k: 'Sila 3 — Beringin', v: 'Persatuan: menempatkan kesatuan bangsa di atas kepentingan pribadi/golongan, cinta tanah air' },
        { k: 'Sila 4 — Banteng', v: 'Kerakyatan: musyawarah mufakat, menghargai pendapat, tidak memaksakan kehendak, pemilu' },
        { k: 'Sila 5 — Padi Kapas', v: 'Keadilan Sosial: hidup hemat/tidak boros, menghargai karya orang lain, gotong royong, pemerataan' },
        { k: 'Pasal 1 Ayat (1)-(3)', v: '(1) Kesatuan & Republik · (2) Kedaulatan di tangan rakyat menurut UUD · (3) Negara Hukum' }
      ],
      inti: [
        'Empat Pilar Kebangsaan: Pancasila, UUD NRI 1945, NKRI, dan Bhinneka Tunggal Ika (dari Kakawin Sutasoma karya Mpu Tantular pada masa Majapahit).',
        'Lambang Garuda Pancasila: Sila 1 Bintang, Sila 2 Rantai Emas, Sila 3 Pohon Beringin, Sila 4 Kepala Banteng, Sila 5 Padi dan Kapas.',
        'Pasal 1 UUD NRI 1945: ayat (1) Negara Kesatuan berbentuk Republik; ayat (2) Kedaulatan berada di tangan rakyat dan dilaksanakan menurut UUD; ayat (3) Negara Indonesia adalah negara hukum.',
        'Amandemen UUD 1945 dilakukan 4 kali (1999, 2000, 2001, 2002) untuk membatasi kekuasaan eksekutif, menghapus lembaga DPA, dan memperkuat checks and balances.',
        'Pasal Kunci UUD 1945: Pasal 2-3 (MPR); Pasal 6A (Presiden dipilih langsung); Pasal 7 (Masa jabatan 5 tahun, maks 2 periode); Pasal 20 (DPR pemegang kekuasaan membentuk UU); Pasal 24 (MA & MK); Pasal 28A-28J (HAM, dengan Pasal 28J sebagai kewajiban menghormati HAM orang lain); Pasal 31 (Pendidikan & anggaran min. 20%); Pasal 33 (Ekonomi kerakyatan); Pasal 34 (Fakir miskin & jaminan sosial).',
        'Atribut Kenegaraan: Pasal 35 (Bendera Sang Merah Putih), Pasal 36 (Bahasa Indonesia), Pasal 36A (Lambang Garuda Pancasila & Bhinneka Tunggal Ika), Pasal 36B (Lagu Kebangsaan Indonesia Raya).'
      ],
      hafal: [
        'Pasal 1 ayat (1), (2), (3) = (1) Kesatuan-Republik, (2) Kedaulatan Rakyat menurut UUD, (3) Negara Hukum',
        'Pasal 28E vs Pasal 28J = 28E kebebasan berpendapat/beragama; 28J kewajiban menghormati HAM orang lain & patuh UU',
        'Pasal 31 ayat (4) = Anggaran pendidikan minimal 20% dari APBN dan APBD',
        'Pasal 35, 36, 36A, 36B = 35 Bendera, 36 Bahasa, 36A Lambang Garuda, 36B Lagu Indonesia Raya',
        'Beda Sila 2 vs Sila 5 = Sila 2 fokus harkat kemanusiaan/empati personal; Sila 5 fokus kesejahteraan umum/hidup hemat/hak publik'
      ],
      tips: [
        'JEBAKAN: Sering tertukar antara pengamalan Sila ke-2, ke-3, dan ke-5. Ingat: Sila 2 = adab & empati antarmanusia; Sila 3 = keutuhan bangsa di atas golongan; Sila 5 = keadilan ekonomi, fasilitas publik, tidak boros.',
        'TRIK CEPAT: Untuk soal HAM, pilih jawaban yang menyeimbangkan hak kebebasan (Pasal 28E) dengan kewajiban menjaga ketertiban umum (Pasal 28J).'
      ]
    },
    {
      topik: 'Bahasa Indonesia',
      ringkas: 'Ketepatan ejaan (EYD V), pemilihan kata baku (KBBI), keefektifan kalimat, dan penentuan ide pokok paragraf.',
      jembatan: 'Di-Pisah kalau Tempat (di rumah, ke kota), Di-Gabung kalau Kerja Pasif (dibeli, ditulis). Kalimat Efektif = Subjek + Predikat jelas, tanpa kata ganda (pleonasme).',
      peta: [
        { k: 'Baku vs Tidak Baku 1', v: 'Aktivitas (bukan aktifitas) · Risiko (bukan resiko) · Apotek (bukan apotik) · Praktik (bukan praktek)' },
        { k: 'Baku vs Tidak Baku 2', v: 'Nasihat (bukan nasehat) · Analisis (bukan analisa) · Izin (bukan ijin) · Silakan (bukan silahkan)' },
        { k: 'Baku vs Tidak Baku 3', v: 'Kualitas (bukan kwalitas) · Kuitansi (bukan kwitansi) · Sistem (bukan sistim) · Hakikat (bukan hakekat)' },
        { k: 'Hindari Pleonasme', v: 'Salah: "para hadirin", "naik ke atas", "saling bantu-membantu" → Cukup pilih salah satu kata' },
        { k: 'Huruf Kapital Geografi', v: 'Kapital jika diikuti nama diri: "Sungai Kapuas", "Jeruk Bali" (nama jenis = huruf kecil: "jeruk bali", "kunci inggris")' }
      ],
      inti: [
        'Preposisi "di, ke, dari" ditulis TERPISAH jika menunjukkan tempat/arah (di kantor, ke luar negeri); imbuhan "di-" ditulis SERANGKAI jika membentuk kata kerja pasif (dikelola, disahkan).',
        'Kata baku yang paling sering keluar: aktivitas, risiko, nasihat, apotek, analisis, izin, silakan, kualitas, praktik, frekuensi, sistem, hakikat, kuitansi, objek, teknik, cedera, cendekiawan, karier, meterai, zaman.',
        'Kalimat efektif wajib memenuhi: (1) memiliki Subjek dan Predikat yang jelas (tidak diawali kata depan "Di/Dalam/Bagi/Untuk" sebelum subjek), (2) hemat kata/bebas pleonasme, (3) struktur paralel/sejajar.',
        'Penulisan gelar dan nama: tanda koma memisahkan nama dan gelar akademik (Budi Santoso, S.H., M.H.), sapaan kekerabatan memakai huruf kapital (Silakan duduk, Pak!).'
      ],
      hafal: [
        'Baku berhuruf i (bukan e) = Risiko, Nasihat, Apotek, Praktik, Sistem, Hakikat, Cedera',
        'Baku berhuruf v/f/z = Aktivitas, Produktivitas, Frekuensi, Izin, Zaman',
        'Baku tanpa h/w = Silakan (bukan silahkan), Kualitas (bukan kwalitas), Kuitansi (bukan kwitansi)',
        'Ciri Subjek Kalimat = Tidak boleh didahului preposisi (Bagi, Untuk, Dalam, Di, Pada) di awal kalimat'
      ],
      tips: [
        'JEBAKAN: Kalimat panjang yang terdengar puitis tetapi diawali kata "Dalam rapat itu membahas..." adalah kalimat TIDAK efektif (kehilangan subjek). Seharusnya: "Rapat itu membahas..." atau "Dalam rapat itu dibahas...".',
        'TRIK CEPAT: Pindai opsi A-E untuk mencari 1 kata tidak baku atau pemborosan kata ("para bapak-bapak", "agar supaya") lalu langsung coret opsi tersebut.'
      ]
    }
  ],
  TIU: [
    {
      topik: 'Verbal',
      ringkas: 'Kemampuan memahami relasi makna kata (sinonim, antonim, analogi) serta menarik simpulan logis dari wacana.',
      jembatan: 'Analogi = Buat Kalimat Jembatan yang Spesifik! Pastikan urutan Kiri:Kanan pada soal persis sama dengan Kiri:Kanan pada opsi.',
      peta: [
        { k: 'Analogi Kata', v: 'Bangun 1 kalimat penghubung spesifik (mis. "Payung digunakan untuk melindungi dari Hujan")' },
        { k: 'Sinonim / Antonim', v: 'Uji nuansa positif vs negatif kata dan perhatikan awalan (in-, a-, de-, dis-, nir- = tidak/lawan)' },
        { k: 'Ide Pokok Paragraf', v: 'Cek kalimat pertama (deduktif) atau kalimat terakhir (induktif). Hindari kalimat yang cuma berisi contoh/angka' }
      ],
      inti: [
        'Sinonim & Antonim: perhatikan konotasi kata (positif/negatif) dan imbuhan serapan (mis. "anomali" = penyimpangan, "konkurensi" = persaingan, "evokasi" = penggugah rasa, "tendensi" = kecenderungan).',
        'Analogi Verbal: temukan hubungan logis paling spesifik antara pasangan kata pertama (sebab-akibat, alat-fungsi, bagian-utuh, pelaku-tempat, urutan proses), lalu terapkan dengan arah yang SAMA pada pasangan kedua.',
        'Pemahaman Bacaan: baca kalimat pertanyaan terlebih dahulu, baru cari kata kuncinya di teks. Kesimpulan yang benar harus merangkum fakta teks tanpa menambahkan asumsi di luar bacaan.'
      ],
      hafal: [
        'Arah Analogi A : B = C : D → Jika A adalah ALAT dan B adalah FUNGSI, maka C wajib ALAT dan D wajib FUNGSI (jangan terbalik)',
        'Awalan Negatif (Lawan Kata) = a-/ab- (amoral, abnormal), in-/im- (inkonstitusional), de-/dis- (degradasi, disharmoni), nir- (nirlaba)'
      ],
      tips: [
        'JEBAKAN: Pada soal Antonim, opsi A sering kali adalah SINONIM dari kata soal untuk menjebak peserta yang terburu-buru!',
        'TRIK CEPAT: Jika ragu pada analogi, persempit kalimat hubungannya dengan menyertakan kata kerja aktif.'
      ]
    },
    {
      topik: 'Numerik',
      ringkas: 'Kecepatan berhitung pecahan/persen, mengenali pola deret angka, perbandingan kuantitatif (X vs Y), dan soal cerita.',
      jembatan: 'Pecahan Istimewa: 1/8 = 12,5% · 1/6 = 16,67% · 1/5 = 20% · 1/4 = 25% · 1/3 = 33,33% · 3/8 = 37,5%. Kerja Bersama: t = (a × b) / (a + b).',
      peta: [
        { k: 'Deret Angka', v: 'Cek selisih 1 langkah → selisih lompat 1 (ganjil vs genap) → rasio kali/bagi → pangkat/Fibonacci' },
        { k: 'Kerja Bersama', v: '1/t = 1/a + 1/b atau rumus cepat 2 orang: t = (a × b) / (a + b)' },
        { k: 'Perbandingan Senilai vs Berbalik', v: 'Makin banyak barang = makin mahal (Senilai: A1/A2 = B1/B2) · Makin banyak pekerja = makin cepat selesai (Berbalik: P1 × H1 = P2 × H2)' },
        { k: 'Kuantitatif X vs Y', v: 'Sederhanakan/coret angka yang sama di kedua ruas tanpa menghitung penuh' },
        { k: 'Geometri Kanal & Tampungan Air', v: 'Penampang trapesium: Luas = ((a + b) / 2) × t. Volume prisma saluran = Luas alas × Panjang (L)' },
        { k: 'Diagram Batang & Tabel Data BGN/BPS', v: 'Hitung persentase efisiensi = (Realisasi / Target) × 100%; identifikasi titik capaian ekstrem (maks/min)' }
      ],
      inti: [
        'Deret Angka: periksa selisih berurutan; jika angka naik-turun tajam atau panjang deret ≥ 7 suku, hampir pasti merupakan deret larik (lompat 1 suku atau lompat 2 suku).',
        'Aritmetika Sosial & Persen: Harga jual setelah untung u% = (100 + u)% × Harga Beli. Diskon ganda 20% + 10% bukan 30%, melainkan bayar 0,8 × 0,9 = 72% (total diskon 28%).',
        'Kecepatan, Jarak, Waktu: Jarak (S) = Kecepatan (v) × Waktu (t). Waktu berpapasan (berangkat bersamaan) = Jarak Total / (v1 + v2). Waktu menyusul = Selisih Jarak / (v2 - v1).',
        'Perbandingan Kuantitatif (X vs Y): bandingkan nilai X dan Y dengan menyederhanakan bentuk aljabar atau menguji angka ekstrem. Jika tanda hubungan berubah-ubah saat diuji angka positif vs negatif/pecahan, pilih " hubungan X dan Y tidak dapat ditentukan".'
      ],
      hafal: [
        'Pecahan Istimewa = 12,5% = 1/8 · 20% = 1/5 · 25% = 1/4 · 33,33% = 1/3 · 37,5% = 3/8 · 62,5% = 5/8 · 75% = 3/4 · 87,5% = 7/8',
        'Kerja Bersama 2 Orang = Waktu selesai t = (a × b) / (a + b)',
        'Perbandingan Berbalik Nilai (Pekerja × Hari) = P1 × H1 = P2 × H2 (Total beban kerja = Jumlah pekerja × waktu)',
        'Waktu Berpapasan = Jarak Total / (v1 + v2)'
      ],
      tips: [
        'JEBAKAN: Pada soal "pekerjaan terhenti selama k hari", sisa beban kerja dihitung dari sisa hari seharusnya dibagi sisa hari yang tersedia.',
        'TRIK CEPAT: Gunakan angka belakang (digit terakhir) atau taksiran pembulatan untuk mengeliminasi 3-4 opsi tanpa menghitung koma panjang.'
      ]
    },
    {
      topik: 'Figural',
      ringkas: 'Kemampuan spasial-visual mendeteksi pola rotasi, pencerminan, penambahan/pengurangan elemen, dan ketidaksamaan gambar.',
      jembatan: 'Fokus 1 Elemen Dulu! Jangan lihat seluruh gambar sekaligus — pilih 1 titik/panah, lacak arah putarnya (Jarum Jam vs Lawan Jarum Jam), lalu eliminasi opsi.',
      peta: [
        { k: 'Analogi Gambar', v: 'Identifikasi transformasi A → B (rotasi 45°/90°/180°, refleksi, balik warna hitam-putih), terapkan ke C → D' },
        { k: 'Ketidaksamaan (Odd One Out)', v: 'Hitung jumlah sisi/elemen, cek ganjil vs genap, atau cek arah putaran yang sendirian berbeda' },
        { k: 'Serial / Kelanjutan Pola', v: 'Lacak posisi elemen pojok (bergeser 1 sudut, ½ sisi) dan jumlah garis (+1, +2, atau selang-seling)' }
      ],
      inti: [
        'Lima aturan perubahan figural yang paling sering diuji: (1) Rotasi/perputaran sudut (45°, 90°, 180°), (2) Pencerminan (horizontal/vertikal), (3) Perubahan jumlah elemen/sisi bangun, (4) Pergeseran posisi mengelilingi bingkai, (5) Inversi warna (hitam ↔ putih).',
        'Tiga tipe soal resmi kisi-kisi TIU Figural: Analogi Gambar (A : B = C : ?), Ketidaksamaan/Klasifikasi (mencari 1 gambar yang berbeda pola dari 4 lainnya), dan Serial Gambar (melanjutkan pola barisan/matriks 3×3).',
        'Strategi mata cepat: kunci 1 elemen kecil (misalnya bulatan hitam atau ujung panah), lacak pergerakannya dari gambar 1 → 2 → 3, lalu langsung coret opsi yang posisi elemen tersebut salah.'
      ],
      hafal: [
        'Rotasi 90° Searah Jarum Jam = Atas → Kanan → Bawah → Kiri → Atas (siklus 4 langkah)',
        'Rotasi 180° = Posisi berbalik lurus berseberangan (Atas ↔ Bawah, Kanan ↔ Kiri)',
        'Cek Ketidaksamaan = 1) Jumlah sudut/garis (ganjil-genap), 2) Hubungan пересечение/irisan, 3) Rotasi vs Pencerminan'
      ],
      tips: [
        'JEBAKAN: Gambar yang tampak mirip karena diputar padahal sebenarnya hasil PENCERMINAN (terbalik kiri-kanan) sering dipakai di soal Ketidaksamaan.',
        'TRIK CEPAT: Jangan pernah mengamati seluruh gambar sekaligus; periksa 1 atribut (mis. warna dulu, lalu arah panah) untuk mencoret opsi dalam 15 detik.'
      ]
    },
    {
      topik: 'Logika',
      ringkas: 'Penarikan kesimpulan deduktif (silogisme, implikasi, ekuivalensi) dan penalaran analitis (urutan posisi, jadwal, meja bundar).',
      jembatan: 'Kontraposisi Sah: "Jika P maka Q" ≡ "Jika TIDAK Q maka TIDAK P". Ingkaran "Semua" = "Ada/Beberapa yang TIDAK". Analitis = Tulis Syarat Pasti Dulu!',
      peta: [
        { k: 'Modus Ponens', v: 'Premis 1: P → Q · Premis 2: P terjadi · Kesimpulan sah: Q' },
        { k: 'Modus Tollens', v: 'Premis 1: P → Q · Premis 2: ~Q (tidak Q) · Kesimpulan sah: ~P (tidak P)' },
        { k: 'Silogisme Rantai', v: 'Premis 1: P → Q · Premis 2: Q → R · Kesimpulan sah: P → R (atau kontraposisinya: ~R → ~P)' },
        { k: 'Kuantor Semua + Sebagian', v: 'Semua A adalah B + Sebagian C adalah A → Sebagian C adalah B' },
        { k: 'Penalaran Analitis', v: 'Gambar slot (_ _ _ _ _) atau meja bundar; masukkan syarat yang posisinya PASTI lebih dulu' }
      ],
      inti: [
        'Hukum Implikasi (p → q): hanya ekuivalen (bernilai sama) dengan KONTRAPOSISINYA (~q → ~p) atau bentuk ATAU (~p ∨ q). Konvers (q → p) dan Invers (~p → ~q) TIDAK SAH disimpulkan.',
        'Silogisme Berkuantor: jika satu premis "Semua" dan satu premis "Sebagian/Beberapa", maka kesimpulan yang sah WAJIB memuat "Sebagian/Beberapa" (tidak boleh "Semua").',
        'Ingkaran (Negasi): Ingkaran dari "Semua A adalah B" adalah "Ada/Beberapa A yang bukan B". Ingkaran dari "Jika P maka Q" adalah "P tetapi tidak Q".',
        'Penalaran Analitis (posisi duduk, urutan juara, jadwal piket): jangan dikerjakan di kepala; gambar garis urutan atau lingkaran di kertas buram, kunci syarat yang mutlak, lalu eliminasi opsi A–E satu per satu menggunakan syarat soal.'
      ],
      hafal: [
        'Kontraposisi Ekuivalen = (p → q) ≡ (~q → ~p) ≡ (~p atau q)',
        'Ingkaran Implikasi ~(p → q) = p DAN ~q (P terjadi tetapi Q tidak terjadi)',
        'Ingkaran "Semua A adalah B" = Ada/Beberapa A yang BUKAN B',
        'Semua + Sebagian = Kesimpulan wajib SEBAGIAN (atau "Ada")'
      ],
      tips: [
        'JEBAKAN: Jika premis 1: "Jika hujan maka jalan basah" dan premis 2: "Jalan basah", JANGAN pilih "Hujan" (itu sesat pikir konvers). Jawabannya: tidak dapat disimpulkan pasti.',
        'TRIK CEPAT: Untuk soal Analitis yang menanyakan "Manakah urutan yang mungkin?", jangan menyusun dari nol — ambil syarat soal satu per satu untuk mencoret opsi A-E yang melanggar!'
      ]
    }
  ],
  TKP: [
    {
      topik: 'Pelayanan Publik',
      ringkas: 'Memberikan layanan prima yang ramah, cepat, transparan, sesuai prosedur (SOP), dan berorientasi pada kepuasan masyarakat.',
      jembatan: 'Rumus Skor 5 Pelayanan: Empati/Senyum + Jelaskan Prosedur dengan Santun + Berikan Solusi Nyata Sesuai SOP (Tanpa KKN/Jalan Pintas).',
      peta: [
        { k: 'Skor 5 (Terbaik)', v: 'Mendengarkan keluhan dengan tenang/empati, meminta maaf atas ketidaknyamanan, menjelaskan SOP, & memberi solusi tuntas' },
        { k: 'Once-Only Principle', v: 'Jika data lintas unit (NIK/perizinan MPP) belum sinkron, koordinasikan di internal agar warga tidak bolak-balik' },
        { k: 'Skor 1-2 (Hindari)', v: 'Terpancing emosi, melempar ke rekan lain tanpa membantu, atau melanggar SOP demi rasa kasihan' },
        { k: 'Kelompok Rentan', v: 'Prioritaskan lansia, ibu hamil, dan penyandang disabilitas melalui jalur/fasilitas layanan khusus yang resmi' }
      ],
      inti: [
        'Prinsip UU No. 25 Tahun 2009 tentang Pelayanan Publik: kepastian hukum, keterbukaan, akuntabilitas, fasilitas bagi kelompok rentan, ketepatan waktu, dan kecepatan.',
        'Saat menghadapi warga yang marah/komplain: (1) tetap tenang dan dengarkan dengan empati, (2) sampaikan permohonan maaf atas ketidaknyamanan, (3) jelaskan prosedur secara jelas, (4) berikan solusi konkret sesuai kewenangan.',
        'Jangan pernah melanggar prosedur resmi meskipun pemohon adalah kerabat, atasan, atau menawarkan imbalan.'
      ],
      hafal: [
        'Kunci Skor 5 Pelayanan Publik = Empati + Solusi Konkret + Taat SOP',
        'Menghadapi Komplain = Tenang mendengarkan → Minta maaf → Beri solusi sesuai aturan'
      ],
      tips: [
        'JEBAKAN: Opsi yang terlihat "sangat baik hati" tetapi melanggar antrean atau meloloskan berkas yang belum lengkap nilainya RENDAH.',
        'TRIK CEPAT: Cari opsi yang menggabungkan keramahan sikap DAN ketegasan aturan.'
      ]
    },
    {
      topik: 'Jejaring Kerja',
      ringkas: 'Membangun kemitraan, kolaborasi lintas unit/instansi, dan komunikasi efektif untuk mencapai tujuan organisasi.',
      jembatan: 'Rumus Skor 5 Jejaring: Proaktif Komunikasi + Terbuka Berbagi Informasi + Kooperatif Mendukung Keputusan Bersama.',
      peta: [
        { k: 'Skor 5 (Terbaik)', v: 'Berinisiatif membangun komunikasi, menyamakan persepsi/tujuan, berkolaborasi aktif, dan menghargai kontribusi mitra' },
        { k: 'Saat Terjadi Konflik Tim', v: 'Ajak bicara langsung secara baik-baik, cari titik temu berbasis data & tujuan bersama (bukan langsung mengadu ke atasan)' },
        { k: 'Skor 1-2 (Hindari)', v: 'Bekerja sendiri (silo), menyalahkan divisi lain, pasif menunggu perintah, atau menolak ide rekan baru' }
      ],
      inti: [
        'Jejaring kerja (networking) menuntut keterbukaan, sikap saling percaya, komunikasi proaktif, dan kesediaan berkolaborasi lintas bidang.',
        'Skor tinggi: mengambil inisiatif koordinasi, menjelaskan urgensi dan pembagian peran secara jelas, menerima masukan dengan lapang dada, serta tetap mendukung keputusan rapat walaupun usulan pribadi tidak terpilih.',
        'Skor rendah: bekerja sendiri karena merasa paling mampu, menyalahkan unit lain saat target meleset, atau menutup diri dari orang baru.'
      ],
      hafal: [
        'Kunci Skor 5 Jejaring Kerja = Inisiatif Koordinasi + Kolaborasi Terbuka + Fokus Tujuan Bersama'
      ],
      tips: [
        'JEBAKAN: Opsi "mengerjakan bagian rekan yang lambat sendirian agar cepat selesai" bukan skor tertinggi di Jejaring Kerja; pilih yang "mengajak diskusi dan membagi tugas secara proporsional".',
        'TRIK CEPAT: Pilih opsi yang mengandung kata kerja kolaboratif: berkoordinasi, mendiskusikan, bersinergi, memfasilitasi.'
      ]
    },
    {
      topik: 'Sosial Budaya',
      ringkas: 'Kemampuan beradaptasi dengan kemajemukan suku, agama, adat, dan budaya setempat secara inklusif tanpa kehilangan profesionalisme.',
      jembatan: 'Rumus Skor 5 Sosial Budaya: Adaptif Cepat + Menghormati Adat/Perbedaan + Mencari Jalan Tengah yang Inklusif.',
      peta: [
        { k: 'Skor 5 (Terbaik)', v: 'Menghormati adat lokal, berbaur secara santun, dan memfasilitasi perbedaan agar semua pihak nyaman' },
        { k: 'Saat Ditempatkan di Daerah Baru', v: 'Mempelajari bahasa/adat setempat, bertegur sapa dengan warga, dan menyesuaikan diri secara positif' },
        { k: 'Skor 1-2 (Hindari)', v: 'Menilai budaya lain dengan standar sendiri, memisahkan diri, atau memaksakan kebiasaan pribadi' }
      ],
      inti: [
        'Indonesia masyarakat majemuk: ASN wajib menjadi perekat bangsa yang toleran, inklusif, peka terhadap kearifan lokal, dan bebas dari prasangka SARA.',
        'Skor tinggi: cepat beradaptasi di lingkungan baru, menghargai tradisi atau ibadah rekan kerja, dan mencari solusi yang mengakomodasi seluruh anggota tim yang beragam.',
        'Skor rendah: bergaul hanya dengan teman sedaerah, meremehkan adat setempat, atau membuat lelucon bernuansa SARA.'
      ],
      hafal: [
        'Kunci Skor 5 Sosial Budaya = Adaptasi Cepat + Toleransi Aktif + Solusi Inklusif bagi Semua'
      ],
      tips: [
        'JEBAKAN: Opsi "diam saja dan tidak ikut campur urusan warga sekitar agar tidak salah paham" adalah sikap pasif/eksklusif (skor sedang/rendah).',
        'TRIK CEPAT: Pilih opsi yang menunjukkan rasa ingin tahu positif terhadap budaya lokal dan semangat membaur.'
      ]
    },
    {
      topik: 'TIK',
      ringkas: 'Memanfaatkan teknologi informasi untuk efisiensi kerja, menjaga keamanan siber/data, serta beretika dan anti-hoaks di ruang digital.',
      jembatan: 'Rumus Skor 5 TIK: Pakai Teknologi untuk Efisiensi + Mau Belajar Sistem Baru + Saring Sebelum Sharing (Jaga Rahasia Data).',
      peta: [
        { k: 'Ada Aplikasi/Sistem Baru', v: 'Antusias mempelajari secara mandiri/pelatihan dan membantu rekan yang masih kesulitan' },
        { k: 'Menerima Berita Viral/Hoaks', v: 'Verifikasi ke sumber resmi terlebih dahulu; jangan pernah meneruskan pesan yang belum pasti kebenarannya' },
        { k: 'Keamanan Data Kantor', v: 'Gunakan sandi kuat, tolak tautan mencurigakan (phishing), waspadai deepfake pimpinan (verifikasi silang), dan jangan unggah dokumen internal ke publik' },
        { k: 'Generative AI & UU PDP', v: 'Patuhi UU No. 27/2022: dilarang unggah NIK/data rahasia ke AI publik; wajib sanitasi/masking data sensitif' }
      ],
      inti: [
        'Pemanfaatan TIK bertujuan mempercepat layanan, meningkatkan akurasi, dan memperkuat transparansi kerja birokrasi (SPBE).',
        'Keamanan informasi & privasi data: jaga kerahasiaan data pribadi sesuai UU No. 27/2022 (UU PDP), waspadai rekayasa sosial (phishing), dan hindari penggunaan Generative AI publik tanpa enkripsi/sanitasi data.',
        'Literasi digital ASN: verifikasi informasi sebelum menyebarkan (saring sebelum sharing), jaga netralitas dan kesantunan di media sosial.'
      ],
      hafal: [
        'Kunci Skor 5 TIK = Adaptif Belajar Teknologi Baru + Verifikasi Info Resmi + Jaga Keamanan Data'
      ],
      tips: [
        'JEBAKAN: Opsi "tetap memakai cara manual karena sudah terbiasa dan takut salah" selalu bernilai RENDAH.',
        'TRIK CEPAT: Jika ada kendala sistem TI saat melayani warga, pilih: informasikan dengan sopan, hubungi tim IT/teknis, dan siapkan alternatif pencatatan sesuai SOP.'
      ]
    },
    {
      topik: 'Profesionalisme',
      ringkas: 'Melaksanakan tugas secara tuntas, kompeten, berfokus pada kualitas tinggi, serta memisahkan urusan pribadi dari tanggung jawab jabatan.',
      jembatan: 'Rumus Skor 5 Profesionalisme: Fokus Tuntaskan Tugas Utama + Tetap Tenang di Bawah Tekanan + Terus Tingkatkan Kompetensi.',
      peta: [
        { k: 'Benturan Urusan Pribadi vs Tugas', v: 'Prioritaskan tanggung jawab pekerjaan/kedinasan, atau delegasikan/koordinasikan secara resmi jika darurat medis' },
        { k: 'Diberi Tugas Baru yang Sulit', v: 'Terima sebagai tantangan belajar, pelajari pedomannya, dan berkoordinasi dengan senior/atasan' },
        { k: 'Skor 1-2 (Hindari)', v: 'Mengeluh, menunda pekerjaan, menurunkan standar kualitas, atau membawa masalah rumah ke kantor' }
      ],
      inti: [
        'Profesionalisme ASN menuntut kompetensi, kedisiplinan, tanggung jawab penuh hingga tuntas, dan pemisahan tegas antara urusan pribadi dan kedinasan.',
        'Skor tinggi: menyelesaikan tugas tepat waktu dengan kualitas terbaik, mau mempelajari bidang baru, menerima kritik sebagai bahan evaluasi, dan tetap fokus walau ada masalah pribadi.',
        'Skor rendah: menolak penugasan di luar kebiasaan, bekerja asal selesai demi mengejar waktu, atau meninggalkan tugas tanpa izin.'
      ],
      hafal: [
        'Kunci Skor 5 Profesionalisme = Tuntas Berkualitas + Prioritas Tugas Dinas + Mau Belajar Hal Baru'
      ],
      tips: [
        'JEBAKAN: Jika ada tawaran pekerjaan sampingan saat jam kerja atau menggunakan fasilitas kantor, wajib DITOLAK meskipun menguntungkan.',
        'TRIK CEPAT: Pilih opsi yang menunjukkan kombinasi: terima tugas + pelajari/tanyakan yang belum jelas + kerjakan maksimal + laporkan hasilnya.'
      ]
    },
    {
      topik: 'Anti-Radikalisme',
      ringkas: 'Setia pada Pancasila, UUD 1945, dan NKRI; menangkal intoleransi, ekstremisme, serta provokasi pemecah belah di lingkungan kerja dan masyarakat.',
      jembatan: 'Rumus Skor 5 Anti-Radikalisme: Tidak Terprovokasi + Verifikasi Fakta + Tegur/Ajak Dialog Santun Pribadi + Lapor Jalur Resmi Jika Berlanjut.',
      peta: [
        { k: 'Rekan Menyebar Paham Ekstrem', v: 'Ajak berdialog secara pribadi dan santun, ingatkan komitmen ASN pada Pancasila, lalu lapor atasan/kanal resmi bila berlanjut' },
        { k: 'Menerima Konten Provokatif SARA', v: 'Tidak ikut menyebarkan, cek fakta dari sumber resmi, dan laporkan akun/konten melalui fitur pelaporan resmi' },
        { k: 'Skor 1-2 (Hindari)', v: 'Ikut menyebarkan, diam seribu bahasa (apatis), atau memaki/menghakimi secara terbuka dan emosional' }
      ],
      inti: [
        'ASN wajib menjadi garda terdepan perekat NKRI, setia pada Pancasila, UUD NRI 1945, dan pemerintah yang sah, serta menolak segala bentuk intoleransi dan radikalisme.',
        'Skor tinggi: berpikir kritis (tidak mudah terprovokasi), mengedepankan dialog empat mata yang santun untuk meluruskan pemahaman rekan, serta menggunakan mekanisme pelaporan resmi kepada atasan/pihak berwenang bila membahayakan.',
        'Skor rendah: bersikap apatis/masa bodoh terhadap gejala radikalisme di kantor, ikut menyebarkan provokasi, atau melakukan konfrontasi kasar/main hakim sendiri.'
      ],
      hafal: [
        'Kunci Skor 5 Anti-Radikalisme = Tenang & Kritis → Dialog Santun Empat Mata → Lapor Atasan/Jalur Resmi'
      ],
      tips: [
        'JEBAKAN: Opsi "langsung memarahi di depan umum" atau "langsung memutus hubungan pertemanan" bukan skor 5 karena tidak menyelesaikan masalah secara konstruktif.',
        'TRIK CEPAT: Cari urutan tindakan yang proporsional: klarifikasi/edukasi secara persuasif terlebih dahulu, disertai pelaporan berjenjang sesuai aturan ASN.'
      ]
    }
  ]
};
