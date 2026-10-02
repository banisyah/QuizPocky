const app = document.getElementById("app");
const sheetBg = document.getElementById("sheetBg");
const sheet = document.getElementById("sheet");
const LETTERS = ["A", "B", "C", "D"];

const ICON = {
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`,
  cross: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  bulb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  retry: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 109-9 9 9 0 00-6.4 2.7L3 8"/><path d="M3 3v5h5"/></svg>`,
  logo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7h6M8 4v6M13 17h6M5 17l5-0M14 6l5 5M19 6l-5 5"/><path d="M5.5 15.5l4 4M9.5 15.5l-4 4"/></svg>`,
};

let i = 0;           // soal aktif (0-based)
let answers = [];    // jawaban user
let locked = false;
let hintOpen = false;
let lastPct = 0;

const $ = (s, el = app) => el.querySelector(s);
const typeset = (el = document.body) =>
  window.renderMathInElement && renderMathInElement(el, {
    delimiters: [{ left: "$", right: "$", display: false }],
    throwOnError: false,
  });

const norm = (v) => String(v ?? "").trim().replace(",", ".").replace(/^0+(?=\d)/, "");
const isCorrect = (q, a) => norm(a) !== "" && norm(a).toUpperCase() === norm(q.ans).toUpperCase();
const optText = (q, L) => q.opts[LETTERS.indexOf(L)] ?? "";

/* ---------- transitions ---------- */
function go(render) {
  const cur = app.firstElementChild;
  if (cur && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cur.classList.add("leave");
    setTimeout(render, 180);
  } else render();
}

/* ---------- confetti ---------- */
function confetti(x, y, n = 28, spread = 1) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = ["#5b4bff", "#8b5cf6", "#12a05c", "#f5a524", "#ff6b9d", "#38bdf8"];
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

/* ---------- start ---------- */
function start() {
  i = 0; answers = []; locked = false; hintOpen = false; lastPct = 0;
  app.innerHTML = `
    <section class="screen card hero">
      <div class="logo">${ICON.logo}</div>
      <h1>Quiz<span>Pocky</span></h1>
      <p class="muted">Latihan soal Eduversal Mathematics Competition 2025 · Tingkat Kota Kelas 7</p>
      <div class="chips">
        <span class="chip">${QUESTIONS.length} soal</span>
        <span class="chip">Hint + cara pengerjaan</span>
        <span class="chip">Tanpa login</span>
      </div>
      <button class="btn primary big" id="go">Mulai Quiz ${ICON.arrow}</button>
    </section>`;
  $("#go").onclick = () => go(showQuestion);
}

/* ---------- question ---------- */
function showQuestion() {
  const q = QUESTIONS[i];
  locked = false; hintOpen = false;
  app.innerHTML = `
    <div class="screen">
      <div class="topbar">
        <div class="bar"><i id="fill" style="width:${lastPct}%"></i></div>
        <div class="count">${i + 1}<small> / ${QUESTIONS.length}</small></div>
      </div>
      <section class="card">
        <div class="qmeta">
          <div class="qnum">${i + 1}</div>
          <span class="qtype">${q.type === "mc" ? "Pilihan ganda" : "Isian singkat"}</span>
        </div>
        <div class="qtext">${q.q}</div>
        ${q.type === "mc"
          ? `<div class="opts">${q.opts.map((o, k) => `
              <button class="opt rise" style="--i:${k + 1}" data-k="${LETTERS[k]}">
                <span class="letter">${LETTERS[k]}</span><span class="label">${o}</span>
                <span class="mark"></span>
              </button>`).join("")}</div>`
          : `<div class="numwrap rise" style="--i:1"><input class="num" id="num" inputmode="decimal" autocomplete="off" placeholder="Ketik jawabanmu (angka)"></div>`}
        <div class="actions">
          <button class="btn ghost" id="hint">${ICON.bulb} Hint</button>
          <span class="sp"></span>
          <button class="btn primary" id="submit" disabled>Jawab</button>
        </div>
        <div class="solution-wrap" id="solWrap"><div>
          <div class="solution"><div class="t">${ICON.bulb} Cara mengerjakan</div><div>${q.hint}</div></div>
        </div></div>
      </section>
    </div>`;
  const pct = (i / QUESTIONS.length) * 100;
  requestAnimationFrame(() => requestAnimationFrame(() => { $("#fill").style.width = pct + "%"; lastPct = pct; }));

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
    setTimeout(() => inp.focus(), 350);
  }
  submit.onclick = submitAnswer;
  $("#hint").onclick = () => {
    hintOpen = !hintOpen;
    $("#solWrap").classList.toggle("open", hintOpen);
  };
  typeset(app);
}

function submitAnswer() {
  const q = QUESTIONS[i];
  locked = true;
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
  setTimeout(() => showSheet(q, ok), 550);
}

/* ---------- feedback sheet ---------- */
function showSheet(q, ok) {
  const last = i === QUESTIONS.length - 1;
  const a = answers[i];
  const correctHTML = q.type === "mc"
    ? `<span class="letter">${q.ans}</span><span class="v">${optText(q, q.ans)}</span>`
    : `<span class="v">${q.ans}</span>`;
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
      <div class="answer-box"><div>
        <small>Jawaban yang benar</small>
        <div style="display:flex;align-items:center;gap:10px;margin-top:4px">${correctHTML}</div>
      </div></div>
      <p class="yours">Jawabanmu: <b>${yours}</b> · buka <b>Hint</b> untuk lihat cara pengerjaan.</p>`}
    <button class="btn primary" id="next">${last ? "Lihat Hasil" : "Soal Berikutnya"} ${ICON.arrow}</button>`;
  typeset(sheet);
  sheetBg.classList.add("show");
  sheet.classList.add("show");
  if (!ok) { hintOpen = true; $("#solWrap").classList.add("open"); }
  if (ok) confetti(innerWidth / 2, innerHeight - 220, 26);
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
  const total = QUESTIONS.length, right = total - wrong.length;
  const pct = Math.round((right / total) * 100);
  const msg = pct === 100 ? "Sempurna! 🎉" : pct >= 80 ? "Hebat banget!" : pct >= 60 ? "Bagus, terus latihan!" : "Jangan menyerah, coba lagi!";

  app.innerHTML = `
    <div class="screen">
      <section class="card result">
        <div class="ring">
          <svg viewBox="0 0 190 190">
            <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5b4bff"/><stop offset="1" stop-color="#b18cff"/></linearGradient></defs>
            <circle class="track" cx="95" cy="95" r="84"/><circle class="fill" id="ringFill" cx="95" cy="95" r="84"/>
          </svg>
          <div class="mid"><b id="pct">0%</b><span>skor kamu</span></div>
        </div>
        <h2>${msg}</h2>
        <div class="muted">${right} dari ${total} soal dijawab benar</div>
        <div class="stats">
          <div class="stat ok">${ICON.check}<div><b data-count="${right}">0</b><span>Benar</span></div></div>
          <div class="stat bad">${ICON.cross}<div><b data-count="${wrong.length}">0</b><span>Salah</span></div></div>
        </div>
        ${wrong.length ? `
          <div class="wrongnums"><div class="lbl">Nomor yang salah</div>
          <div class="pills">${wrong.map((k) => `<span class="pill">${k + 1}</span>`).join("")}</div></div>` : ""}
      </section>
      ${wrong.length ? `<h2 class="section-title">Jawaban yang seharusnya</h2>${wrong.map(reviewItem).join("")}` : ""}
      <div class="retry-wrap"><button class="btn primary big" id="retry">${ICON.retry} Ulangi Quiz</button></div>
    </div>`;
  $("#retry").onclick = () => go(start);
  typeset(app);
  window.scrollTo(0, 0);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    $("#ringFill").style.strokeDashoffset = 527.8 * (1 - pct / 100);
  }));
  countUp($("#pct"), pct, "%");
  app.querySelectorAll("[data-count]").forEach((el) => countUp(el, +el.dataset.count));
  if (pct >= 70) setTimeout(() => {
    confetti(innerWidth / 2, innerHeight * .35, 60, 1.6);
  }, 600);
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
    <section class="card review rise" style="--i:${Math.min(n, 8)}">
      <div class="top"><div class="qn">${k + 1}</div><b>Soal ${k + 1}</b></div>
      <div class="qprev">${q.q}</div>
      <div class="cmp">
        <div class="you"><small>Jawabanmu</small><div class="v">${a ? fmt(a) : "(kosong)"}</div></div>
        <div class="key"><small>Jawaban benar</small><div class="v">${fmt(q.ans)}</div></div>
      </div>
      <details class="how"><summary>Lihat cara pengerjaan</summary>
        <div class="solution"><div>${q.hint}</div></div>
      </details>
    </section>`;
}

start();
