// Daftar paket soal yang tampil di landing page.
// Setiap paket punya satu atau lebih "versi". Versi berbeda menguji topik yang sama per nomor,
// dengan teks/kalimat berbeda. shuffle: true = urutan pilihan jawaban diacak tiap kali quiz dimulai.
const QUIZZES = [
  {
    id: "emc2025",
    short: "EMC · Kelas 7",
    title: "EMC · Kelas 7",
    org: "Eduversal Mathematics Competition",
    level: "Kelas 7",
    desc: "Aljabar, geometri, peluang, dan teori bilangan dasar untuk kelas 7. Campuran pilihan ganda dan isian singkat. Ada 3 paket: EMC 2025 Tingkat Kota, EMC 2024 Penyisihan, dan EMC 2025 Tingkat Provinsi.",
    mono: "EMC",
    timed: true,  // timer 3 menit per soal (tanpa konsekuensi) + total timer
    mix: false,   // versi berbeda bukan pasangan topik per nomor, jadi tidak ada mode Acak
    versionNote: "Tiap versi adalah paket soal EMC yang berbeda (bukan pasangan topik per nomor). Soal yang kuncinya meragukan tidak dimasukkan.",
    versions: [
      { id: "1", tag: "EMC 2025 · Tingkat Kota", questions: EMC_QUESTIONS },
      { id: "2", tag: "EMC 2024 · Penyisihan", questions: EMC24_QUESTIONS },
      { id: "3", tag: "EMC 2025 · Provinsi", questions: EMCPV_QUESTIONS },
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
    timed: true,
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
