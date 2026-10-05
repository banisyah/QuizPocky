// Daftar paket soal yang tampil di landing page.
// Setiap paket punya satu atau lebih "versi". Versi berbeda menguji topik yang sama per nomor,
// dengan teks/kalimat berbeda. shuffle: true = urutan pilihan jawaban diacak tiap kali quiz dimulai.
const QUIZZES = [
  {
    id: "emc2025",
    short: "EMC · Kelas 7",
    title: "EMC · Kelas 7 (2025 & 2024)",
    org: "Eduversal Mathematics Competition",
    level: "Kelas 7",
    desc: "Aljabar, geometri, peluang, dan teori bilangan dasar untuk kelas 7. Campuran pilihan ganda dan isian singkat. Ada 2 paket: EMC 2025 dan EMC 2024.",
    mono: "EMC",
    mix: false,   // versi berbeda bukan pasangan topik per nomor, jadi tidak ada mode Acak
    versionNote: "Versi 1 berisi soal EMC 2025 Tingkat Kota. Versi 2 berisi soal EMC 2024 Babak Penyisihan (beberapa soal yang kuncinya meragukan tidak dimasukkan).",
    versions: [
      { id: "1", tag: "EMC 2025 · Tingkat Kota", questions: EMC_QUESTIONS },
      { id: "2", tag: "EMC 2024 · Penyisihan", questions: EMC24_QUESTIONS },
    ],
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
    versionNote: "Topik tiap nomor sama di semua versi, hanya teks dan kalimatnya yang berbeda.",
    versions: [
      { id: "1", questions: BAHASA_QUESTIONS },
      { id: "2", questions: BAHASA_V2 },
      { id: "3", questions: BAHASA_V3 },
    ],
  },
];
