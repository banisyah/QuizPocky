const app = document.getElementById("app");
const sheetBg = document.getElementById("sheetBg");
const sheet = document.getElementById("sheet");
const LETTERS = ["A", "B", "C", "D"];
let QUIZ = null, QUESTIONS = [], N = 0;   // paket soal yang sedang dikerjakan

const svg = (d) => `<svg class="i" viewBox="0 0 24 24">${d}</svg>`;
const ICON = {
  check: svg(`<path d="M5 12.5l4.5 4.5L19 7.5"/>`),
  cross: svg(`<path d="M6 6l12 12M18 6L6 18"/>`),
  bulb: svg(`<path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z"/>`),
  arrow: svg(`<path d="M5 12h14M13 6l6 6-6 6"/>`),
  refresh: svg(`<path d="M3 12a9 9 0 109-9 9 9 0 00-6.4 2.7L3 8"/><path d="M3 3v5h5"/>`),
  book: svg(`<rect x="3" y="4" width="18" height="17" rx="3"/><path d="M8 2v4M16 2v4M3 10h18"/>`),
  timer: svg(`<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/>`),
  logo: svg(`<path d="M6 8h6M9 5v6M14 17h6M6 15.5l5 5M11 15.5l-5 5M15 6.5h5M17.5 4v5"/>`),
  home: svg(`<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>`),
};
const logoBig = ICON.logo;

let i = 0, answers = [], locked = false, hintOpen = false;

const $ = (s, el = app) => el.querySelector(s);
const typeset = (el = document.body) =>
  window.renderMathInElement && renderMathInElement(el, {
    delimiters: [{ left: "$", right: "$", display: false }], throwOnError: false,
  });
const norm = (v) => String(v ?? "").trim().replace(",", ".").replace(/^0+(?=\d)/, "");
const isCorrect = (q, a) => norm(a) !== "" && norm(a).toUpperCase() === norm(q.ans).toUpperCase();
const optText = (q, L) => q.opts[LETTERS.indexOf(L)] ?? "";
const status = (k) => answers[k] === undefined || !QUESTIONS[k].done ? "" : isCorrect(QUESTIONS[k], answers[k]) ? "ok" : "bad";
const counts = () => {
  let ok = 0, bad = 0;
  QUESTIONS.forEach((q, k) => { const s = status(k); if (s === "ok") ok++; else if (s === "bad") bad++; });
  return { ok, bad, left: N - ok - bad };
};

/* ---------- shell ---------- */
function shell(body, { wide = false, restart = false, home = false } = {}) {
  return `
    <div class="panel ${wide ? "wide" : ""}">
      <div class="phead">
        <div class="ttl">${ICON.timer} QuizPocky${QUIZ && (restart || home) ? `<span class="crumb">${QUIZ.short}</span>` : ""}</div>
        ${home ? `<button class="iconbtn flat" id="home" aria-label="Pilih soal lain" title="Pilih soal lain">${ICON.home}</button>` : ""}
        ${restart ? `<button class="iconbtn" id="restart" aria-label="Mulai ulang" title="Mulai ulang">${ICON.refresh}</button>` : ""}
      </div>
      <div class="pbody">${body}</div>
    </div>`;
}
function bindRestart(inProgress = true) {
  const r = $("#restart"), h = $("#home");
  if (r) r.onclick = () => { if (confirm("Mulai ulang quiz dari awal?")) go(() => startQuiz(QUIZ.id)); };
  if (h) h.onclick = () => { if (!inProgress || confirm("Keluar dan pilih soal lain? Progress quiz ini akan hilang.")) go(landing); };
}

function go(render) {
  const cur = app.querySelector(".pbody > *");
  if (cur && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cur.classList.add("leave");
    setTimeout(render, 180);
  } else render();
}

/* ---------- confetti ---------- */
function confetti(x, y, n = 28, spread = 1) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = ["#151a23", "#0b8fd9", "#16a34a", "#f5a524", "#ff6b6b", "#a78bfa"];
  for (let k = 0; k < n; k++) {
    const el = document.createElement("i");
    el.className = "confetti";
    el.style.background = colors[k % colors.length];
    el.style.left = x + "px"; el.style.top = y + "px";
    document.body.appendChild(el);
    const ang = (-90 + (Math.random() - .5) * 140 * spread) * Math.PI / 180;
    const dist = 90 + Math.random() * 190;
    const dx = Math.cos(ang) * dist, dy = Math.sin(ang) * dist;
    el.animate([
      { transform: "translate(0,0) rotate(0)", opacity: 1 },
      { transform: `translate(${dx}px,${dy}px) rotate(${Math.random() * 540}deg)`, opacity: 1, offset: .55 },
      { transform: `translate(${dx * 1.15}px,${dy + 220}px) rotate(${Math.random() * 900}deg)`, opacity: 0 },
    ], { duration: 1100 + Math.random() * 500, easing: "cubic-bezier(.2,.7,.4,1)" }).onfinish = () => el.remove();
  }
}

/* ---------- landing: pilih paket soal ---------- */
function landing() {
  QUIZ = null; QUESTIONS = []; N = 0;
  closeSheet();
  app.innerHTML = shell(`
    <div class="screen">
      <div class="hero">
        <div class="logo">${logoBig}</div>
        <h1>Latihan Math Competition</h1>
        <p class="muted">Pilih paket soal yang mau kamu kerjakan. Ada hint dan cara pengerjaan di setiap nomor.</p>
      </div>
      <div class="picker">
        ${QUIZZES.map((z, k) => {
          const mc = z.questions.filter((q) => q.type === "mc").length, num = z.questions.length - mc;
          return `
          <button class="qz rise" style="--i:${k + 1}" data-id="${z.id}">
            <div class="mono">${z.mono}</div>
            <div class="qz-body">
              <div class="qz-title">${z.title}</div>
              <div class="qz-org muted">${z.org}</div>
              <p class="qz-desc">${z.desc}</p>
              <div class="qz-tags">
                <span class="badge blue">${z.level}</span>
                <span class="badge gray">${z.questions.length} soal</span>
                <span class="badge gray">${num ? `${mc} pilgan + ${num} isian` : "Pilihan ganda"}</span>
              </div>
            </div>
            <span class="qz-go">${ICON.arrow}</span>
          </button>`;
        }).join("")}
      </div>
    </div>`, { wide: true });
  app.querySelectorAll(".qz").forEach((b) => (b.onclick = () => go(() => startQuiz(b.dataset.id))));
  window.scrollTo(0, 0);
}

function startQuiz(id) {
  QUIZ = QUIZZES.find((z) => z.id === id);
  QUESTIONS = QUIZ.questions; N = QUESTIONS.length;
  i = 0; answers = []; locked = false; hintOpen = false;
  QUESTIONS.forEach((q) => (q.done = false));
  showQuestion();
}

/* ---------- navigation widgets ---------- */
function stripHTML() {
  const from = Math.max(0, Math.min(i - 3, N - 7));
  return Array.from({ length: 7 }, (_, k) => {
    const n = from + k, s = n === i ? "cur" : status(n);
    return `<div class="n ${s}">${n + 1}</div>`;
  }).join("");
}
function asideHTML() {
  const c = counts();
  return `
    <div class="acard"><h4>Peta Soal <span class="badge blue">${i + 1}/${N}</span></h4>
      <div class="grid">${QUESTIONS.map((_, k) => `<div class="cell ${k === i ? "cur" : status(k)}">${k + 1}</div>`).join("")}</div>
      <div class="legend"><span><i style="background:var(--ok)"></i>Benar</span><span><i style="background:var(--bad)"></i>Salah</span><span><i style="background:var(--dark)"></i>Sekarang</span></div>
    </div>
    <div class="acard"><div class="mini">
      <div class="g"><b>${c.ok}</b><span>Benar</span></div>
      <div class="r"><b>${c.bad}</b><span>Salah</span></div>
      <div><b>${c.left}</b><span>Sisa</span></div>
    </div></div>`;
}
function refreshNav() {
  const s = $("#strip"), a = $("#aside"), sc = $("#score");
  if (s) s.innerHTML = stripHTML();
  if (a) a.innerHTML = asideHTML();
  if (sc) { const c = counts(); sc.innerHTML = `<span class="badge green">${ICON.check} ${c.ok}</span><span class="badge red">${ICON.cross} ${c.bad}</span>`; }
}

/* ---------- question ---------- */
function showQuestion() {
  const q = QUESTIONS[i];
  locked = false; hintOpen = false;
  app.innerHTML = shell(`
    <div class="quiz screen">
      <div class="main" style="display:grid;gap:16px;min-width:0;align-content:start">
        <div class="metabar">
          <div class="c">${ICON.book} <span>${QUIZ.title}</span></div>
          <div class="sc" id="score"></div>
        </div>
        <div class="strip" id="strip"></div>
        <section class="qcard">
          <div class="qtop">
            <span class="no">Soal ${i + 1}</span>
            <span class="badge blue">${q.type === "mc" ? "Pilihan ganda" : "Isian singkat"}</span>
          </div>
          <div class="qtext">${q.q}</div>
          ${q.type === "mc"
            ? `<div class="opts">${q.opts.map((o, k) => `
                <button class="opt rise" style="--i:${k + 1}" data-k="${LETTERS[k]}">
                  <span class="letter">${LETTERS[k]}</span><span class="label">${o}</span><span class="mark"></span>
                </button>`).join("")}</div>`
            : `<div class="rise" style="--i:1"><input class="num" id="num" inputmode="decimal" autocomplete="off" placeholder="Ketik jawabanmu (angka)"></div>`}
          <div class="actions">
            <button class="btn hintbtn" id="hint">${ICON.bulb} Hint</button>
            <span class="sp"></span>
            <button class="btn dark" id="submit" disabled>Jawab</button>
          </div>
          <div class="solution-wrap" id="solWrap"><div>
            <div class="solution"><div class="t">${ICON.bulb} Cara mengerjakan</div><div class="b">${q.hint}</div></div>
          </div></div>
        </section>
      </div>
      <aside class="aside" id="aside"></aside>
    </div>`, { wide: true, restart: true, home: true });
  bindRestart();
  refreshNav();

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
    setTimeout(() => inp.focus({ preventScroll: true }), 350);
  }
  submit.onclick = submitAnswer;
  $("#hint").onclick = () => { hintOpen = !hintOpen; $("#solWrap").classList.toggle("open", hintOpen); };
  typeset(app);
}

function submitAnswer() {
  const q = QUESTIONS[i];
  locked = true; q.done = true;
  const ok = isCorrect(q, answers[i]);
  $("#submit").disabled = true;

  if (q.type === "mc") {
    app.querySelectorAll(".opt").forEach((b) => {
      b.disabled = true;
      const mark = $(".mark", b);
      if (b.dataset.k === q.ans) { b.classList.remove("selected"); b.classList.add("correct", "pop"); mark.innerHTML = ICON.check; }
      else if (b.dataset.k === answers[i]) { b.classList.remove("selected"); b.classList.add("wrong"); mark.innerHTML = ICON.cross; }
      else b.classList.add("dim");
    });
  } else {
    const inp = $("#num");
    inp.disabled = true;
    inp.classList.add(ok ? "correct" : "wrong");
  }
  refreshNav();
  setTimeout(() => showSheet(q, ok), 550);
}

/* ---------- feedback sheet ---------- */
function showSheet(q, ok) {
  const last = i === N - 1;
  const a = answers[i];
  const correct = q.type === "mc"
    ? `<span class="letter">${q.ans}</span><span>${optText(q, q.ans)}</span>` : `<span>${q.ans}</span>`;
  const yours = q.type === "mc" ? `${a}. ${optText(q, a)}` : a;

  sheet.className = "sheet " + (ok ? "ok" : "bad");
  sheet.innerHTML = `
    <div class="grab"></div>
    <div class="head">
      <div class="ico">${ok ? ICON.check : ICON.cross}</div>
      <div><h3>${ok ? "Benar, keren!" : "Belum tepat"}</h3>
      <p class="sub muted">${ok ? "Jawabanmu pas. Lanjut terus!" : "Tenang, ini jawaban yang benar:"}</p></div>
    </div>
    ${ok ? "" : `
      <div class="answer-box"><small>Jawaban yang benar</small><div class="row">${correct}</div></div>
      <p class="yours">Jawabanmu: <b>${yours}</b> · buka <b>Hint</b> untuk lihat cara pengerjaan.</p>`}
    <button class="btn dark block" id="next">${last ? "Lihat Hasil" : "Soal Berikutnya"} ${ICON.arrow}</button>`;
  typeset(sheet);
  sheetBg.classList.add("show");
  sheet.classList.add("show");
  if (!ok) { hintOpen = true; $("#solWrap").classList.add("open"); }
  else confetti(innerWidth / 2, innerHeight - 220, 26);
  const next = $("#next", sheet);
  next.focus({ preventScroll: true });
  next.onclick = () => {
    closeSheet();
    if (last) go(showResult);
    else { i++; go(showQuestion); }
  };
}
function closeSheet() { sheet.classList.remove("show"); sheetBg.classList.remove("show"); }

/* ---------- result ---------- */
function showResult() {
  const wrong = [];
  QUESTIONS.forEach((q, k) => { if (!isCorrect(q, answers[k])) wrong.push(k); });
  const right = N - wrong.length;
  const pct = Math.round((right / N) * 100);
  const msg = pct === 100 ? "Sempurna!" : pct >= 80 ? "Hebat banget!" : pct >= 60 ? "Bagus, terus latihan!" : "Jangan menyerah, coba lagi!";

  app.innerHTML = shell(`
    <div class="screen">
      <section class="result">
        <div class="ring">
          <svg viewBox="0 0 190 190"><circle class="track" cx="95" cy="95" r="84"/><circle class="fill" id="ringFill" cx="95" cy="95" r="84"/></svg>
          <div class="mid"><b id="pct">0%</b><span>skor kamu</span></div>
        </div>
        <h2>${msg}</h2>
        <div class="muted">${right} dari ${N} soal dijawab benar</div>
        <div class="stats">
          <div class="stat ok">${ICON.check}<div><b data-count="${right}">0</b><span>Benar</span></div></div>
          <div class="stat bad">${ICON.cross}<div><b data-count="${wrong.length}">0</b><span>Salah</span></div></div>
        </div>
        ${wrong.length ? `
          <div class="wrongnums"><div class="lbl">Nomor yang salah</div>
          <div class="pills">${wrong.map((k) => `<span class="pill">${k + 1}</span>`).join("")}</div></div>` : ""}
      </section>
      ${wrong.length ? `<h2 class="section-title">Jawaban yang seharusnya</h2>${wrong.map(reviewItem).join("")}` : ""}
      <div class="retry-wrap"><button class="btn dark big" id="retry">${ICON.refresh} Ulangi Quiz</button><button class="btn big" id="other">${ICON.home} Pilih Soal Lain</button></div>
    </div>`);
  $("#retry").onclick = () => go(() => startQuiz(QUIZ.id));
  $("#other").onclick = () => go(landing);
  typeset(app);
  window.scrollTo(0, 0);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    $("#ringFill").style.strokeDashoffset = 527.8 * (1 - pct / 100);
  }));
  countUp($("#pct"), pct, "%");
  app.querySelectorAll("[data-count]").forEach((el) => countUp(el, +el.dataset.count));
  if (pct >= 70) setTimeout(() => confetti(innerWidth / 2, innerHeight * .35, 60, 1.6), 600);
}

function countUp(el, to, suffix = "") {
  const t0 = performance.now(), dur = 1400;
  const step = (t) => {
    const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(to * e) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function reviewItem(k, n) {
  const q = QUESTIONS[k], a = answers[k];
  const fmt = (L) => q.type === "mc" ? `<b>${L}.</b> ${optText(q, L)}` : L;
  return `
    <section class="review rise" style="--i:${Math.min(n, 8)}">
      <div class="top">Soal ${k + 1} <span class="badge red">Salah</span></div>
      <div class="qprev">${q.q}</div>
      <div class="cmp">
        <div class="you"><small>Jawabanmu</small><div class="v">${a ? fmt(a) : "(kosong)"}</div></div>
        <div class="key"><small>Jawaban benar</small><div class="v">${fmt(q.ans)}</div></div>
      </div>
      <details class="how"><summary>Lihat cara pengerjaan</summary>
        <div class="solution"><div class="b">${q.hint}</div></div>
      </details>
    </section>`;
}

landing();
