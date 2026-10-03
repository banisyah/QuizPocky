// Daftar paket soal yang tampil di landing page. Tambah paket baru: buat file soal, lalu daftarkan di sini.
const QUIZZES = [
  {
    id: "emc2025",
    short: "EMC 2025 · Kelas 7",
    title: "EMC 2025 · Tingkat Kota",
    org: "Eduversal Mathematics Competition",
    level: "Kelas 7",
    desc: "Aljabar, geometri, peluang, dan teori bilangan dasar. Campuran pilihan ganda dan isian singkat.",
    mono: "EMC",
    questions: EMC_QUESTIONS,
  },
  {
    id: "iyslo2025",
    short: "IYSLO 2025 · Level 4",
    title: "IYSLO 2025 · Matematika Level 4",
    org: "Indonesian Youth Science and Language Olympiad",
    level: "Level 4 · SMP",
    desc: "Soal olimpiade: aljabar, teori bilangan, geometri, dan kombinatorika. Semua pilihan ganda.",
    mono: "IY",
    questions: IYSLO_QUESTIONS,
  },  {
    id: "iyslo-bi-2025",
    short: "IYSLO 2025 · B. Indonesia",
    title: "IYSLO 2025 · Bahasa Indonesia Level 4",
    org: "Indonesian Youth Science and Language Olympiad",
    level: "Level 4 · SMP",
    desc: "Pemahaman bacaan, kebahasaan (ejaan, kata baku, kalimat efektif), sastra, dan penalaran. Topik tiap nomor mengikuti naskah asli, teks dan kalimatnya sudah disunting.",
    mono: "BI",
    questions: BAHASA_QUESTIONS,
  },
];
