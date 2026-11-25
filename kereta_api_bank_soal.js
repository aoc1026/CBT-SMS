const keretaApiBankSoal = [
  {
    "id": "KA-001",
    "question": "Apa definisi yang tepat mengenai Manajemen Risiko Keselamatan Perkeretaapian?",
    "options": [
      "Proses insidental untuk memperbaiki sarana kereta api setelah terjadi kecelakaan",
      "Proses sistematis, terstruktur, dan berkelanjutan untuk mengidentifikasi potensi bahaya, menilai tingkat risiko, serta menetapkan dan mengendalikan tindakan pencegahan",
      "Kegiatan administratif tahunan untuk memenuhi syarat perpanjangan izin usaha angkutan",
      "Prosedur pemberian sanksi kepada masinis atau awak sarana yang melanggar semboyan"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Manajemen risiko keselamatan perkeretaapian merupakan proses sistematis, terstruktur, dan berkelanjutan untuk mengidentifikasi bahaya, menilai risiko, dan mengendalikan tindakan pencegahan."
  },
  {
    "id": "KA-002",
    "question": "Manakah di bawah ini yang merupakan perbedaan mendasar antara 'Bahaya (Hazard)' dan 'Risiko (Risk)'?",
    "options": [
      "Bahaya adalah dampak kerugian finansial, sedangkan risiko adalah sumber kerusakan",
      "Bahaya hanya muncul saat ada interaksi manusia, sedangkan risiko selalu ada meskipun lokasi kosong",
      "Bahaya adalah kondisi atau sumber yang berpotensi menimbulkan cedera/kerusakan, sedangkan risiko adalah peluang terjadinya kecelakaan dan tingkat keparahan dampaknya akibat interaksi dengan bahaya",
      "Bahaya dapat dihilangkan sepenuhnya dengan APD, sedangkan risiko tidak dapat dikendalikan"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Contoh: Lantai basah/licin adalah bahaya (tetap ada meski tak ada orang), sedangkan peluang orang terpeleset dan tingkat cedera akibat berjalan di atasnya adalah risiko."
  },
  {
    "id": "KA-003",
    "question": "Dalam kerangka proses manajemen risiko, aktivitas apa saja yang berada di dalam tahapan 'Risk Assessment' (Penilaian Risiko)?",
    "options": [
      "Scope, Context, dan Criteria",
      "Risk Identification, Risk Analysis, dan Risk Evaluation",
      "Communication, Consultation, dan Reporting",
      "Elimination, Substitution, dan Engineering Controls"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Penilaian Risiko (Risk Assessment) terdiri dari tiga sub-proses berurutan: Identifikasi Risiko, Analisis Risiko, dan Evaluasi Risiko."
  },
  {
    "id": "KA-004",
    "question": "Tujuan utama dari aktivitas 'Komunikasi dan Konsultasi' dalam setiap tahap proses manajemen risiko adalah sebagai berikut, KECUALI...",
    "options": [
      "Menyatukan beragam area keahlian pada tiap tahap proses manajemen risiko",
      "Memastikan berbagai pandangan dipertimbangkan saat menentukan kriteria dan mengevaluasi risiko",
      "Membangun rasa keterlibatan dan kepemilikan di antara pihak yang terpengaruh oleh risiko",
      "Mengalihkan tanggung jawab hukum kecelakaan sepenuhnya kepada petugas operasional lapangan"
    ],
    "answer": 3,
    "points": 1,
    "explanation": "Komunikasi dan konsultasi bertujuan menyatukan keahlian, mempertimbangkan beragam pandangan, memfasilitasi pengambilan keputusan, dan membangun kepemilikan bersama."
  },
  {
    "id": "KA-005",
    "question": "Berdasarkan matriks kriteria kemungkinan (Likelihood) skala 1–5 dalam bahan paparan, kategori 'Kadang terjadi (Level 3)' memiliki frekuensi kejadian dalam 1 tahun sebanyak...",
    "options": [
      "< 2 kali (0% < x <= 5%)",
      "2 s.d. 5 kali (5% < x <= 10%)",
      "6 s.d. 9 kali (10% < x <= 20%)",
      "10 s.d. 12 kali (20% < x <= 50%)"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Skala 3 (Kadang terjadi) memiliki persentase 10% < x <= 20% dengan frekuensi 6 s.d. 9 kali dalam 1 tahun (atau 1 kejadian dalam 3 tahun terakhir pada kejadian toleransi rendah)."
  },
  {
    "id": "KA-006",
    "question": "Pada tabel penilaian keparahan (Severity) skala 1–5 untuk area dampak keselamatan transportasi, kondisi 'Terdapat korban dengan gangguan kesehatan fisik berat (kelumpuhan/cacat permanen)' masuk dalam kategori level dampak...",
    "options": [
      "Minor (2)",
      "Moderat (3)",
      "Signifikan (4)",
      "Sangat Signifikan (5)"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Level 4 (Signifikan) mencakup korban kelumpuhan/cacat permanen, sedangkan Level 5 (Sangat Signifikan) adalah terdapat korban meninggal dunia."
  },
  {
    "id": "KA-007",
    "question": "Jika hasil identifikasi bahaya menunjukkan tingkat kemungkinan (Likelihood) berada pada skala 3 dan tingkat keparahan (Severity) pada skala 5, berapakah nilai tingkat risiko awal (R = L x S)?",
    "options": [
      "8",
      "12",
      "15",
      "20"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Tingkat risiko dihitung dengan mengalikan Probabilitas/Kemungkinan (3) dengan Keparahan/Severity (5), menghasilkan skor 15 (Tinggi - Tidak Diterima)."
  },
  {
    "id": "KA-008",
    "question": "Urutan Hierarki Pengendalian Risiko (Hierarchy of Controls) dari yang paling efektif hingga yang paling kurang efektif adalah...",
    "options": [
      "PPE -> Administrative Controls -> Engineering Controls -> Substitution -> Elimination",
      "Elimination -> Substitution -> Engineering Controls -> Administrative Controls -> PPE",
      "Engineering Controls -> Elimination -> Substitution -> PPE -> Administrative Controls",
      "Substitution -> Elimination -> Administrative Controls -> Engineering Controls -> PPE"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Hierarki pengendalian dari paling efektif ke paling kurang efektif: Eliminasi, Substitusi, Rekayasa Teknik (Engineering), Pengendalian Administratif, dan Alat Pelindung Diri (APD/PPE)."
  },
  {
    "id": "KA-009",
    "question": "Tindakan mengganti rel yang mengalami cacat/depek dengan rel R 54 baru pada jalur kereta api untuk menghilangkan potensi anjlokan termasuk dalam kategori pengendalian risiko...",
    "options": [
      "Eliminasi",
      "Pengendalian Administratif",
      "Alat Pelindung Diri (APD)",
      "Penerimaan Risiko"
    ],
    "answer": 0,
    "points": 1,
    "explanation": "Dalam contoh format dokumen IBPPR (HIRADC), pergantian rel cacat menjadi rel R 54 baru dikategorikan sebagai Eliminasi sumber bahaya fisik."
  },
  {
    "id": "KA-010",
    "question": "Manakah di bawah ini yang merupakan sumber data valid untuk melakukan Identifikasi Bahaya dalam penyelenggaraan perkeretaapian?",
    "options": [
      "Hanya laporan kecelakaan yang mengakibatkan korban meninggal dunia",
      "Data historis (laporan insiden, near-miss, temuan inspeksi), hasil pemeriksaan potensi bahaya berkala menggunakan checklist, masukan ahli K3, serta standar/pedoman teknis relevan",
      "Asumsi subjektif manajemen tanpa melibatkan SDM yang bertugas di lapangan",
      "Laporan keuangan tahunan perusahaan angkutan umum"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Identifikasi bahaya bersumber dari data historis (termasuk near-miss), pemeriksaan berkala oleh petugas kompeten dengan checklist dan masukan SDM lapangan, ahli K3, serta standar teknis."
  },
  {
    "id": "KA-011",
    "question": "Mengapa memahami konteks organisasi (Scope, Context, Criteria) sangat penting sebelum melakukan penilaian risiko?",
    "options": [
      "Agar manajemen risiko selaras dengan sasaran/aktivitas organisasi dan menyadari bahwa faktor organisasi itu sendiri dapat menjadi sumber risiko",
      "Untuk mengurangi jumlah dokumen yang harus diaudit oleh regulator",
      "Supaya perusahaan dapat menghindari kewajiban pelaporan kecelakaan ke pemerintah",
      "Agar anggaran keselamatan dapat dialihkan ke sektor pemasaran"
    ],
    "answer": 0,
    "points": 1,
    "explanation": "Memahami konteks organisasi penting karena manajemen risiko dilakukan dalam konteks sasaran/aktivitas organisasi dan faktor internal organisasi dapat menjadi sumber risiko."
  },
  {
    "id": "KA-012",
    "question": "Dalam opsi perlakuan risiko (Risk Treatment), tindakan mengalihkan sebagian beban finansial risiko melalui kontrak kerja sama atau pembelian asuransi disebut...",
    "options": [
      "Menghindari risiko",
      "Membagi risiko (Risk Sharing)",
      "Menghilangkan sumber risiko",
      "Mempertahankan risiko"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Membagi risiko (risk sharing/transfer) dilakukan antara lain melalui perjanjian kontrak dengan pihak ketiga atau pembelian polis asuransi."
  },
  {
    "id": "KA-013",
    "question": "Apa yang dimaksud dengan 'Risiko Sisa' (Residual Risk) dalam matriks IBPPR / HIRADC?",
    "options": [
      "Risiko awal sebelum dilakukan tindakan pengendalian apa pun",
      "Tingkat risiko yang masih tersisa setelah diterapkannya tindakan mitigasi atau pengendalian tambahan",
      "Risiko yang sengaja diabaikan karena biaya pengendaliannya terlalu murah",
      "Daftar kecelakaan yang belum sempat diinvestigasi pada tahun sebelumnya"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Risiko sisa (R' = L' x S') adalah tingkat risiko yang tersisa setelah pengendalian tambahan diterapkan, yang kemudian dievaluasi apakah sudah dapat diterima."
  },
  {
    "id": "KA-014",
    "question": "Paradigma modern manajemen keselamatan transportasi meninggalkan ilusi 'Zero Accident' mutlak dan mengadopsi prinsip ALARP yang berarti...",
    "options": [
      "All Losses Are Regulated Permanently",
      "As Low As Reasonably Practicable (risiko ditekan serendah mungkin yang layak secara praktis)",
      "Always Limit All Railway Operations",
      "Automated Logic And Risk Prevention"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "ALARP (As Low As Reasonably Practicable) berarti menekan risiko serendah mungkin yang dapat dipraktikkan secara wajar dengan mempertimbangkan keseimbangan biaya dan manfaat mitigasi."
  },
  {
    "id": "KA-015",
    "question": "Dalam spektrum zona risiko pada paradigma modern, bagaimana status operasional suatu kegiatan jika tingkat risikonya berada pada zona 'Tidak Dapat Ditoleransi (Ekstrem)'?",
    "options": [
      "Operasi tetap berjalan normal dengan pemantauan rutin",
      "Operasi berjalan dengan syarat memakai APD tambahan",
      "Operasi WAJIB dihentikan seketika sampai mitigasi menurunkan risiko ke batas ALARP",
      "Operasi dilanjutkan sambil menunggu jadwal audit tahun depan"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Pada zona Tidak Dapat Ditoleransi (Ekstrem), operasi wajib dihentikan seketika karena tingkat bahayanya tidak dapat diterima."
  },
  {
    "id": "KA-016",
    "question": "Perbedaan utama antara pendekatan manajemen keselamatan 'Proaktif' dan 'Prediktif' terletak pada...",
    "options": [
      "Proaktif merespons setelah korban jatuh, sedangkan prediktif hanya melakukan audit kertas",
      "Proaktif menemukan kelemahan saat operasi normal (melalui audit, ramp check, laporan near-miss), sedangkan prediktif memproyeksikan potensi kegagalan sebelum tanda fisik muncul melalui analisis Big Data, sensor AI, dan telemetri real-time",
      "Proaktif hanya berlaku untuk jalan raya, sedangkan prediktif hanya untuk penerbangan",
      "Tidak ada perbedaan karena keduanya menggunakan Root Cause Analysis (RCA) pasca-kecelakaan"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Pendekatan proaktif mencari kelemahan saat operasi normal (HIRA, audit, near-miss), sedangkan prediktif menggunakan telemetri real-time, trend forecasting, dan AI sebelum gejala fisik muncul."
  },
  {
    "id": "KA-017",
    "question": "Penggunaan alat pemantau suhu as roda otomatis (Hot Axle Box Detector / HABD) pada perkeretaapian untuk mencegah patah as sebelum terjadi anjlokan merupakan contoh penerapan pendekatan keselamatan...",
    "options": [
      "Reaktif",
      "Patologis",
      "Prediktif",
      "Administratif"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "HABD (Hot Axle Box Detector) memantau anomali suhu secara real-time untuk mencegah patah as sebelum kegagalan fisik terjadi, yang merupakan bukti pendekatan prediktif."
  },
  {
    "id": "KA-018",
    "question": "Dalam Model SHELL untuk analisis faktor manusia, huruf 'L' di bagian tengah (pusat hub) dan 'L' di bagian luar masing-masing melambangkan...",
    "options": [
      "Legal (Hukum) dan Logistics (Logistik)",
      "Liveware (Manusia/Operator pusat seperti Masinis/Pengemudi) dan Liveware-Others (Antarmuka sesama manusia seperti PPKA atau mekanik)",
      "Locomotive (Lokomotif) dan Line (Jalur rel)",
      "Leadership (Kepemimpinan) dan Learning (Pembelajaran)"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Model SHELL menempatkan Liveware (manusia pusat) berinteraksi dengan Software (S), Hardware (H), Environment (E), dan Liveware lainnya (L)."
  },
  {
    "id": "KA-019",
    "question": "Miskomunikasi verifikasi verbal antara Pengatur Perjalanan Kereta Api (PPKA) Stasiun dengan Masinis di lapangan merupakan contoh kerentanan antarmuka SHELL pada dimensi...",
    "options": [
      "L - S (Liveware - Software)",
      "L - H (Liveware - Hardware)",
      "L - E (Liveware - Environment)",
      "L - L (Liveware - Liveware)"
    ],
    "answer": 3,
    "points": 1,
    "explanation": "Interaksi dan komunikasi antar-manusia (seperti PPKA dengan Masinis, atau sopir dengan mekanik) masuk dalam antarmuka L-L (Liveware-Liveware)."
  },
  {
    "id": "KA-020",
    "question": "Dalam dilema kepemimpinan antara 'Tekanan Produksi' dan 'Investasi Proteksi', wilayah keseimbangan operasional yang aman dan berkelanjutan tanpa memicu kebangkrutan maupun bencana disebut...",
    "options": [
      "Drift Threshold",
      "Safety Space (Zona Operasional Berimbang ALARP)",
      "Blaming Zone",
      "Paper Compliance Area"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Safety Space adalah ruang operasional berimbang di mana investasi proteksi dan target produksi dikelola secara proporsional agar tidak jatuh ke jurang kebangkrutan maupun bencana."
  },
  {
    "id": "KA-021",
    "question": "Tiga komponen utama dalam pembahasan teori Jaminan Keselamatan (Safety Assurance) perkeretaapian meliputi...",
    "options": [
      "Perencanaan, Pengadaan, dan Penghapusan Aset",
      "Pemantauan Kinerja, Sistem Pelaporan, dan Manajemen Perubahan",
      "Eliminasi, Substitusi, dan Rekayasa Teknik",
      "Pengaturan, Pengendalian, dan Penegakan Hukum Pidana"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Tiga komponen utama Safety Assurance adalah: (1) Pemantauan Kinerja, (2) Sistem Pelaporan, dan (3) Manajemen Perubahan."
  },
  {
    "id": "KA-022",
    "question": "Dalam matriks indikator kinerja keselamatan (SPI) dan target tahunan (SPT) Balai Teknik Perkeretaapian pada materi paparan, berapa target tahunan (SPT) untuk indikator 'Persentase Tingkat Keselamatan Transportasi'?",
    "options": [
      "85%",
      "90%",
      "95%",
      "100%"
    ],
    "answer": 3,
    "points": 1,
    "explanation": "Pada matriks indikator SPI & Target SPT Balai Teknik Perkeretaapian, target tahunan untuk Persentase Tingkat Keselamatan Transportasi adalah 100%."
  },
  {
    "id": "KA-023",
    "question": "Berdasarkan ketentuan pelaporan wajib dalam PP Nomor 72 Tahun 2009 tentang Lalu Lintas dan Angkutan Kereta Api, kepada siapa laporan gangguan operasi dan kecelakaan kereta api disampaikan?",
    "options": [
      "Hanya kepada kepolisian setempat dan perusahaan asuransi",
      "Kepada Menteri untuk perkeretaapian nasional, Gubernur untuk perkeretaapian provinsi, atau Bupati/Wali Kota untuk perkeretaapian kabupaten/kota",
      "Hanya kepada direksi internal penyelenggara sarana",
      "Kepada masyarakat melalui media sosial resmi operator"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "PP 72 Tahun 2009 mewajibkan pelaporan gangguan operasi dan kecelakaan KA kepada Menteri (nasional), Gubernur (provinsi), atau Bupati/Wali Kota (kabupaten/kota)."
  },
  {
    "id": "KA-024",
    "question": "Menurut Permenhub PM 69 Tahun 2018, selain kepada pimpinan penyelenggara perkeretaapian, pelaporan kecelakaan wajib disampaikan kepada Direktur Jenderal dan instansi berwenang dengan periode pelaporan berkala setiap...",
    "options": [
      "1 bulan sekali",
      "Triwulan (3 bulan sekali)",
      "2 tahun sekali",
      "5 tahun sekali"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Pada slide Sistem Pelaporan wajib PM 69 Tahun 2018, periode waktu pelaporan disebutkan secara Triwulan, dengan sanksi teguran tertulis, pembekuan izin operasi, hingga pencabutan izin operasi."
  },
  {
    "id": "KA-025",
    "question": "Manakah urutan 5 tahapan umum Manajemen Perubahan (Management of Change) dalam konteks perkeretaapian?",
    "options": [
      "Audit -> Implementasi -> Penilaian Risiko -> Tinjauan -> Deskripsi Perubahan",
      "Mendeskripsikan Perubahan -> Penilaian Risiko -> Tinjauan & Persetujuan -> Implementasi & Pembaruan -> Komunikasi & Audit",
      "Penilaian Risiko -> Komunikasi -> Tinjauan & Persetujuan -> Mendeskripsikan Perubahan -> Audit",
      "Tinjauan & Persetujuan -> Mendeskripsikan Perubahan -> Implementasi -> Penilaian Risiko -> Komunikasi"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Lima tahapan Manajemen Perubahan: (1) Mendeskripsikan Perubahan, (2) Penilaian Risiko, (3) Tinjauan & Persetujuan, (4) Implementasi & Pembaruan, dan (5) Komunikasi & Audit."
  },
  {
    "id": "KA-026",
    "question": "Pada tahap ke-3 Manajemen Perubahan (Tinjauan & Persetujuan), kapan dokumen perubahan dan modifikasi perancangan yang berimplikasi terhadap keselamatan harus ditinjau ulang dan disetujui oleh petugas berwenang?",
    "options": [
      "Setelah modifikasi selesai dioperasikan selama 6 bulan",
      "Sebelum pelaksanaan modifikasi atau perubahan dilakukan",
      "Hanya apabila terjadi insiden setelah perubahan diterapkan",
      "Bersamaan dengan audit eksternal 2 tahunan"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Semua perubahan dan modifikasi yang berdampak pada keselamatan wajib didokumentasikan, ditinjau ulang, dan disetujui oleh petugas berwenang SEBELUM pelaksanaan."
  },
  {
    "id": "KA-027",
    "question": "Dalam contoh praktik pengisian Formulir Laporan Kejadian (Hazard/Incident Reporting) tabrakan antara KA 4045 dan KA 4136 di Stasiun Talang Baru, apa definisi 'Luka Berat' yang tercantum pada formulir tersebut?",
    "options": [
      "Luka gores ringan yang cukup ditangani dengan kotak P3K di stasiun",
      "Luka yang mengakibatkan korban jatuh sakit dan tidak ada harapan sembuh sama sekali, menimbulkan bahaya maut, cacat berat/lumpuh, kehilangan pancaindra, atau membutuhkan perawatan rumah sakit lebih dari 30 hari",
      "Semua jenis cedera terkilir pada tangan atau jari yang tidak memerlukan rawat inap",
      "Kelelahan kerja akibat jadwal dinas malam"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Formulir merujuk definisi Luka Berat (sumber UU 22/2009), antara lain tidak ada harapan sembuh, bahaya maut, cacat berat/lumpuh, kehilangan pancaindra, gugur kandungan, atau rawat inap > 30 hari."
  },
  {
    "id": "KA-028",
    "question": "Berdasarkan contoh Formulir Laporan Kejadian tabrakan KA 4045 dengan KA 4136 di Emplasemen Stasiun Talang Baru, apa jenis cedera yang dialami oleh masinis yang terlibat (Cokro Waskito)?",
    "options": [
      "Patah tulang kaki kanan dan dirawat inap 40 hari",
      "Luka ringan berupa tangan/lengan/jari-jari terkilir",
      "Gegar otak berat",
      "Tidak mengalami cedera fisik sama sekali"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Pada bagian B1.2 dan B1.3 formulir contoh, dicentang 'Luka Ringan' pada bagian Tangan/Lengan/Jari-jari dengan keterangan 'Terkilir'."
  },
  {
    "id": "KA-029",
    "question": "Mengapa laporan 'Near-Miss' (insiden nyaris celaka) dianggap sebagai jantung keselamatan dalam pendekatan proaktif dan gunung es keselamatan?",
    "options": [
      "Karena near-miss selalu menimbulkan kerugian finansial terbesar bagi operator",
      "Karena near-miss berada di bawah permukaan gunung es sebagai fondasi/indikator awal terjadinya kecelakaan fatal jika dibiarkan tersembunyi (under-reporting)",
      "Karena pelaporan near-miss menggantikan kewajiban investigasi kecelakaan fatal",
      "Karena near-miss hanya terjadi akibat faktor cuaca ekstrem"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Dalam metafora gunung es, kecelakaan fatal hanyalah puncak kecil yang terlihat, sedangkan potensi bahaya dan near-miss di bawah permukaan adalah fondasi kejadian yang harus dideteksi dini."
  },
  {
    "id": "KA-030",
    "question": "Dalam tahap 'Golden Period Response' tanggap darurat pasca-kecelakaan transportasi, tindakan apa yang wajib dilakukan pada rentang waktu 0–5 menit pertama?",
    "options": [
      "Penanganan medis lanjutan dan rujukan ke rumah sakit",
      "Aktivasi panggilan darurat lintas instansi dan rekayasa manajemen lalu lintas",
      "Evakuasi mandiri oleh awak sarana dan penumpang menggunakan peralatan darurat kabin",
      "Audit kesiapsiagaan dokumen SMK oleh regulator"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Golden Period Response membagi respons menjadi: 0–5 menit (Evakuasi mandiri oleh awak & penumpang), 5–15 menit (Aktivasi panggilan darurat & manajemen lalu lintas), dan 15–30 menit (Penanganan medis & evakuasi korban lintas instansi)."
  },
  {
    "id": "KA-031",
    "question": "Peralatan darurat kabin yang wajib dipastikan tersedia dan berfungsi dengan baik dalam standar perencanaan tanggap darurat meliputi...",
    "options": [
      "Alat pemecah kaca (emergency hammer), pintu/jendela darurat yang tidak terhalang kursi tambahan, APAR aktif, dan kotak P3K standar",
      "GPS Tracking, speed limiter, dan kamera pengawas kecepatan jalan",
      "Alat ukur kedalaman alur ban dan pengukur tekanan angin",
      "Buku manual perbaikan mesin dan suku cadang kanibal"
    ],
    "answer": 0,
    "points": 1,
    "explanation": "Standar peralatan darurat kabin mencakup emergency hammer, akses pintu/jendela darurat yang bebas hambatan, APAR aktif, dan kotak P3K standar."
  },
  {
    "id": "KA-032",
    "question": "Berapa frekuensi minimal pelaksanaan simulasi tanggap darurat (emergency drill) yang wajib digelar oleh penyelenggara angkutan dalam materi Pilar 4?",
    "options": [
      "Minimal 1 kali dalam 5 tahun",
      "Minimal 1 kali dalam setahun",
      "Hanya saat terjadi pergantian direksi",
      "Setiap hari sebelum keberangkatan armada"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Penyelenggara angkutan wajib menyusun SOP evakuasi (termasuk prioritas kelompok rentan) dan mewajibkan simulasi tanggap darurat (emergency drill) minimal 1 kali dalam setahun."
  },
  {
    "id": "KA-033",
    "question": "Dalam siklus perawatan sarana terintegrasi untuk mencegah kegagalan teknis berulang seperti rem blong, pemeriksaan harian sebelum kendaraan keluar dari pul/depo menggunakan checklist baku disebut...",
    "options": [
      "Uji Berkala 6 Bulanan (BLU-e)",
      "Daily Pre-Trip Check (Pemeriksaan Harian Pra-Operasi)",
      "Audit Riwayat Perawatan Digital",
      "Overhaul Tahunan"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Daily Pre-Trip Check adalah pemeriksaan wajib harian sebelum armada keluar dari pul/depo menggunakan checklist yang ditandatangani bersama oleh mekanik, pengemudi, dan petugas keselamatan."
  },
  {
    "id": "KA-034",
    "question": "Praktik penggunaan komponen rekondisi ilegal (kanibalisasi) pada sistem pengereman (kampas, selang, tabung angin) dan penggunaan ban vulkanisir pada roda depan angkutan umum statusnya adalah...",
    "options": [
      "Diperbolehkan sementara untuk menghemat biaya operasional bengkel",
      "Dilarang keras dalam kebijakan pengendalian komponen kritis pemeliharaan sarana",
      "Diizinkan khusus untuk bus antarkota jarak dekat",
      "Diwajibkan bagi perusahaan otobus skala kecil-menengah"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Kebijakan pemeliharaan wajib melarang keras penggunaan komponen rekondisi ilegal/kanibal pada sistem rem/kemudi serta melarang ban vulkanisir pada roda depan."
  },
  {
    "id": "KA-035",
    "question": "Apa tujuan utama pencatatan seluruh riwayat perbaikan, penggantian suku cadang, dan hasil uji berkala dalam 'Digital Maintenance Logbook'?",
    "options": [
      "Menggantikan fungsi pemeriksaan fisik mekanik di lapangan",
      "Menciptakan rekam medis sarana yang transparan dan dapat diaudit guna mengubah pola pemeliharaan dari reaktif menjadi preventif dan prediktif",
      "Menyembunyikan kerusakan komponen kritis saat dilakukan ramp check",
      "Mempercepat proses penghapusan aset kendaraan"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Digital Maintenance Logbook berfungsi sebagai rekam medis sarana untuk memastikan perawatan berbasis catatan teknis yang akurat dan dapat diaudit."
  },
  {
    "id": "KA-036",
    "question": "Menurut Undang-Undang Nomor 23 Tahun 2007 tentang Perkeretaapian, pembinaan perkeretaapian oleh pemerintah meliputi tiga fungsi utama, yaitu...",
    "options": [
      "Perencanaan, Pembangunan, dan Pengoperasian",
      "Pengaturan, Pengendalian, dan Pengawasan",
      "Pencegahan, Penindakan, dan Pemulihan",
      "Sertifikasi, Akreditasi, dan Investigasi"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Berdasarkan UU No. 23 Tahun 2007, pembinaan perkeretaapian meliputi: (1) Pengaturan, (2) Pengendalian, dan (3) Pengawasan."
  },
  {
    "id": "KA-037",
    "question": "Dalam pelaksanaan fungsi pengawasan perkeretaapian menurut UU No. 23 Tahun 2007, siapakah yang bertugas melaksanakan pengawasan pemenuhan Norma, Standar, Prosedur, dan Kriteria (NSPK)?",
    "options": [
      "Penyidik Pegawai Negeri Sipil (PPNS)",
      "Inspektur Prasarana dan Inspektur Sarana Perkeretaapian",
      "Auditor Perkeretaapian",
      "Masinis Tingkat Utama"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Inspektur Prasarana/Sarana melaksanakan pengawasan teknis dan operasional, sedangkan Auditor Perkeretaapian melaksanakan pengawasan pemenuhan NSPK di bidang perkeretaapian."
  },
  {
    "id": "KA-038",
    "question": "Siapakah yang berwenang melakukan pemeriksaan dan penelitian penyebab kecelakaan kereta api apabila dalam kecelakaan tersebut ditemukan adanya unsur melawan hukum?",
    "options": [
      "Auditor Internal Penyelenggara Sarana",
      "Penyidik dalam rangka penegakan hukum",
      "Kepala Stasiun setempat",
      "Tim Perawatan Prasarana"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Pemeriksaan teknis penyebab kecelakaan dilakukan oleh badan yang dibentuk/ditugaskan Pemerintah, namun jika terdapat unsur melawan hukum, pemeriksaannya dilakukan oleh penyidik untuk penegakan hukum."
  },
  {
    "id": "KA-039",
    "question": "Bagaimana sifat tindak lanjut terhadap hasil pemeriksaan dan penelitian penyebab kecelakaan kereta api yang diterbitkan dalam bentuk rekomendasi berdasarkan UU No. 23 Tahun 2007?",
    "options": [
      "Bersifat sukarela dan hanya menjadi arsip internal pemerintah",
      "Wajib ditindaklanjuti oleh Pemerintah, Penyelenggara Prasarana Perkeretaapian, dan Penyelenggara Sarana Perkeretaapian serta dapat diumumkan kepada publik",
      "Hanya wajib dilaksanakan jika perusahaan mengalami keuntungan finansial",
      "Dapat diabaikan apabila kecelakaan tidak menimbulkan korban jiwa"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Rekomendasi hasil penelitian kecelakaan wajib ditindaklanjuti oleh Pemerintah, Penyelenggara Prasarana, dan Penyelenggara Sarana serta dapat diumumkan kepada publik."
  },
  {
    "id": "KA-040",
    "question": "Berdasarkan PP Nomor 6 Tahun 2017 tentang Perubahan atas PP Nomor 56 Tahun 2009, apa syarat mutlak yang wajib dipenuhi Badan Usaha untuk memperoleh izin operasi prasarana atau sarana perkeretaapian?",
    "options": [
      "Memiliki minimal 100 unit lokomotif baru",
      "Membuat dan melaksanakan Sistem Manajemen Keselamatan Perkeretaapian (SMKP)",
      "Membebaskan seluruh tarif angkutan penumpang selama 1 tahun",
      "Mengelola seluruh perlintasan sebidang di jalan nasional"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "PP 6 Tahun 2017 mensyaratkan Badan Usaha wajib membuat dan melaksanakan SMKP untuk memperoleh izin operasi prasarana/sarana perkeretaapian."
  },
  {
    "id": "KA-041",
    "question": "Peraturan Menteri Perhubungan yang secara khusus mengatur tentang Sistem Manajemen Keselamatan Perkeretaapian (SMKP) adalah...",
    "options": [
      "Permenhub Nomor PM 24 Tahun 2015",
      "Permenhub Nomor PM 4 Tahun 2017",
      "Permenhub Nomor PM 69 Tahun 2018",
      "Permenhub Nomor PM 85 Tahun 2018"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Permenhub Nomor PM 69 Tahun 2018 mengatur tentang Sistem Manajemen Keselamatan Perkeretaapian (SMKP), sedangkan PM 85 Tahun 2018 mengatur SMK Perusahaan Angkutan Umum (jalan)."
  },
  {
    "id": "KA-042",
    "question": "Menurut Permenhub PM 69 Tahun 2018, seberapa sering Penyelenggara Perkeretaapian wajib menyampaikan laporan penerapan SMKP secara berkala kepada Direktur Jenderal Perkeretaapian?",
    "options": [
      "Setiap 3 bulan sekali",
      "Setiap 6 bulan sekali",
      "Setiap 1 (satu) tahun sekali",
      "Setiap 2 (dua) tahun sekali"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Laporan penerapan SMKP disampaikan kepada Direktur Jenderal secara berkala setiap 1 (satu) tahun sekali, sedangkan audit SMKP dilaksanakan paling sedikit 1 kali dalam 2 tahun."
  },
  {
    "id": "KA-043",
    "question": "Berapa frekuensi minimal pelaksanaan audit SMKP yang diwajibkan berdasarkan Permenhub Nomor PM 69 Tahun 2018?",
    "options": [
      "Paling sedikit 1 (satu) kali dalam 1 (satu) tahun",
      "Paling sedikit 1 (satu) kali dalam 2 (dua) tahun, serta dapat dilaksanakan dalam kondisi tertentu",
      "Paling sedikit 1 (satu) kali dalam 5 (lima) tahun",
      "Hanya dilakukan satu kali saat pengajuan izin operasi pertama"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Audit SMKP dilaksanakan paling sedikit 1 (satu) kali dalam 2 (dua) tahun dan dapat dilaksanakan sewaktu-waktu dalam kondisi tertentu."
  },
  {
    "id": "KA-044",
    "question": "Berdasarkan Permenhub Nomor PM 31 Tahun 2024 tentang Penilaian Sistem Keselamatan Perkeretaapian, apa saja 3 (tiga) objek yang wajib dilakukan penilaian sistem keselamatan?",
    "options": [
      "Jalur Rel, Stasiun, dan Depo",
      "Prasarana Perkeretaapian, Sarana Perkeretaapian, dan Sumber Daya Manusia Perkeretaapian",
      "Lokomotif, Kereta Penumpang, dan Gerbong Barang",
      "Regulator, Operator, dan Penumpang"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "PM 31 Tahun 2024 menetapkan 3 objek penilaian sistem keselamatan: Prasarana Perkeretaapian, Sarana Perkeretaapian, dan SDM Perkeretaapian."
  },
  {
    "id": "KA-045",
    "question": "Penilaian Sistem Keselamatan Perkeretaapian menurut PM 31 Tahun 2024 dilakukan dalam 3 (tiga) tahapan, yaitu...",
    "options": [
      "Perencanaan, Pembangunan atau Pengadaan, dan Persiapan Pengoperasian",
      "Inspeksi, Investigasi, dan Rehabilitasi",
      "Pengaturan, Pengendalian, dan Pengawasan",
      "Identifikasi, Evaluasi, dan Penghapusan"
    ],
    "answer": 0,
    "points": 1,
    "explanation": "Tahapan penilaian sistem keselamatan dalam PM 31 Tahun 2024 meliputi: (01) Perencanaan, (02) Pembangunan atau Pengadaan, dan (03) Persiapan Pengoperasian."
  },
  {
    "id": "KA-046",
    "question": "Kapan setiap Prasarana, Sarana, dan SDM Perkeretaapian wajib dilakukan Penilaian Sistem Keselamatan berdasarkan PM 31 Tahun 2024?",
    "options": [
      "Hanya setelah terjadi kecelakaan kereta api",
      "Pada saat sebelum dioperasikan untuk pertama kali dan/atau terjadi perubahan spesifikasi teknis Prasarana dan Sarana Perkeretaapian",
      "Setiap pergantian jadwal grafik perjalanan kereta api (Gapeka)",
      "Setiap 10 tahun masa pakai sarana"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Penilaian sistem keselamatan wajib dilakukan sebelum dioperasikan untuk pertama kali dan/atau ketika terjadi perubahan spesifikasi teknis prasarana dan sarana."
  },
  {
    "id": "KA-047",
    "question": "Siapakah yang tergabung dalam Tim Penilai Sistem Keselamatan Perkeretaapian menurut PM 31 Tahun 2024?",
    "options": [
      "Masinis Utama dan PPKA Senior",
      "Auditor Perkeretaapian dan/atau Inspektur Perkeretaapian",
      "Kepolisian dan Dinas Bina Marga",
      "Direksi Badan Usaha dan Konsultan Keuangan"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Tim penilai sistem keselamatan perkeretaapian terdiri atas Auditor Perkeretaapian dan/atau Inspektur Perkeretaapian."
  },
  {
    "id": "KA-048",
    "question": "Empat bidang yang tercakup dalam Standar Keselamatan Perkeretaapian menurut Permenhub Nomor PM 24 Tahun 2015 adalah...",
    "options": [
      "Bidang Prasarana, Bidang Sarana, Bidang Lalu Lintas dan Angkutan, serta Bidang Sumber Daya Manusia",
      "Bidang Keuangan, Bidang Operasional, Bidang Pemasaran, dan Bidang Hukum",
      "Bidang Sinyal, Bidang Telekomunikasi, Bidang Listrik Aliran Atas, dan Bidang Jalan Rel",
      "Bidang Pencegahan, Bidang Tanggap Darurat, Bidang Investigasi, dan Bidang Audit"
    ],
    "answer": 0,
    "points": 1,
    "explanation": "PM 24 Tahun 2015 membagi standar keselamatan perkeretaapian menjadi 4 bidang: Prasarana, Sarana, Lalu Lintas & Angkutan, serta Sumber Daya Manusia."
  },
  {
    "id": "KA-049",
    "question": "Menurut Permenhub Nomor PM 94 Tahun 2018, evaluasi terhadap Perlintasan Sebidang antara jalur kereta api dengan jalan wajib dilaksanakan paling sedikit...",
    "options": [
      "1 (satu) bulan sekali",
      "6 (enam) bulan sekali",
      "1 (satu) tahun sekali",
      "3 (tiga) tahun sekali"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Berdasarkan PM 94 Tahun 2018, evaluasi perlintasan sebidang dilaksanakan paling sedikit 1 (satu) tahun sekali."
  },
  {
    "id": "KA-050",
    "question": "Berdasarkan PM 94 Tahun 2018, siapakah pejabat yang berwenang melakukan evaluasi Perlintasan Sebidang yang berada pada Jalan Nasional?",
    "options": [
      "Gubernur",
      "Bupati atau Wali Kota",
      "Direktur Jenderal (Perkeretaapian)",
      "Kepala Daop/Divre PT KAI"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Pada PM 94 Tahun 2018, pengelolaan jalan nasional oleh Menteri dan evaluasi perlintasan sebidang di jalan nasional dilakukan oleh Direktur Jenderal; jalan provinsi oleh Gubernur; jalan kab/kota & desa oleh Bupati/Wali Kota."
  },
  {
    "id": "KA-051",
    "question": "Manakah di bawah ini yang BUKAN termasuk 6 unit kerja terkait yang terlibat dalam pelaksanaan evaluasi Perlintasan Sebidang menurut PM 94 Tahun 2018?",
    "options": [
      "Direktorat Jenderal Perkeretaapian dan Direktorat Jenderal Perhubungan Darat",
      "Dinas Perhubungan dan Dinas Bina Marga",
      "Kepolisian Negara Republik Indonesia dan Daop/Divre PT Kereta Api Indonesia (Persero)",
      "Kementerian Pariwisata dan Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)"
    ],
    "answer": 3,
    "points": 1,
    "explanation": "Enam unit kerja yang terlibat: DJKA, Ditjen Perhubungan Darat, Dinas Perhubungan, Dinas Bina Marga, Polri, dan Daop/Divre PT KAI (Persero)."
  },
  {
    "id": "KA-052",
    "question": "Struktur lengkap Sistem Manajemen Keselamatan Perkeretaapian (SMKP) dalam PM 69 Tahun 2018 terdiri atas...",
    "options": [
      "4 Pilar, 10 Elemen, 40 Sub Elemen, dan 127 Kriteria",
      "5 Prinsip, 17 Elemen, 54 Sub Elemen, dan 229 Kriteria",
      "3 Komponen, 12 Elemen, 36 Sub Elemen, dan 185 Kriteria",
      "5 Prinsip, 15 Elemen, 50 Sub Elemen, dan 200 Kriteria"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Struktur lengkap SMKP PM 69 Tahun 2018 mencakup 5 Prinsip, 17 Elemen, 54 Sub Elemen, dan 229 Kriteria."
  },
  {
    "id": "KA-053",
    "question": "Urutan yang benar dari 5 Prinsip SMKP dalam Permenhub PM 69 Tahun 2018 adalah...",
    "options": [
      "Perencanaan -> Penetapan Kebijakan -> Pelaksanaan -> Pemantauan -> Peninjauan",
      "Penetapan Kebijakan Keselamatan -> Perencanaan Keselamatan -> Pelaksanaan Rencana Keselamatan -> Pemantauan dan Evaluasi Kinerja -> Peninjauan dan Peningkatan Kinerja SMKP",
      "Penetapan Kebijakan -> Pelaksanaan Rencana -> Perencanaan Keselamatan -> Peninjauan -> Pemantauan",
      "Identifikasi Bahaya -> Analisis Risiko -> Pengendalian -> Audit Internal -> Sertifikasi"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Lima Prinsip SMKP mengikuti siklus PDCA: (1) Penetapan Kebijakan, (2) Perencanaan, (3) Pelaksanaan Rencana, (4) Pemantauan & Evaluasi, (5) Peninjauan & Peningkatan Kinerja."
  },
  {
    "id": "KA-054",
    "question": "Dalam pemetaan 17 Elemen SMKP ke dalam 5 Prinsip SMKP, elemen 'Pengendalian atas Kesalahan Faktor Manusia (Elemen 4)' dan 'Budaya Keselamatan (Elemen 15)' berada di bawah prinsip...",
    "options": [
      "Prinsip 1: Penetapan Kebijakan Keselamatan Perkeretaapian",
      "Prinsip 2: Perencanaan Keselamatan Perkeretaapian",
      "Prinsip 3: Pelaksanaan Rencana Keselamatan Perkeretaapian",
      "Prinsip 5: Peninjauan dan Peningkatan Kinerja SMKP"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Prinsip 3 (Pelaksanaan Rencana Keselamatan) menaungi 8 elemen, termasuk Elemen 4 (Faktor Manusia), Elemen 5, 6, 7, 9, 10, 13, dan Elemen 15 (Budaya Keselamatan)."
  },
  {
    "id": "KA-055",
    "question": "Elemen 'Audit Internal SMKP (Elemen 16)' dan 'Pelaporan Potensi Bahaya dan Pelaporan Kecelakaan (Elemen 12)' termasuk dalam prinsip SMKP ke berapa?",
    "options": [
      "Prinsip 2: Perencanaan Keselamatan",
      "Prinsip 3: Pelaksanaan Rencana Keselamatan",
      "Prinsip 4: Pemantauan dan Evaluasi Kinerja Keselamatan Perkeretaapian",
      "Prinsip 5: Peninjauan dan Peningkatan Kinerja SMKP"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Prinsip 4 (Pemantauan dan Evaluasi Kinerja) mencakup Elemen 8, Elemen 11 (Standar Pemantauan), Elemen 12 (Pelaporan Bahaya & Kecelakaan), Elemen 14 (Data), dan Elemen 16 (Audit Internal)."
  },
  {
    "id": "KA-056",
    "question": "Dalam penilaian tingkat penerapan SMKP, kategori Penyelenggara Perkeretaapian dibagi menjadi tiga tingkat dengan jumlah kriteria masing-masing yaitu...",
    "options": [
      "Tingkat Awal (100 kriteria), Tingkat Menengah (150 kriteria), Tingkat Akhir (200 kriteria)",
      "Tingkat Awal (127 kriteria), Tingkat Transisi (185 kriteria), dan Tingkat Lanjutan (229 kriteria)",
      "Tingkat Dasar (54 kriteria), Tingkat Madya (127 kriteria), dan Tingkat Utama (229 kriteria)",
      "Tingkat Pemula (120 kriteria), Tingkat Berkembang (180 kriteria), dan Tingkat Mandiri (240 kriteria)"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Kategori tingkat penerapan SMKP terdiri dari Tingkat Awal (127 kriteria), Tingkat Transisi (185 kriteria), dan Tingkat Lanjutan (229 kriteria)."
  },
  {
    "id": "KA-057",
    "question": "Jika hasil audit SMKP pada penyelenggara perkeretaapian memperoleh tingkat pencapaian penerapan sebesar 78%, maka predikat tingkat penilaian penerapannya adalah...",
    "options": [
      "Kurang (0–59%)",
      "Baik (60–84%)",
      "Memuaskan (85–100%)",
      "Sangat Memuaskan (>95%)"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Rentang pencapaian penerapan SMKP adalah: 0–59% (Kurang), 60–84% (Baik), dan 85–100% (Memuaskan). Nilai 78% masuk kategori Baik."
  },
  {
    "id": "KA-058",
    "question": "Dalam klasifikasi temuan audit SMKP, temuan yang bersifat 'tidak memenuhi ketentuan peraturan perundang-undangan, tidak melaksanakan salah satu prinsip SMKP, atau terdapat temuan minor pada satu kriteria di beberapa lokasi' dikategorikan sebagai...",
    "options": [
      "Kategori Minor",
      "Kategori Mayor",
      "Kategori Kritikal",
      "Kategori Observasi"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Kategori Kritikal adalah temuan yang mengakibatkan fatality/kematian; Kategori Mayor adalah pelanggaran regulasi, prinsip SMKP tidak jalan, atau temuan minor berulang di beberapa lokasi; Kategori Minor adalah ketidakkonsistenan administratif/standar."
  },
  {
    "id": "KA-059",
    "question": "Berapa batas waktu paling lambat bagi penyelenggara perkeretaapian untuk menindaklanjuti temuan audit SMKP dengan 'Kategori Mayor' melalui tindakan koreksi?",
    "options": [
      "7 (tujuh) hari kerja",
      "1 (satu) bulan",
      "6 (enam) bulan",
      "1 (satu) tahun"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Penilaian terhadap kriteria audit SMKP dengan kategori Mayor harus ditindaklanjuti dengan tindakan koreksi paling lambat dalam jangka waktu 1 (satu) bulan."
  },
  {
    "id": "KA-060",
    "question": "Apa perbedaan sanksi administratif berjenjang antara SMKPAU (PM 85/2018 untuk Angkutan Jalan) dengan SMKP (PM 69/2018 untuk Perkeretaapian)?",
    "options": [
      "PM 85/2018 tidak memiliki sanksi pencabutan izin, sedangkan PM 69/2018 hanya berupa teguran lisan",
      "Pada PM 85/2018 urutannya adalah Peringatan tertulis -> Pembekuan Kartu Pengawasan (KPP) -> Pencabutan Izin/KPP; sedangkan pada PM 69/2018 adalah Peringatan tertulis (2x @30 hari) -> Pembekuan Izin Operasi (30 hari) -> Pencabutan Izin",
      "Keduanya langsung menjatuhkan sanksi pidana penjara tanpa peringatan tertulis",
      "PM 69/2018 membekukan SIM pengemudi, sedangkan PM 85/2018 membekukan izin stasiun"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Berdasarkan matriks perbandingan regulasi, PM 85/2018 membekukan/mencabut KPP/Izin Trayek, sedangkan PM 69/2018 memberikan peringatan tertulis (2x @30 hari), pembekuan izin operasi (30 hari), lalu pencabutan izin."
  },
  {
    "id": "KA-061",
    "question": "Berapa persentase kontribusi faktor manusia (human factors) terhadap kecelakaan transportasi darat menurut kajian teknis regulasi keselamatan?",
    "options": [
      "Sekitar 25%",
      "Sekitar 45%",
      "Lebih dari 80% (>80%)",
      "Tepat 50%"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Faktor manusia berkontribusi lebih dari 80% (>80%) terhadap kecelakaan transportasi darat sehingga kompetensi dan pengendalian risiko awak sangat krusial."
  },
  {
    "id": "KA-062",
    "question": "Menurut Pasal 77, 80, dan 82 UU Nomor 22 Tahun 2009 tentang LLAJ, jenis Surat Izin Mengemudi (SIM) yang wajib dimiliki pengemudi angkutan umum bus serta truk berat berkapasitas di atas 3.500 kg adalah...",
    "options": [
      "SIM A Umum",
      "SIM B I Umum",
      "SIM B II Umum",
      "SIM C Umum"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "SIM A Umum untuk angkutan umum < 3.500 kg; SIM B I Umum untuk bus dan truk berat > 3.500 kg; SIM B II Umum untuk kendaraan gandengan atau tempelan > 1.000 kg."
  },
  {
    "id": "KA-063",
    "question": "Berdasarkan norma kerja dan kesehatan dalam Pasal 90 UU Nomor 22 Tahun 2009, berapa batas maksimal waktu mengemudi berturut-turut bagi pengemudi kendaraan bermotor umum sebelum wajib beristirahat?",
    "options": [
      "2 jam berturut-turut dengan istirahat 15 menit",
      "4 jam berturut-turut dengan istirahat wajib minimal 30 menit",
      "6 jam berturut-turut dengan istirahat 1 jam",
      "8 jam berturut-turut tanpa jeda istirahat"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "UU 22/2009 menetapkan batas waktu kerja harian maksimal 8 jam, batas mengemudi berturut-turut maksimal 4 jam, dan wajib istirahat minimal 30 menit setelah mengemudi 4 jam."
  },
  {
    "id": "KA-064",
    "question": "Apa kewajiban perusahaan angkutan umum apabila menyelenggarakan perjalanan jarak jauh yang waktu tempuhnya melebihi batas maksimal 8 jam kerja harian?",
    "options": [
      "Memberikan bonus uang lembur kepada pengemudi tunggal",
      "Wajib menyediakan pengemudi pengganti / pengemudi cadangan",
      "Mengizinkan pengemudi mengonsumsi suplemen penahan kantuk",
      "Menambah kecepatan kendaraan agar tiba di bawah 8 jam"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Untuk perjalanan jarak jauh di atas 8 jam, perusahaan angkutan umum wajib menyediakan pengemudi cadangan/pengganti."
  },
  {
    "id": "KA-065",
    "question": "Berapa lama masa berlaku Surat Izin Mengemudi (SIM) Umum berdasarkan UU Nomor 22 Tahun 2009?",
    "options": [
      "2 tahun",
      "3 tahun",
      "5 tahun",
      "Seumur hidup"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Masa berlaku SIM Umum menurut UU No. 22 Tahun 2009 adalah 5 tahun."
  },
  {
    "id": "KA-066",
    "question": "Menurut Pasal 117 dan 118 UU Nomor 23 Tahun 2007 tentang Perkeretaapian, siapa saja awak sarana perkeretaapian yang wajib memiliki sertifikat kecakapan?",
    "options": [
      "Hanya masinis yang mengoperasikan kereta api cepat",
      "Masinis dan Asisten Masinis",
      "Hanya petugas keamanan di dalam kereta",
      "Petugas loket tiket dan kondektur"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Pasal 117 UU 23/2007 mewajibkan Masinis dan Asisten Masinis memiliki sertifikat kecakapan serta lulus diklat teknis dan kelaikan medis ketat."
  },
  {
    "id": "KA-067",
    "question": "Regulasi turunan yang mengatur secara spesifik mengenai Sertifikasi Kecakapan Awak Sarana Perkeretaapian (ASP) adalah...",
    "options": [
      "Permenhub Nomor PM 4 Tahun 2017",
      "Permenhub Nomor PM 94 Tahun 2018",
      "Permenhub Nomor PM 24 Tahun 2015",
      "PP Nomor 74 Tahun 2014"
    ],
    "answer": 0,
    "points": 1,
    "explanation": "Permenhub Nomor PM 4 Tahun 2017 mengatur tentang Sertifikasi Kecakapan Awak Sarana Perkeretaapian (ASP)."
  },
  {
    "id": "KA-068",
    "question": "Sebutkan urutan 4 (empat) jenjang sertifikasi Awak Sarana Perkeretaapian (ASP) berdasarkan Permenhub PM Nomor 4 Tahun 2017!",
    "options": [
      "Tingkat Dasar, Tingkat Menengah, Tingkat Lanjut, dan Tingkat Ahli",
      "Tingkat Pertama (Asisten Masinis), Tingkat Muda, Tingkat Madya, dan Tingkat Utama",
      "Tingkat Pratama, Tingkat Terampil, Tingkat Penyelia, dan Tingkat Pembina",
      "Tingkat Junior, Tingkat Senior, Tingkat Supervisor, dan Tingkat Manajer"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Empat jenjang sertifikat ASP dalam PM 4/2017 adalah: Tingkat Pertama (Asisten Masinis), Tingkat Muda, Tingkat Madya, dan Tingkat Utama."
  },
  {
    "id": "KA-069",
    "question": "Urutan alur tahapan proses sertifikasi Masinis dalam Permenhub PM No. 4 Tahun 2017 adalah...",
    "options": [
      "Uji Praktik Lintas -> Diklat & Jam Kerja -> Lisensi DJKA -> Uji Teori",
      "Diklat & Jam Kerja -> Uji Teori & Simulator -> Uji Praktik Lintas -> Penerbitan Lisensi DJKA",
      "Penerbitan Lisensi DJKA -> Uji Simulator -> Diklat -> Uji Praktik",
      "Uji Teori -> Uji Praktik Lintas -> Diklat & Jam Kerja -> Lisensi DJKA"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Tahap sertifikasi ASP: (01) Diklat & Jam Kerja, (02) Uji Teori & Simulator, (03) Uji Praktik Lintas, dan (04) Penerbitan Lisensi DJKA."
  },
  {
    "id": "KA-070",
    "question": "Apa perbedaan mendasar dalam hal kontrol kesehatan antara Awak Kendaraan Umum (jalan raya) dengan Awak Sarana Perkeretaapian (kereta api)?",
    "options": [
      "Awak kereta api hanya diperiksa kesehatannya 5 tahun sekali, sedangkan awak bus diperiksa setiap hari",
      "Awak sarana perkeretaapian wajib menjalani pemeriksaan medis pra-dinas sebelum setiap dinasan (tekanan darah & kesiapan), sedangkan awak kendaraan umum umumnya saat penerbitan SIM & inspeksi ramp check",
      "Awak kendaraan umum bebas dari tes narkotika, sedangkan awak kereta api tidak",
      "Tidak ada pemeriksaan kesehatan bagi asisten masinis"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Awak sarana perkeretaapian wajib menjalani pemeriksaan medis pra-dinas sebelum setiap dinas (verifikasi tekanan darah dan kesiapan), yang direkomendasikan untuk diadopsi oleh angkutan jalan."
  },
  {
    "id": "KA-071",
    "question": "Berdasarkan analisis faktor manusia dan investigasi KNKT, dua pemicu utama risiko kecelakaan awak transportasi dengan tingkat risiko 'Tinggi (Kritis & Dominan)' adalah...",
    "options": [
      "Kelelahan & kurang istirahat (pelanggaran batas jam kerja) serta ketidakpatuhan prosedur operasi & semboyan/rambu",
      "Kurangnya fasilitas hiburan di kabin dan seragam kerja yang tidak modis",
      "Terlalu sering mengikuti pelatihan simulator dan cek kesehatan pra-dinas",
      "Penggunaan sistem pengupahan gaji tetap dan bonus keselamatan"
    ],
    "answer": 0,
    "points": 1,
    "explanation": "Hasil analisis investigasi KNKT menunjukkan kelelahan/pelanggaran batas jam kerja (Tinggi Kritis) dan ketidakpatuhan prosedur/semboyan (Tinggi Dominan) merupakan pemicu utama kecelakaan awak."
  },
  {
    "id": "KA-072",
    "question": "Empat pilar keselamatan awak transportasi berkelanjutan meliputi...",
    "options": [
      "Sertifikasi Berkelanjutan, Manajemen Kelelahan, Pemeriksaan Pra-Dinas, dan Budaya Keselamatan Adil",
      "Target Setoran Harian, Pemotongan Upah, Jam Kerja Ekstra, dan Sanksi Pemecatan",
      "Pengadaan Armada Baru, Penghapusan Jalur, Kenaikan Tarif, dan Privatisasi",
      "Audit Keuangan, Rekrutmen Massal, Rotasi Jabatan, dan Promosi Iklan"
    ],
    "answer": 0,
    "points": 1,
    "explanation": "Empat pilar keselamatan awak berkelanjutan: (1) Sertifikasi Berkelanjutan, (2) Manajemen Kelelahan, (3) Pemeriksaan Pra-Dinas, dan (4) Budaya Keselamatan Adil."
  },
  {
    "id": "KA-073",
    "question": "Apa yang dimaksud dengan kejadian SPAD (Signal Passed At Danger) pada operasional perkeretaapian?",
    "options": [
      "Kereta api berhenti tepat waktu di stasiun tujuan",
      "Pelanggaran sinyal bahaya (kereta api melewati sinyal aspek merah/berhenti tanpa izin)",
      "Proses perpindahan jalur kereta api melalui wesel yang terkunci aman",
      "Pemeriksaan rem udara sebelum keberangkatan rangkaian kereta barang"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "SPAD (Signal Passed At Danger) adalah kondisi di mana kereta api melanggar/melewati sinyal yang menunjukkan indikasi bahaya (merah), yang sering dipicu oleh micro-sleep atau beban kognitif berlebih."
  },
  {
    "id": "KA-074",
    "question": "Dalam kajian kebijakan keselamatan angkutan umum darat, mengapa sistem pengupahan pengemudi berbasis target setoran sangat berbahaya bagi keselamatan?",
    "options": [
      "Karena membuat biaya administrasi perusahaan meningkat drastis",
      "Karena tekanan ekonomi mendorong pengemudi melampaui batas jam kerja, mengabaikan batas kecepatan, dan memicu kelelahan ekstrem",
      "Karena menurunkan minat masyarakat menggunakan angkutan umum",
      "Karena menyebabkan kendaraan lebih cepat lulus uji berkala"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Sistem setoran memaksa pengemudi mengejar trip secara berlebihan hingga melanggar batas jam kerja dan batas kecepatan serta memicu kelelahan."
  },
  {
    "id": "KA-075",
    "question": "Terobosan reformasi pengupahan awak kendaraan yang direkomendasikan dalam kebijakan keselamatan angkutan umum darat adalah...",
    "options": [
      "Menghapus gaji pokok dan menggantinya dengan komisi penumpang",
      "Mewajibkan standar upah tetap disertai insentif keselamatan (zero-accident & zero-violation bonus) dalam evaluasi perizinan",
      "Memotong upah pengemudi apabila menolak menjalankan kendaraan yang remnya rusak",
      "Memberikan bonus berdasarkan kecepatan tempuh tercepat antar kota"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Reformasi pengupahan mewajibkan standar upah tetap disertai insentif keselamatan (zero-accident & zero-violation bonus) untuk mengakhiri budaya kejar setoran."
  },
  {
    "id": "KA-076",
    "question": "Dalam Model Swiss Cheese (Keju Swiss) yang dikembangkan oleh James Reason, bagaimana suatu kecelakaan atau bencana dapat terjadi?",
    "options": [
      "Ketika hanya satu lapisan pertahanan mengalami kerusakan kecil",
      "Ketika kelemahan laten dan kegagalan aktif pada seluruh lapisan pertahanan sistemik menembus sejajar membentuk jalur penetrasi bahaya",
      "Akibat faktor nasib buruk yang tidak dapat dicegah oleh sistem manajemen apa pun",
      "Hanya karena kelalaian operator garis depan tanpa ada pengaruh dari keputusan manajemen"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Dalam Model Swiss Cheese, bencana terjadi hanya ketika lubang-lubang kelemahan laten (manajemen, pengawasan, sarana) dan kegagalan aktif (operator) sejajar sehingga bahaya menembus seluruh lapisan."
  },
  {
    "id": "KA-077",
    "question": "Pemotongan anggaran suku cadang rem oleh manajemen atau inspeksi ramp check yang dilakukan secara fiktif/formalitas dalam Model Swiss Cheese diklasifikasikan sebagai...",
    "options": [
      "Kegagalan Aktif (Active Failures)",
      "Kondisi Laten (Latent Conditions)",
      "Faktor Cuaca Ekstrem",
      "Tindakan Sabotase"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Keputusan manajemen dan kelemahan pengawasan merupakan Kondisi Laten (latent conditions) yang tertanam dalam sistem sebelum memicu kegagalan aktif di garis depan."
  },
  {
    "id": "KA-078",
    "question": "Apa yang dimaksud dengan fenomena 'Practical Drift' (Degradasi Prosedur) dalam operasional transportasi?",
    "options": [
      "Peningkatan kepatuhan terhadap SOP secara bertahap dari waktu ke waktu",
      "Penyimpangan perlahan dari SOP akibat tekanan operasional yang akhirnya dinormalisasi sebagai kebiasaan aman (normalization of deviance) hingga mendekati ambang bencana",
      "Perubahan jadwal kereta api akibat perbaikan jembatan rel",
      "Pengalihan rute bus akibat banjir di jalan nasional"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Practical Drift terjadi ketika tekanan operasional memaksa jalan pintas sehingga pelanggaran SOP (seperti membiarkan ODOL atau checklist formalitas) dianggap sebagai kebiasaan normal hingga memicu tragedi."
  },
  {
    "id": "KA-079",
    "question": "Sebutkan 5 (lima) pilar pembentuk Budaya Keselamatan (Safety Culture) menurut James Reason!",
    "options": [
      "Informed Culture, Reporting Culture, Just Culture, Flexible Culture, dan Learning Culture",
      "Elimination Culture, Substitution Culture, Engineering Culture, Administrative Culture, dan PPE Culture",
      "Patologis, Reaktif, Kalkulatif, Proaktif, dan Generatif",
      "Search, Analyse, Follow-up, Encourage, dan Evaluate"
    ],
    "answer": 0,
    "points": 1,
    "explanation": "Lima pilar Budaya Keselamatan James Reason adalah: Informed Culture, Reporting Culture, Just Culture (inti), Flexible Culture, dan Learning Culture."
  },
  {
    "id": "KA-080",
    "question": "Apa yang menjadi inti (core) dari Budaya Keselamatan menurut James Reason yang membedakan secara tegas antara kesalahan manusia yang jujur dengan tindakan sembrono/sabotase?",
    "options": [
      "Blaming Culture (Budaya Menyalahkan)",
      "Just Culture (Budaya Keadilan)",
      "Kalkulatif Culture",
      "Paper Compliance Culture"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Just Culture adalah inti budaya keselamatan yang menetapkan batas transparan antara human error yang jujur (ditangani dengan coaching/perbaikan sistem) dengan tindakan sembrono (reckless) atau sabotase (sanksi tegas)."
  },
  {
    "id": "KA-081",
    "question": "Bagaimana perbedaan mendasar antara 'Blaming Culture' dan 'Just Culture' saat terjadi sebuah insiden operasional?",
    "options": [
      "Blaming Culture bertanya 'Mengapa sistem kita gagal?', sedangkan Just Culture bertanya 'Siapa kambing hitamnya?'",
      "Blaming Culture fokus mencari siapa yang salah dan menghukum personel lapangan seketika sehingga memicu ketakutan & penyembunyian data; sedangkan Just Culture fokus memperbaiki sistem yang gagal melindungi operator dan hanya menghukum tindakan sembrono/sabotase",
      "Blaming Culture membebaskan semua pelaku sabotase dari hukuman, sedangkan Just Culture memecat semua pegawai yang berbuat salah",
      "Keduanya sama-sama mengabaikan investigasi akar masalah sistemik"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Blaming Culture menghukum personel lapangan tanpa investigasi mendalam sehingga mematikan pelaporan, sedangkan Just Culture menciptakan ekosistem belajar dan keadilan proporsional."
  },
  {
    "id": "KA-082",
    "question": "Dalam Pohon Keputusan Akuntabilitas (Just Culture Matrix), apa fungsi dari 'Tes Substitusi' (Substitution Test)?",
    "options": [
      "Mengganti komponen sarana yang rusak dengan suku cadang bekas",
      "Menguji apakah pegawai lain dengan kualifikasi dan pengalaman yang sama berpotensi melakukan kesalahan serupa dalam situasi kerja yang sama (mengindikasikan kegagalan sistemik/kondisi laten)",
      "Mengganti masinis yang terlambat dengan petugas administrasi stasiun",
      "Menukar jadwal audit internal dengan inspeksi mendadak"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Tes Substitusi mengevaluasi apakah rekan sejawat dengan kualifikasi setara akan melakukan kekeliruan yang sama pada kondisi tersebut; jika ya, akar masalahnya adalah kegagalan sistemik/kondisi laten."
  },
  {
    "id": "KA-083",
    "question": "Jika seorang operator mengalami 'Human Error' (kesalahan tidak disengaja akibat desain sistem atau kelelahan), tindakan akhir yang tepat menurut Just Culture Matrix adalah...",
    "options": [
      "Pemecatan seketika dan tuntutan pidana",
      "Coaching, pelatihan ulang, serta revisi SOP atau desain sistem kerja",
      "Pemotongan gaji pokok selama 1 tahun penuh",
      "Membiarkannya tanpa evaluasi apa pun"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Terhadap human error yang jujur, solusinya bukan sanksi hukuman, melainkan coaching, pelatihan ulang, dan perbaikan desain sistem/SOP."
  },
  {
    "id": "KA-084",
    "question": "Urutan 5 (lima) anak tangga pada Tangga Maturitas Budaya Keselamatan dari tingkat terendah hingga tingkat puncak adalah...",
    "options": [
      "Reaktif -> Patologis -> Proaktif -> Kalkulatif -> Generatif",
      "Patologis -> Reaktif -> Kalkulatif -> Proaktif -> Generatif",
      "Kalkulatif -> Patologis -> Reaktif -> Generatif -> Proaktif",
      "Generatif -> Proaktif -> Kalkulatif -> Reaktif -> Patologis"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Tangga Maturitas Budaya Keselamatan: (1) Patologis, (2) Reaktif, (3) Kalkulatif, (4) Proaktif, dan (5) Generatif (Puncak)."
  },
  {
    "id": "KA-085",
    "question": "Karakteristik organisasi yang berada pada tingkat '3. Kalkulatif' dalam Tangga Maturitas Budaya Keselamatan adalah...",
    "options": [
      "Menganggap keselamatan sebagai pembuangan waktu dan menyembunyikan kecelakaan",
      "Baru bertindak hanya setelah terjadi kecelakaan fatal",
      "Memiliki sistem SMK (PAU/SMKP) lengkap di atas kertas dan berfokus pada kepatuhan data serta audit administratif",
      "Menjadikan keselamatan sebagai cara berbisnis (DNA operasi) secara organik tanpa paksaan"
    ],
    "answer": 2,
    "points": 1,
    "explanation": "Tingkat Kalkulatif ditandai dengan kelengkapan sistem di atas kertas dan kepatuhan administratif/audit, namun belum sepenuhnya menjadi budaya organik seperti pada tingkat Generatif."
  },
  {
    "id": "KA-086",
    "question": "Prinsip kepemimpinan lapangan S.A.F.E dalam membangun budaya keselamatan merupakan singkatan dari...",
    "options": [
      "Standardize, Audit, Fix, Evaluate",
      "Search for Hazard, Analyse the Risk, Follow Up Actions, Encourage People",
      "Safety, Accountability, Fairness, Efficiency",
      "Supervise, Assess, Formulate, Execute"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "S.A.F.E adalah: Search for Hazard (pencarian bahaya aktif), Analyse the Risk (analisis kedalaman risiko), Follow Up Actions (eksekusi mitigasi nyata), dan Encourage People (dorong partisipasi SDM)."
  },
  {
    "id": "KA-087",
    "question": "Dalam Arsitektur Ekosistem Ultra-Safe, ketiga lapisan yang terdiri atas Regulasi Nasional, Sistem (SMKP/SMK PAU), dan Safety Culture masing-masing diibaratkan sebagai...",
    "options": [
      "Mesin Penggerak, Kerangka Dasar, dan Rem Darurat",
      "Kerangka Dasar (Hardware), Mesin Penggerak (Software), dan Bahan Bakar (Fuel)",
      "Bahan Bakar, Roda Penggerak, dan Jalur Rel",
      "Pilar Pertama, Pilar Kedua, dan Pilar Ketiga"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Regulasi Nasional adalah Kerangka Dasar (Hardware), Sistem SMKP/SMKPAU adalah Mesin Penggerak (Software), dan Safety Culture adalah Bahan Bakar (Fuel) utamanya."
  },
  {
    "id": "KA-088",
    "question": "Apa makna kutipan terkenal dari James Reason: 'Kita tidak bisa mengubah kondisi manusia, tetapi kita BISA mengubah kondisi kerja'?",
    "options": [
      "Manusia dapat dilatih agar tidak pernah melakukan kesalahan seumur hidup",
      "Manusia secara kodrati rentan berbuat salah (fallible), sehingga manajemen harus merancang sistem dan kondisi kerja yang mampu mencegah dan menyerap kesalahan manusia (forgiving system)",
      "Kesalahan manusia harus selalu dihukum berat agar manusia berubah menjadi sempurna",
      "Kondisi kerja di lapangan tidak perlu diperbaiki selama SOP sudah dicetak"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Karena manusia secara alami bisa berbuat salah, organisasi harus merancang pertahanan berlapis dan kondisi kerja yang aman agar sistem yang buruk tidak menjebak orang baik."
  },
  {
    "id": "KA-089",
    "question": "Pilar 'Flexible Culture' dalam 5 pilar James Reason mengacu pada kemampuan organisasi untuk...",
    "options": [
      "Mengubah aturan keselamatan demi mengejar target keuntungan perusahaan",
      "Mampu beralih ke kendali operasi terdesentralisasi secara cepat dan tepat saat menghadapi situasi darurat krisis di lintas",
      "Membebaskan pegawai memilih sendiri jam kerja tanpa aturan",
      "Mengabaikan temuan audit minor agar tidak merepotkan manajemen"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Flexible Culture adalah kemampuan organisasi beradaptasi dan mendelegasikan kendali operasi secara cepat kepada ahli di lapangan saat situasi darurat terjadi."
  },
  {
    "id": "KA-090",
    "question": "Dalam pilar 'Learning Culture', bagaimana organisasi memperlakukan hasil investigasi insiden atau near-miss yang terbukti?",
    "options": [
      "Menyimpannya secara rahasia agar tidak diketahui regulator",
      "Mengubah temuan investigasi menjadi perbaikan nyata pada sarana, lingkungan kerja, dan pembaruan SOP fisik",
      "Hanya menjadikannya bahan teguran tahunan bagi kepala unit",
      "Menghapus data insiden setelah 1 bulan"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Learning Culture memastikan organisasi mau belajar dan mereformasi prosedur, pelatihan, serta sarana berdasarkan pelajaran nyata dari insiden."
  },
  {
    "id": "KA-091",
    "question": "Dalam kerangka kerja keselamatan penerbangan internasional (ICAO Annex 19), terdapat 4 (empat) pilar utama Safety Management System (SMS), yaitu...",
    "options": [
      "Safety Policy & Objectives, Safety Risk Management, Safety Assurance, dan Safety Promotion",
      "Pengaturan, Pengendalian, Pengawasan, dan Penindakan",
      "Eliminasi, Substitusi, Rekayasa Teknik, dan Administratif",
      "Informed, Reporting, Just, dan Learning"
    ],
    "answer": 0,
    "points": 1,
    "explanation": "Empat pilar SMS dalam ICAO Annex 19 adalah: (1) Safety Policy & Objectives, (2) Safety Risk Management, (3) Safety Assurance, dan (4) Safety Promotion."
  },
  {
    "id": "KA-092",
    "question": "Bagaimana perbedaan struktur penempatan 'Safety Promotion' (Promosi Keselamatan) antara ICAO Annex 19 dengan Permenhub PM 69 Tahun 2018 (SMKP)?",
    "options": [
      "ICAO Annex 19 tidak mengenal Safety Promotion, sedangkan PM 69/2018 menjadikannya bab pertama",
      "ICAO Annex 19 memposisikan Safety Promotion sebagai pilar mandiri ke-4, sedangkan PM 69/2018 mendistribusikan fungsinya secara terintegrasi ke dalam tahapan pelaksanaan (pelatihan & komunikasi) dan pemantauan/audit (budaya keselamatan)",
      "Keduanya mewajibkan Safety Promotion hanya dilakukan oleh pihak ketiga di luar perusahaan",
      "Safety Promotion dalam PM 69/2018 hanya berfokus pada pemasangan spanduk keselamatan"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "PM 69/2018 tidak memiliki satu bab tunggal bernama 'Promosi Keselamatan', melainkan mendistribusikannya pada Elemen 10 (Komunikasi), Elemen 15 (Budaya Keselamatan), dan Elemen 17 (Pengembangan SDM)."
  },
  {
    "id": "KA-093",
    "question": "Tiga elemen penggerak dalam 'Trias Safety Promotion' di dalam SMKP yang saling mengunci agar tidak terjadi risiko tinggi, stagnasi operasional, maupun under-reporting adalah...",
    "options": [
      "Budaya Keselamatan, Pelatihan & Kompetensi, dan Komunikasi Sistem",
      "Anggaran, Sanksi Pidana, dan Asuransi",
      "Perizinan, Uji Berkala, dan Penghapusan Aset",
      "Inspeksi, Investigasi, dan Rekonstruksi"
    ],
    "answer": 0,
    "points": 1,
    "explanation": "Trias Safety Promotion terdiri dari Budaya Keselamatan (tanpa pelatihan = risiko tinggi), Pelatihan & Kompetensi (tanpa komunikasi = stagnasi operasional), dan Komunikasi Sistem (tanpa budaya = under-reporting)."
  },
  {
    "id": "KA-094",
    "question": "Dalam Deep Dive Budaya Keselamatan pada materi sinergi rel dan aviasi, kriteria audit SMKP nomor berapa yang mewajibkan pimpinan menilai budaya keselamatan SDM secara terstruktur dan menerapkan Just Culture?",
    "options": [
      "Kriteria 4 (Pengendalian Faktor Manusia)",
      "Kriteria 15 (15.1.1, 15.1.2, dan 15.1.3 - Budaya Keselamatan)",
      "Kriteria 11.5 (Pemantauan NAPZA)",
      "Kriteria 17.4.1 (Pelatihan Keahlian Khusus)"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Kriteria 15 mengatur Penilaian Terstruktur (15.1.1), Penerapan Just Culture (15.1.2), dan Konsultasi Partisipatif dengan perwakilan SDM (15.1.3)."
  },
  {
    "id": "KA-095",
    "question": "Dalam arsitektur tata kelola dan struktur komando keselamatan perusahaan transportasi, bagaimana kedudukan 'Unit Safety Management System (Unit SMKP)' yang ideal?",
    "options": [
      "Berada di bawah divisi pemasaran agar tidak menghambat penjualan tiket",
      "Independen dalam struktur organisasi dengan wewenang penuh untuk mengawasi, mengaudit, dan menghentikan operasi armada atau prosedur yang tidak laik/menyimpang",
      "Hanya bertugas mengarsipkan surat masuk dan keluar perusahaan",
      "Dirangkap sepenuhnya oleh mekanik bengkel harian"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Unit keselamatan wajib independen secara struktural dan berwenang penuh mengawasi, mengaudit, dan menghentikan operasi armada/prosedur yang tidak laik."
  },
  {
    "id": "KA-096",
    "question": "Empat Pilar Kebijakan Terpadu Penyelenggaraan Angkutan Umum Darat (harmonisasi PM 85/2018 dan PM 69/2018) meliputi...",
    "options": [
      "Penetapan Tanggung Jawab Keselamatan, Kebijakan Penyediaan Fasilitas Keselamatan, Kebijakan Pemeliharaan & Perawatan Sarana, serta Perencanaan & Kesiapsiagaan Tanggap Darurat",
      "Kenaikan Tarif Angkutan, Subsidi BBM, Pembebasan Pajak, dan Impor Armada",
      "Sertifikasi Pengemudi, Pembangunan Tol, Penghapusan Terminal, dan Privatisasi Stasiun",
      "Audit Keuangan, Rekrutmen Awak, Pemasaran Digital, dan Pengadaan Suku Cadang"
    ],
    "answer": 0,
    "points": 1,
    "explanation": "Keempat pilar kebijakan terpadu tersebut adalah: (1) Penetapan Tanggung Jawab Keselamatan, (2) Penyediaan Fasilitas Keselamatan, (3) Pemeliharaan & Perawatan Sarana, serta (4) Kesiapsiagaan Tanggap Darurat."
  },
  {
    "id": "KA-097",
    "question": "Apa tujuan kebijakan pemerintah menyediakan 'Shared Maintenance Hub' (bengkel dan pul terpadu) di terminal tipe A atau kawasan industri transportasi?",
    "options": [
      "Mengambil alih kepemilikan seluruh perusahaan otobus swasta",
      "Membantu operator angkutan umum skala kecil-menengah yang belum memiliki pul/bengkel mandiri agar tetap mampu memenuhi standar pemeliharaan dan keselamatan PM 85/2018",
      "Menggantikan fungsi uji berkala kendaraan bermotor (BLU-e)",
      "Menjadikan terminal sebagai pusat perbelanjaan"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Shared Maintenance Hub mengatasi disparitas kapasitas operator agar PO skala kecil-menengah tetap memiliki akses fasilitas perawatan terstandar."
  },
  {
    "id": "KA-098",
    "question": "Dalam skema terobosan kebijakan strategis 'Buy The Service (BTS) Berbasis Keselamatan', bagaimana mekanisme pembayaran subsidi rupiah per kilometer diterapkan?",
    "options": [
      "Dibayarkan di muka tanpa melihat kondisi teknis armada",
      "Dikaitkan secara langsung dengan kepatuhan pemeliharaan sarana dan pencapaian nihil kecelakaan fatal (zero fatal accident)",
      "Hanya diberikan kepada operator yang memiliki tarif termahal",
      "Dihitung berdasarkan jumlah pelanggaran batas kecepatan"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Skema BTS berbasis keselamatan mengaitkan pembayaran subsidi rupiah/km dengan kepatuhan pemeliharaan dan nihil kecelakaan fatal."
  },
  {
    "id": "KA-099",
    "question": "Apa tujuan dari terobosan kebijakan 'Pemeringkatan Bintang Keselamatan Publik (Operator Safety Rating)' pada portal Kementerian Perhubungan dan aplikasi pemesanan tiket?",
    "options": [
      "Menutup seluruh operator angkutan umum yang mendapatkan bintang tiga",
      "Mempublikasikan status kepatuhan SMK, riwayat uji berkala, dan rekam jejak keselamatan setiap operator secara transparan agar masyarakat dapat memilih layanan yang aman",
      "Menentukan besaran pajak penghasilan perusahaan otobus",
      "Menggantikan proses audit lapangan oleh inspektur dan auditor"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Operator Safety Rating memberikan transparansi publik atas rekam jejak keselamatan operator sehingga mendorong persaingan sehat berbasis keselamatan."
  },
  {
    "id": "KA-100",
    "question": "Dalam Peta Jalan Implementasi Kebijakan Keselamatan 18 bulan ke depan, apa fokus utama pada tahap 'Jangka Pendek (0–6 Bulan — Penertiban & Fondasi)'?",
    "options": [
      "Peluncuran sistem pemeringkatan bintang keselamatan operator secara terbuka",
      "Verifikasi ulang kelengkapan Dokumen SMK (PM 85/2018 & PM 69/2018), pembekuan sementara izin armada tanpa bukti uji berkala aktif, serta pemberlakuan wajib pre-trip checklist digital di terminal tipe A dan stasiun keberangkatan",
      "Evaluasi menyeluruh penurunan angka fatalitas sesuai target RUNK LLAJ",
      "Penggabungan seluruh BUMN transportasi menjadi satu perusahaan"
    ],
    "answer": 1,
    "points": 1,
    "explanation": "Jangka pendek (0–6 bulan) berfokus pada penertiban administrasi dokumen SMK, pembekuan sementara armada tanpa uji berkala aktif, dan penerapan pre-trip checklist digital."
  }
];

export default keretaApiBankSoal;
