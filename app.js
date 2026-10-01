const app = document.getElementById("app");
const modal = document.getElementById("modal");
const LETTERS = ["A", "B", "C", "D"];

let i = 0;          // nomor soal aktif (0-based)
let answers = [];   // jawaban user per soal
let locked = false; // soal aktif sudah dijawab?
let hintOpen = false;

const $ = (s, el = app) => el.querySelector(s);
const typeset = (el = document.body) =>
  window.renderMathInElement && renderMathInElement(el, {
    delimiters: [{ left: "$", right: "$", display: false }],
    throwOnError: false,
  });

const norm = (v) => String(v ?? "").trim().replace(",", ".").replace(/^0+(?=\d)/, "");
const isCorrect = (q, a) => norm(a) !== "" && norm(a).toUpperCase() === norm(q.ans).toUpperCase();
const answerText = (q, a) => q.type === "mc" ? `${a}. ${q.opts[LETTERS.indexOf(a)] ?? ""}` : a;

function start() {
  i = 0; answers = []; locked = false; hintOpen = false;
  app.innerHTML = `
    <section class="card center">
      <h1>🧮 QuizPocky</h1>
      <p class="muted">Latihan soal Eduversal Mathematics Competition (EMC) 2025<br>Tingkat Kota · Kelas 7</p>
      <p>${QUESTIONS.length} soal · 💡 ada hint & cara pengerjaan di tiap nomor</p>
      <button class="primary" id="go">Mulai Quiz</button>
    </section>`;
  $("#go").onclick = showQuestion;
}

function showQuestion() {
  const q = QUESTIONS[i];
  locked = false; hintOpen = false;
  const pct = (i / QUESTIONS.length) * 100;
  app.innerHTML = `
    <div class="progress"><div style="width:${pct}%"></div></div>
    <section class="card">
      <div class="qhead">
        <span class="badge">Soal ${i + 1} / ${QUESTIONS.length}</span>
        <span class="muted">${q.type === "mc" ? "Pilihan ganda" : "Isian singkat"}</span>
      </div>
      <div class="qtext">${q.q}</div>
      ${q.type === "mc"
        ? `<div class="opts">${q.opts.map((o, k) => `
            <button class="opt" data-k="${LETTERS[k]}"><span class="letter">${LETTERS[k]}</span><span>${o}</span></button>`).join("")}</div>`
        : `<input class="num" id="num" inputmode="decimal" autocomplete="off" placeholder="Ketik jawabanmu (angka)">`}
      <div class="actions">
        <button class="hint" id="hint">💡 Hint</button>
        <span class="spacer"></span>
        <button class="primary" id="submit" disabled>Jawab</button>
      </div>
      <div id="sol"></div>
    </section>`;

  const submit = $("#submit");
  if (q.type === "mc") {
    app.querySelectorAll(".opt").forEach((b) => (b.onclick = () => {
      if (locked) return;
      app.querySelectorAll(".opt").forEach((x) => x.classList.remove("selected"));
      b.classList.add("selected");
      answers[i] = b.dataset.k;
      submit.disabled = false;
    }));
  } else {
    const inp = $("#num");
    inp.oninput = () => { answers[i] = inp.value; submit.disabled = norm(inp.value) === ""; };
    inp.onkeydown = (e) => { if (e.key === "Enter" && !submit.disabled) submit.click(); };
    inp.focus();
  }
  submit.onclick = submitAnswer;
  $("#hint").onclick = toggleHint;
  typeset(app);
}

function toggleHint() {
  hintOpen = !hintOpen;
  renderSolution();
}
function renderSolution() {
  const q = QUESTIONS[i];
  $("#sol").innerHTML = hintOpen
    ? `<div class="solution"><b class="t">Cara mengerjakan</b>${q.hint}</div>` : "";
  typeset($("#sol"));
}

function submitAnswer() {
  const q = QUESTIONS[i];
  locked = true;
  const ok = isCorrect(q, answers[i]);
  $("#submit").disabled = true;
  if (q.type === "mc") {
    app.querySelectorAll(".opt").forEach((b) => {
      b.disabled = true;
      if (b.dataset.k === answers[i]) b.classList.add(ok ? "correct" : "wrong");
    });
  } else $("#num").disabled = true;

  const last = i === QUESTIONS.length - 1;
  const label = last ? "Lihat Hasil" : "Soal Berikutnya";
  showModal(ok
    ? { cls: "ok", icon: "✅", title: "Benar!", msg: "Mantap, jawabanmu tepat." , label }
    : { cls: "bad", icon: "❌", title: "Belum tepat", msg: "Jawabanmu salah. Cek hasil di akhir quiz ya.", label });
}

function showModal({ cls, icon, title, msg, label }) {
  modal.querySelector(".modal-box").className = "modal-box " + cls;
  modal.querySelector(".modal-box").innerHTML = `
    <div class="icon">${icon}</div><h3>${title}</h3><p class="muted">${msg}</p>
    <button class="primary" id="next">${label}</button>`;
  modal.classList.remove("hidden");
  const next = modal.querySelector("#next");
  next.focus();
  next.onclick = () => {
    modal.classList.add("hidden");
    if (i === QUESTIONS.length - 1) showResult();
    else { i++; showQuestion(); }
  };
}

function showResult() {
  const wrong = [];
  QUESTIONS.forEach((q, k) => { if (!isCorrect(q, answers[k])) wrong.push(k); });
  const total = QUESTIONS.length, right = total - wrong.length;
  const pct = Math.round((right / total) * 100);

  app.innerHTML = `
    <section class="card center">
      <h2>Hasil Quiz</h2>
      <div class="score">${right}/${total}</div>
      <div class="muted">Skor ${pct}%</div>
      <div class="stats">
        <div class="stat ok"><b>${right}</b>Benar</div>
        <div class="stat bad"><b>${wrong.length}</b>Salah</div>
      </div>
      ${wrong.length
        ? `<div><b>Nomor yang salah:</b><div class="pills" style="justify-content:center">${wrong.map((k) => `<span class="pill">${k + 1}</span>`).join("")}</div></div>`
        : `<p><b>🎉 Sempurna! Semua jawaban benar.</b></p>`}
      <div class="actions" style="justify-content:center"><button class="primary" id="retry">🔁 Ulangi Quiz</button></div>
    </section>
    ${wrong.length ? `<section class="card"><h2>Jawaban yang benar</h2>${wrong.map(reviewItem).join("")}</section>` : ""}`;
  $("#retry").onclick = start;
  typeset(app);
  window.scrollTo(0, 0);
}

function reviewItem(k) {
  const q = QUESTIONS[k], a = answers[k];
  return `
    <div class="review-item">
      <b>Soal ${k + 1}</b>
      <div class="row">
        <span class="tag you">Jawabanmu: ${a ? answerText(q, a) : "(kosong)"}</span>
        <span class="tag key">Seharusnya: ${answerText(q, q.ans)}</span>
      </div>
      <details><summary>Lihat cara pengerjaan</summary>
        <div class="solution">${q.hint}</div>
      </details>
    </div>`;
}

start();
