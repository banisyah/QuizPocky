// Latihan Bahasa Indonesia, mengacu pada naskah IYSLO 2025 Bahasa Indonesia Level 4.
// Topik dan jenis tiap nomor sengaja dibuat sama dengan naskah aslinya; kalimat, teks, dan pilihan jawaban sudah disunting.
// Posisi kunci jawaban dipertahankan sama dengan kunci resmi.

const P1 = {
  title: "Teks untuk soal nomor 1–5",
  html: `<p>Di banyak kota, trotoar masih dianggap hanya sebagai pelengkap jalan raya. Akibatnya, pembangunan jalur pejalan kaki sering dikalahkan oleh pelebaran jalan untuk kendaraan bermotor. Padahal, kenyamanan trotoar ikut memengaruhi keputusan warga untuk menempuh perjalanan jarak dekat. Trotoar yang terputus, berlubang, atau dipakai untuk lapak dan tempat parkir memaksa pejalan kaki berjalan di badan jalan sehingga risiko kecelakaan meningkat.</p>
    <p>Sebaliknya, trotoar yang bersambung, teduh, mudah dijangkau, dan terhubung dengan halte dapat mendorong warga berjalan kaki atau naik angkutan umum. Dengan kata lain, upaya mengurangi kebiasaan memakai kendaraan pribadi tidak cukup hanya dengan menambah jumlah armada angkutan umum. Pemerintah kota juga harus memastikan bahwa perjalanan menuju dan dari halte aman serta nyaman.</p>`,
};

const P2 = {
  title: "Teks untuk soal nomor 6–8",
  html: `<p>Saat hujan turun, sebagian air terserap ke dalam tanah. Akan tetapi, di kawasan yang banyak ditutupi beton dan aspal, penyerapan itu berkurang karena permukaan tanahnya sulit ditembus air. Akibatnya, air hujan lebih banyak mengalir di permukaan. Jika saluran drainase tidak sanggup menampung aliran tersebut, genangan, bahkan banjir, dapat terjadi. Oleh karena itu, taman, tanah terbuka, dan daerah resapan berperan penting dalam pengelolaan air di perkotaan.</p>`,
};

const P3 = {
  title: "Teks untuk soal nomor 14–18 (kutipan cerpen)",
  html: `<p>Sejak pagi, Arga beberapa kali memandangi sepeda tua yang disandarkan di dinding belakang rumah. Catnya yang biru sudah mengelupas dan rantainya sesekali lepas, tetapi sepeda itu selalu dipakai ayahnya berangkat kerja.</p>
    <p>Sore itu, Arga pulang membawa selembar brosur lomba fotografi. Hadiah pertamanya cukup untuk membeli kamera yang sudah lama ia dambakan. Sebenarnya ia sudah memiliki sebuah foto yang menurut gurunya sangat bagus. Namun, ketika membaca syarat bahwa peserta wajib mengirimkan foto cetak berukuran besar, Arga terdiam. Ongkos mencetak foto itu hampir sama dengan biaya memperbaiki sepeda ayahnya.</p>
    <p>Malam harinya, ayah pulang sambil menuntun sepeda.</p>
    <p>“Rantainya putus lagi,” kata ayah sambil tersenyum tipis.</p>
    <p>Arga melipat brosur itu lalu menyelipkannya ke dalam tas.</p>
    <p>“Besok kita ke bengkel, Yah.”</p>`,
};

const P4 = {
  title: "Teks untuk soal nomor 19–21 (puisi)",
  html: `<p><b>PAGI DI JENDELA</b></p>
    <p class="poem">Fajar menyapa jendela kamarku<br>membawa terang di genggamannya<br>semalam gelap menyimpan banyak resah<br>kini jalan menemukan warnanya kembali</p>`,
};

const BAHASA_QUESTIONS = [
  /* 1 */ {
    type: "mc", passage: P1.html, passageTitle: P1.title,
    q: `Gagasan utama teks tersebut adalah ....`,
    opts: [
      "Pelebaran jalan adalah penyebab utama kemacetan di kota.",
      "Warga lebih menyukai kendaraan pribadi daripada berjalan kaki.",
      "Mutu fasilitas pejalan kaki ikut menentukan pilihan warga dalam bertransportasi.",
      "Pembangunan halte sebaiknya didahulukan daripada pembangunan jalan.",
    ],
    ans: "C",
    hint: `Gagasan utama adalah inti yang mencakup seluruh isi teks.<br>
      Paragraf 1: trotoar yang buruk membuat orang enggan berjalan. Paragraf 2: trotoar yang baik mendorong orang berjalan atau naik angkutan umum. Keduanya menunjukkan bahwa <b>mutu fasilitas pejalan kaki memengaruhi pilihan transportasi warga</b>.<br>
      Tiga pilihan lainnya tidak dinyatakan sebagai inti teks.`,
  },
  /* 2 */ {
    type: "mc", passage: P1.html, passageTitle: P1.title,
    q: `Informasi yang secara tersurat terdapat dalam teks adalah ....`,
    opts: [
      "Warga akan segera meninggalkan kendaraan pribadi setelah trotoar diperbaiki.",
      "Trotoar yang tidak layak dapat membuat pejalan kaki terpaksa berjalan di badan jalan.",
      "Semua pemerintah kota lebih mengutamakan pembangunan jalan bagi kendaraan bermotor.",
      "Penambahan angkutan umum sama sekali tidak bermanfaat bagi warga.",
    ],
    ans: "B",
    hint: `Tersurat artinya tertulis langsung di teks. Paragraf 1 menyebut trotoar yang terputus, berlubang, atau dipakai lapak "memaksa pejalan kaki berjalan di badan jalan" &rarr; itulah informasi yang tersurat.<br>
      Pilihan tentang warga yang "segera" meninggalkan kendaraan pribadi tidak ada di teks. Pilihan tentang "semua pemerintah kota" berlebihan karena teks hanya menyebut "banyak kota". Pilihan "sama sekali tidak bermanfaat" ekstrem karena teks hanya menyebut menambah armada saja tidak cukup.`,
  },
  /* 3 */ {
    type: "mc", passage: P1.html, passageTitle: P1.title,
    q: `Berdasarkan teks, dapat disimpulkan bahwa keberhasilan penggunaan angkutan umum juga ditentukan oleh ....`,
    opts: [
      "harga kendaraan pribadi yang semakin mahal",
      "banyaknya jalan raya yang dibangun di perkotaan",
      "mudahnya warga menjangkau layanan angkutan umum",
      "larangan total bagi kendaraan bermotor",
    ],
    ans: "C",
    hint: `Paragraf 2 menyebut trotoar yang "mudah dijangkau" dan terhubung dengan halte mendorong warga naik angkutan umum, serta perjalanan menuju dan dari halte harus aman dan nyaman.<br>
      Jadi kuncinya adalah <b>kemudahan warga menjangkau layanan</b>. Harga kendaraan, jumlah jalan, dan larangan total tidak dibahas dalam teks.`,
  },
  /* 4 */ {
    type: "mc", passage: P1.html, passageTitle: P1.title,
    q: `Pernyataan berikut yang merupakan informasi tersirat dalam teks adalah ....`,
    opts: [
      "Trotoar boleh dijadikan tempat parkir pada keadaan tertentu.",
      "Kendaraan bermotor merupakan satu-satunya penyebab kecelakaan.",
      "Fasilitas angkutan umum perlu dirancang sebagai sistem yang saling terhubung.",
      "Warga pada dasarnya tidak menyukai kegiatan berjalan kaki.",
    ],
    ans: "C",
    hint: `Tersirat artinya tidak ditulis langsung, tetapi dapat dipahami dari isi teks.<br>
      Teks membahas trotoar, halte, dan armada angkutan yang harus saling menunjang ("perjalanan menuju dan dari halte"), sehingga tersirat bahwa fasilitas angkutan umum harus dirancang <b>sebagai sistem yang saling terhubung</b>.<br>
      Pilihan yang membolehkan trotoar dipakai parkir bertentangan dengan teks, sedangkan dua pilihan lainnya tidak didukung teks.`,
  },
  /* 5 */ {
    type: "mc", passage: P1.html, passageTitle: P1.title,
    q: `Makna kata “terhubung” pada frasa “trotoar yang terhubung dengan halte” adalah ....`,
    opts: [
      "berada tepat di dalam area halte",
      "memiliki jalur yang memudahkan warga menuju halte",
      "dibangun pada waktu yang sama dengan halte",
      "hanya boleh dilewati penumpang angkutan umum",
    ],
    ans: "B",
    hint: `Pahami makna kata dari konteksnya. Trotoar yang terhubung dengan halte "mendorong warga berjalan kaki atau naik angkutan umum", dan perjalanan menuju halte harus aman dan nyaman.<br>
      Artinya ada <b>jalur yang menyambung dan memudahkan warga mencapai halte</b>.`,
  },
  /* 6 */ {
    type: "mc", passage: P2.html, passageTitle: P2.title,
    q: `Berdasarkan isi dan pola pengembangannya, teks tersebut termasuk teks ....`,
    opts: [
      "deskripsi, karena melukiskan keadaan kota secara rinci",
      "narasi, karena menceritakan kejadian secara berurutan menurut waktu",
      "eksplanasi, karena menjelaskan proses serta hubungan sebab-akibat suatu fenomena",
      "persuasi, karena mengajak pembaca membuat taman secara langsung",
    ],
    ans: "C",
    hint: `Teks ini menjelaskan <b>proses</b> (air hujan terserap atau mengalir) dan <b>sebab-akibat</b> (permukaan tertutup &rarr; air mengalir &rarr; genangan atau banjir). Itulah ciri teks eksplanasi.<br>
      Tidak ada cerita berurutan waktu (narasi), tidak sekadar melukiskan (deskripsi), dan tidak ada ajakan langsung (persuasi).`,
  },
  /* 7 */ {
    type: "mc", passage: P2.html, passageTitle: P2.title,
    q: `Kalimat “Akibatnya, air hujan lebih banyak mengalir di permukaan” berfungsi untuk ....`,
    opts: [
      "memperkenalkan fenomena utama yang akan dibahas",
      "menunjukkan akibat dari keadaan yang dijelaskan sebelumnya",
      "memberi contoh penggunaan lahan perkotaan",
      "menyangkal isi kalimat sebelumnya",
    ],
    ans: "B",
    hint: `Kata penghubung "Akibatnya" menandai hubungan sebab-akibat. Kalimat sebelumnya menyebut penyerapan berkurang karena tanah tertutup, dan kalimat ini menyebut <b>akibat</b>-nya: air lebih banyak mengalir di permukaan.`,
  },
  /* 8 */ {
    type: "mc", passage: P2.html, passageTitle: P2.title,
    q: `Jika kalimat terakhir dihapus, perubahan utama pada susunan teks adalah ....`,
    opts: [
      "teks tidak lagi menyebutkan penyebab banjir",
      "hubungan antarkalimat menjadi tidak logis sama sekali",
      "teks kehilangan bagian yang menegaskan implikasi dari penjelasan sebelumnya",
      "teks berubah dari eksplanasi menjadi narasi",
    ],
    ans: "C",
    hint: `Kalimat terakhir ("Oleh karena itu, taman, tanah terbuka, ...") adalah <b>simpulan atau implikasi</b> dari uraian sebelumnya.<br>
      Jika dihapus, penjelasan penyebab banjir tetap ada, kalimat lain tetap logis, dan jenis teks tetap eksplanasi. Yang hilang hanyalah penegasan implikasinya.`,
  },
  /* 9 */ {
    type: "mc",
    q: `Kalimat yang paling efektif adalah ....`,
    opts: [
      "Para peserta-peserta diminta untuk segera mengisi formulir masing-masing.",
      "Para peserta diminta segera mengisi formulir masing-masing.",
      "Peserta-peserta diminta agar supaya segera mengisi formulirnya.",
      "Kepada para peserta dimohon untuk dapat segera mengisi formulirnya.",
    ],
    ans: "B",
    hint: `Kalimat efektif hemat kata, tidak berlebihan (pleonasme), dan jelas subjeknya.<br>
      Kalimat yang memakai "para" sekaligus "peserta-peserta" berlebihan karena keduanya sama-sama menyatakan jamak. Kalimat yang memakai "agar supaya" juga berlebihan (pleonasme). Kalimat yang diawali "Kepada" tidak memiliki subjek.<br>
      Kalimat yang benar singkat, jelas, dan bersubjek.`,
  },
  /* 10 */ {
    type: "mc",
    q: `Perhatikan kalimat berikut!<br><br>Setelah memeriksa hasil percobaan itu Dewi berkata “Hasil ini belum cukup untuk membuktikan dugaan kita”.<br><br>Perbaikan tanda baca yang paling tepat adalah ....`,
    opts: [
      "Setelah memeriksa hasil percobaan itu Dewi berkata, “Hasil ini belum cukup untuk membuktikan dugaan kita.”",
      "Setelah memeriksa hasil percobaan itu, Dewi berkata “Hasil ini belum cukup untuk membuktikan dugaan kita”.",
      "Setelah memeriksa hasil percobaan itu, Dewi berkata, “Hasil ini belum cukup untuk membuktikan dugaan kita.”",
      "Setelah memeriksa hasil percobaan itu; Dewi berkata, “Hasil ini belum cukup untuk membuktikan dugaan kita.”",
    ],
    ans: "C",
    hint: `Tiga aturan sekaligus:<br>
      1) Anak kalimat yang mendahului induk kalimat dipisah koma: "Setelah memeriksa hasil percobaan itu<b>,</b> Dewi ...".<br>
      2) Sebelum kutipan langsung diberi koma: "Dewi berkata<b>,</b> “...".<br>
      3) Tanda titik pada akhir kutipan langsung diletakkan <b>di dalam</b> tanda petik penutup: “... kita.<b>”</b><br>
      Hanya satu pilihan yang memenuhi ketiganya.`,
  },
  /* 11 */ {
    type: "mc",
    q: `Kata baku digunakan secara tepat dalam kalimat ....`,
    opts: [
      "Pengurus akan merubah jadwal kegiatan sesuai keadaan.",
      "Tim sedang menganalisa data hasil survei.",
      "Kepala sekolah memberikan izin kepada siswa untuk mengikuti kegiatan itu.",
      "Pengurus diminta mengkoordinir seluruh kegiatan.",
    ],
    ans: "C",
    hint: `Bentuk baku yang benar:<br>
      &bull; <i>merubah</i> &rarr; <b>mengubah</b> (kata dasar "ubah")<br>
      &bull; <i>menganalisa</i> &rarr; <b>menganalisis</b><br>
      &bull; <i>mengkoordinir</i> &rarr; <b>mengoordinasi(kan)</b><br>
      &bull; <b>izin</b> sudah baku (bukan "ijin").<br>
      Hanya satu kalimat yang seluruh katanya baku.`,
  },
  /* 12 */ {
    type: "mc",
    q: `Perhatikan kalimat berikut!<br><br>Petugas memeriksa penumpang dengan senter.<br><br>Kalimat tersebut ambigu. Jika yang dimaksud adalah petugas menggunakan senter untuk memeriksa penumpang, perbaikan yang paling tepat adalah ....`,
    opts: [
      "Dengan penumpang, petugas memeriksa senter.",
      "Petugas dengan senter memeriksa penumpang.",
      "Dengan menggunakan senter, petugas memeriksa penumpang.",
      "Penumpang memeriksa petugas menggunakan senter.",
    ],
    ans: "C",
    hint: `Kalimat asli ambigu: "dengan senter" bisa menerangkan <i>cara memeriksa</i> atau <i>penumpang yang membawa senter</i>.<br>
      Agar jelas bahwa senter adalah alat, tempatkan di awal dengan kata "menggunakan": "<b>Dengan menggunakan senter</b>, petugas memeriksa penumpang."<br>
      Kalimat "Petugas dengan senter memeriksa penumpang" masih bisa bermakna ganda, sedangkan dua pilihan lainnya mengubah makna.`,
  },
  /* 13 */ {
    type: "mc",
    q: `Perhatikan kalimat berikut!<br><br>Dimas tetap berangkat ke sekolah _____ badannya masih terasa kurang sehat.<br><br>Konjungsi yang paling tepat untuk melengkapi kalimat tersebut adalah ....`,
    opts: ["Sehingga", "Sebab", "Meskipun", "Agar"],
    ans: "C",
    hint: `Isi kalimat berisi pertentangan: tetap berangkat <i>padahal</i> badan kurang sehat. Konjungsi yang menyatakan pertentangan atau konsesi adalah <b>meskipun</b>.<br>
      "Sehingga" menyatakan akibat, "sebab" menyatakan alasan, "agar" menyatakan tujuan.`,
  },
  /* 14 */ {
    type: "mc", passage: P3.html, passageTitle: P3.title,
    q: `Konflik utama yang dialami Arga adalah ....`,
    opts: [
      "menimbang antara ikut lomba dan menolong memperbaiki sepeda ayah",
      "memutuskan perlu tidaknya mengganti sepeda lama dengan yang baru",
      "meyakinkan gurunya bahwa fotonya pantas dilombakan",
      "meminta ayah membayar ongkos cetak fotonya",
    ],
    ans: "A",
    hint: `Konflik batin Arga muncul ketika ongkos cetak foto lomba hampir sama dengan biaya memperbaiki sepeda ayahnya. Ia harus memilih antara <b>keinginannya ikut lomba</b> dan <b>kebutuhan ayahnya</b>.`,
  },
  /* 15 */ {
    type: "mc", passage: P3.html, passageTitle: P3.title,
    q: `Watak Arga yang paling kuat ditunjukkan pada bagian akhir cerita adalah ....`,
    opts: ["ambisius", "keras kepala", "peduli", "ceroboh"],
    ans: "C",
    hint: `Di akhir cerita Arga menyimpan brosur lomba dan menawarkan diri membawa sepeda ayah ke bengkel. Sikap itu menunjukkan ia <b>peduli</b> pada ayahnya, bukan ambisius atau keras kepala.`,
  },
  /* 16 */ {
    type: "mc", passage: P3.html, passageTitle: P3.title,
    q: `Kalimat “Arga melipat brosur itu lalu menyelipkannya ke dalam tas” terutama berfungsi untuk ....`,
    opts: [
      "menunjukkan bahwa Arga tidak paham syarat lomba",
      "menyiratkan keputusan Arga tanpa menyebutkannya secara terang-terangan",
      "menunjukkan bahwa lomba fotografi itu dibatalkan",
      "menjelaskan bahwa Arga kecewa kepada gurunya",
    ],
    ans: "B",
    hint: `Pengarang tidak menulis "Arga memutuskan tidak ikut lomba", tetapi menunjukkannya lewat tindakan: brosur dilipat dan disimpan. Ini teknik <i>show, don't tell</i> yang <b>menyiratkan keputusan</b> Arga.`,
  },
  /* 17 */ {
    type: "mc", passage: P3.html, passageTitle: P3.title,
    q: `Amanat yang paling sesuai dengan keseluruhan cerita adalah ....`,
    opts: [
      "Keinginan pribadi selalu harus dikorbankan demi keluarga.",
      "Keberhasilan hanya bisa diraih melalui pengorbanan materi.",
      "Kepedulian membuat seseorang mempertimbangkan kepentingan orang lain saat mengambil keputusan.",
      "Sebaiknya seseorang tidak ikut lomba jika membutuhkan biaya.",
    ],
    ans: "C",
    hint: `Amanat harus sesuai seluruh cerita tanpa berlebihan. Arga memilih membantu ayahnya karena peduli, jadi amanatnya: <b>kepedulian membuat kita mempertimbangkan kepentingan orang lain</b>.<br>
      Pilihan yang memakai kata "selalu" terlalu mutlak, dan dua pilihan lainnya tidak punya dasar di cerita.`,
  },
  /* 18 */ {
    type: "mc", passage: P3.html, passageTitle: P3.title,
    q: `Judul yang paling mampu mewakili konflik sekaligus makna cerita tersebut adalah ....`,
    opts: ["Kamera Impian", "Sepeda Biru", "Brosur yang Terlipat", "Hari Lomba Foto"],
    ans: "C",
    hint: `Judul yang baik mewakili konflik dan makna cerita. "Brosur yang Terlipat" melambangkan keputusan Arga melepas keinginannya demi ayah. Judul lain hanya menyebut sebagian unsur cerita (kamera, sepeda, lomba).`,
  },
  /* 19 */ {
    type: "mc", passage: P4.html, passageTitle: P4.title,
    q: `Larik “Fajar menyapa jendela kamarku” menggunakan majas ....`,
    opts: ["Hiperbola", "Personifikasi", "Ironi", "Metonimia"],
    ans: "B",
    hint: `Fajar adalah benda alam, tetapi digambarkan <i>menyapa</i> seperti manusia. Memberi sifat atau perbuatan manusia pada benda mati disebut <b>personifikasi</b>.`,
  },
  /* 20 */ {
    type: "mc", passage: P4.html, passageTitle: P4.title,
    q: `Makna keseluruhan puisi tersebut paling dekat dengan ....`,
    opts: [
      "perubahan dari kegelisahan menuju munculnya harapan",
      "rasa takut seseorang menghadapi pagi hari",
      "keinginan seseorang meninggalkan rumah pagi-pagi",
      "penyesalan karena malam berlalu terlalu cepat",
    ],
    ans: "A",
    hint: `Larik awal: malam yang gelap "menyimpan banyak resah". Larik akhir: pagi membawa terang dan jalan "menemukan warnanya kembali". Maknanya: <b>peralihan dari kegelisahan menuju harapan</b>.`,
  },
  /* 21 */ {
    type: "mc", passage: P4.html, passageTitle: P4.title,
    q: `Larik “kini jalan menemukan warnanya kembali” dapat ditafsirkan sebagai ....`,
    opts: [
      "jalan yang dicat ulang di pagi hari",
      "perubahan cuaca setelah malam",
      "hadirnya kembali arah dan harapan setelah masa sulit",
      "bertambahnya kegiatan warga di jalan raya",
    ],
    ans: "C",
    hint: `Larik ini bermakna kias. "Jalan" melambangkan arah hidup dan "warna" melambangkan semangat atau harapan. Setelah masa gelap (resah), arah dan harapan <b>hadir kembali</b>.`,
  },
  /* 22 */ {
    type: "mc",
    q: `Perhatikan dua pernyataan berikut!<br><br><b>Pernyataan I:</b><br>“Gawai di sekolah harus dilarang karena gawai pasti mengganggu pelajaran.”<br><br><b>Pernyataan II:</b><br>“Penggunaan gawai di sekolah perlu diatur sesuai tujuannya karena alat itu bisa menjadi sumber gangguan sekaligus sarana belajar.”<br><br>Pernyataan II menunjukkan penalaran yang lebih kuat karena ....`,
    opts: [
      "menggunakan kalimat yang lebih panjang",
      "tidak mengandung pendapat apa pun",
      "mempertimbangkan lebih dari satu kemungkinan fungsi gawai",
      "menyatakan bahwa penggunaan gawai selalu bermanfaat",
    ],
    ans: "C",
    hint: `Penalaran yang kuat tidak menggeneralisasi berlebihan. Pernyataan I memakai kata mutlak ("pasti"), sedangkan Pernyataan II menimbang <b>dua kemungkinan fungsi</b> (gangguan dan sarana belajar) lalu memberi solusi (diatur).<br>
      Panjang kalimat tidak menentukan kekuatan penalaran, dan II tetap mengandung pendapat.`,
  },
  /* 23 */ {
    type: "mc",
    q: `Perhatikan pernyataan berikut!<br><br>Sejak sekolah memasang lebih banyak tempat sampah terpilah, jumlah sampah berserakan di halaman menurun. Dengan demikian, tempat sampah terpilah pasti menjadi satu-satunya penyebab bersihnya halaman sekolah.<br><br>Kelemahan penalaran pada pernyataan tersebut adalah ....`,
    opts: [
      "simpulan tidak membahas sampah sama sekali",
      "dua peristiwa yang berurutan langsung dianggap berhubungan sebab-akibat yang pasti",
      "penulis tidak menjelaskan arti tempat sampah terpilah",
      "simpulan sepenuhnya bertentangan dengan informasi sebelumnya",
    ],
    ans: "B",
    hint: `Ini kesalahan nalar <i>post hoc</i>: karena satu kejadian terjadi setelah kejadian lain, langsung disimpulkan yang pertama adalah penyebab pasti dan satu-satunya. Mungkin ada faktor lain (petugas kebersihan, kampanye siswa, dll.).`,
  },
  /* 24 */ {
    type: "mc",
    q: `Perhatikan pernyataan dalam iklan berikut!<br><br>“Susu Y diminum oleh banyak atlet juara. Minumlah Y setiap hari agar kamu juga menjadi juara!”<br><br>Penilaian paling kritis terhadap pernyataan tersebut adalah ....`,
    opts: [
      "Klaim tersebut pasti benar karena banyak atlet juara yang meminumnya.",
      "Kemenangan atlet tidak dapat langsung dianggap akibat minum produk itu tanpa bukti yang memadai.",
      "Semua informasi dalam iklan pada dasarnya tidak dapat dipercaya.",
      "Minuman tidak mungkin berhubungan dengan kondisi tubuh seseorang.",
    ],
    ans: "B",
    hint: `Kritis berarti menguji hubungan sebab-akibat. Atlet juara meminum produk itu belum membuktikan bahwa produk itulah penyebab kemenangannya (korelasi bukan sebab-akibat). Perlu <b>bukti yang memadai</b>.<br>
      Pilihan yang langsung percaya terlalu naif, sedangkan pilihan yang menolak semua iklan atau semua hubungan terlalu ekstrem.`,
  },
  /* 25 */ {
    type: "mc",
    q: `Perhatikan paragraf berikut!<br><br>Ruang baca sekolah kini dibuka sampai sore hari. Selama dua bulan terakhir, jumlah pengunjung setelah jam pelajaran bertambah. Sebagian siswa memakai waktu itu untuk menyelesaikan tugas kelompok, sedangkan sebagian lainnya membaca buku atau mengakses bahan bacaan digital. Berdasarkan keadaan tersebut, sekolah berencana menambah ruang belajar bersama.<br><br>Simpulan yang paling logis dan tidak melampaui informasi dalam teks adalah ....`,
    opts: [
      "Seluruh siswa lebih senang belajar di sekolah daripada di rumah.",
      "Perpanjangan jam buka membuat nilai siswa naik.",
      "Layanan ruang baca setelah jam sekolah dimanfaatkan siswa untuk beberapa kegiatan belajar.",
      "Bahan bacaan digital menjadi alasan utama bertambahnya pengunjung.",
    ],
    ans: "C",
    hint: `Simpulan yang aman hanya memakai informasi yang ada: siswa memanfaatkan ruang baca setelah jam sekolah untuk tugas kelompok dan membaca (beberapa kegiatan belajar).<br>
      Pilihan "seluruh siswa", "nilai naik", dan "alasan utama" <b>melampaui</b> informasi teks.`,
  },
];
