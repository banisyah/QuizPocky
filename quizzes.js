// Daftar paket soal yang tampil di landing page.
// Setiap paket punya satu atau lebih "versi". Versi berbeda menguji topik yang sama per nomor,
// dengan teks/kalimat berbeda. shuffle: true = urutan pilihan jawaban diacak tiap kali quiz dimulai.
const QUIZZES = [
  {
    id: "emc2025",
    short: "EMC 2025 · Kelas 7",
    title: "EMC 2025 · Tingkat Kota",
    org: "Eduversal Mathematics Competition",
    level: "Kelas 7",
    desc: "Aljabar, geometri, peluang, dan teori bilangan dasar. Campuran pilihan ganda dan isian singkat.",
    mono: "EMC",
    versions: [{ id: "1", questions: EMC_QUESTIONS }],
  },
  {
    id: "iyslo2025",
    short: "IYSLO 2025 · Level 4",
    title: "IYSLO 2025 · Matematika Level 4",
    org: "Indonesian Youth Science and Language Olympiad",
    level: "Level 4 · SMP",
    desc: "Soal olimpiade: aljabar, teori bilangan, geometri, dan kombinatorika. Semua pilihan ganda.",
    mono: "IY",
    versions: [{ id: "1", questions: IYSLO_QUESTIONS }],
  },
  {
    id: "iyslo-bi-2025",
    short: "IYSLO 2025 · B. Indonesia",
    title: "IYSLO 2025 · Bahasa Indonesia Level 4",
    org: "Indonesian Youth Science and Language Olympiad",
    level: "Level 4 · SMP",
    desc: "Pemahaman bacaan, kebahasaan (ejaan, kata baku, kalimat efektif), sastra, dan penalaran. Ada 3 versi dengan topik tiap nomor yang sama.",
    mono: "BI",
    shuffle: true,
    versions: [
      { id: "1", questions: BAHASA_QUESTIONS },
      { id: "2", questions: BAHASA_V2 },
      { id: "3", questions: BAHASA_V3 },
    ],
  },
];
