/* ===================================================================
   main.js
   Publication explorer, book grid, navigation, hero network motif.
   =================================================================== */

const AUTHOR_PATTERN = /(K\.\s?-?N\.\s?Qureshi|K\.N\. Qureshi|Qureshi KN|K\. Qureshi)/g;
const PAGE_SIZE = 25;

/* ------------------------------------------------------- utilities */
const el = (sel, root = document) => root.querySelector(sel);
const els = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));
const scholarLink = (t) => "https://scholar.google.com/scholar?q=" + encodeURIComponent(t);

/* ------------------------------------------------ navigation, menu */
const nav = el("#nav");
const navToggle = el("#navToggle");

navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.textContent = open ? "Close" : "Menu";
});
els("#nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.textContent = "Menu";
}));

/* highlight the section currently in view */
const sections = els("main section[id]");
const linkFor = {};
els("#nav a").forEach(a => linkFor[a.getAttribute("href").slice(1)] = a);
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const link = linkFor[entry.target.id];
    if (!link) return;
    if (entry.isIntersecting) {
      els("#nav a").forEach(a => a.classList.remove("on"));
      link.classList.add("on");
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => spy.observe(s));

/* ------------------------------------------- portrait image fallback */
const portrait = el("#portrait");
function usePortraitFallback() {
  portrait.style.display = "none";
  el("#portraitFallback").style.display = "grid";
}
portrait.addEventListener("error", usePortraitFallback);
if (portrait.complete && portrait.naturalWidth === 0) usePortraitFallback();

/* ==================================================================
   PUBLICATION EXPLORER
   ================================================================== */
const state = { q: "", type: "all", year: null, shown: PAGE_SIZE };
const listNode = el("#pubList");
const countNode = el("#pubCount");
const moreBtn = el("#loadMore");

/* live counts in the stats strip */
el("#statJournals").textContent = PUBLICATIONS.filter(p => p.type === "journal").length;
el("#statConf").textContent = PUBLICATIONS.filter(p => p.type === "conference").length;

function matches(p) {
  if (state.type !== "all" && p.type !== state.type) return false;
  if (state.year && p.y !== state.year) return false;
  if (state.q) {
    const hay = (p.title + " " + p.authors + " " + p.venue + " " + p.y).toLowerCase();
    return state.q.toLowerCase().split(/\s+/).every(term => hay.includes(term));
  }
  return true;
}

function boldAuthor(authors) {
  return esc(authors).replace(AUTHOR_PATTERN, m => `<b>${m}</b>`);
}

function pubMarkup(p) {
  const href = p.doi || scholarLink(p.title);
  const label = p.doi ? "Open" : "Scholar";
  return `
  <article class="pub">
    <div class="pub-year">${p.y}</div>
    <div>
      <h3 class="pub-title"><a href="${esc(href)}" target="_blank" rel="noopener">${esc(p.title)}</a></h3>
      <p class="pub-meta">${esc(p.venue)}</p>
      <p class="pub-authors">${boldAuthor(p.authors)}</p>
    </div>
    <div class="pub-side">
      <span class="badge ${p.type}">${p.type === "chapter" ? "Chapter" : p.type === "conference" ? "Conference" : "Journal"}</span>
      ${p.imf ? `<span class="badge if">IF ${esc(p.imf)}</span>` : ""}
      ${p.award ? `<span class="badge award">Award</span>` : ""}
      <a class="badge" href="${esc(href)}" target="_blank" rel="noopener">${label}</a>
    </div>
  </article>`;
}

function render() {
  const found = PUBLICATIONS.filter(matches);
  const slice = found.slice(0, state.shown);

  listNode.innerHTML = slice.length
    ? slice.map(pubMarkup).join("")
    : `<p class="empty">No publications match that filter. Try a different term or clear the year.</p>`;

  const bits = [`${found.length} of ${PUBLICATIONS.length} records`];
  if (state.year) bits.push(`year ${state.year}`);
  if (state.type !== "all") bits.push(state.type);
  countNode.textContent = bits.join(" \u00b7 ");

  moreBtn.hidden = found.length <= state.shown;
  moreBtn.textContent = `Show ${Math.min(PAGE_SIZE, found.length - state.shown)} more`;
}

/* search box */
el("#pubSearch").addEventListener("input", e => {
  state.q = e.target.value.trim();
  state.shown = PAGE_SIZE;
  render();
});

/* type chips */
els(".chip[data-type]").forEach(chip => {
  chip.addEventListener("click", () => {
    els(".chip[data-type]").forEach(c => c.classList.remove("on"));
    chip.classList.add("on");
    state.type = chip.dataset.type;
    state.shown = PAGE_SIZE;
    render();
  });
});

moreBtn.addEventListener("click", () => { state.shown += PAGE_SIZE; render(); });

/* year histogram, doubles as a filter */
const barsNode = el("#yearBars");
const perYear = {};
PUBLICATIONS.forEach(p => perYear[p.y] = (perYear[p.y] || 0) + 1);
const years = Object.keys(perYear).map(Number).sort((a, b) => a - b);
const peak = Math.max(...Object.values(perYear));

barsNode.innerHTML = years.map(y => `
  <button class="ybar" data-year="${y}" title="${perYear[y]} records in ${y}" aria-label="${perYear[y]} records in ${y}">
    <i style="height:${Math.round((perYear[y] / peak) * 46) + 4}px"></i>
    <small>${String(y).slice(2)}</small>
  </button>`).join("");

els(".ybar").forEach(bar => {
  bar.addEventListener("click", () => {
    const y = Number(bar.dataset.year);
    const clearing = state.year === y;
    els(".ybar").forEach(b => b.classList.remove("on"));
    state.year = clearing ? null : y;
    if (!clearing) bar.classList.add("on");
    state.shown = PAGE_SIZE;
    render();
  });
});

render();

/* ==================================================================
   BOOKS
   ================================================================== */
el("#bookGrid").innerHTML = BOOKS.map((b, i) => `
  <article class="book">
    <img class="book-cover" data-i="${i}" src="${esc(b.cover)}" alt="Cover of ${esc(b.title)}">
    <div class="book-body">
      <span class="book-kind">${esc(b.kind)} &middot; ${esc(b.year)}</span>
      <h3>${esc(b.title)}</h3>
      <p>${esc(b.publisher)}</p>
      ${b.note ? `<p>${esc(b.note)}</p>` : ""}
      ${b.link ? `<a class="book-link" href="${esc(b.link)}" target="_blank" rel="noopener">View publisher page</a>` : ""}
    </div>
  </article>`).join("");

/* until real cover art is dropped in, draw a typographic cover instead */
els(".book-cover").forEach(img => {
  const swap = () => {
    const fallback = document.createElement("div");
    fallback.className = "book-cover-fallback";
    fallback.textContent = BOOKS[img.dataset.i].title;
    img.replaceWith(fallback);
  };
  img.addEventListener("error", swap);
  if (img.complete && img.naturalWidth === 0) swap();
});

/* ==================================================================
   HERO NETWORK MOTIF
   Nodes drift, links appear when nodes are close, packets travel the
   links. A quiet nod to the routing work the page is about.
   ================================================================== */
(function network() {
  const canvas = el("#netcanvas");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  let w, h, nodes = [], packets = [], raf;

  function size() {
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = r.width * dpr;
    h = canvas.height = r.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    w = r.width; h = r.height;
  }

  function seed() {
    const count = w < 520 ? 16 : 28;
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - .5) * .22,
      vy: (Math.random() - .5) * .22,
      r: Math.random() * 1.8 + 1.2
    }));
  }

  function spawnPacket() {
    if (nodes.length < 2 || packets.length > 5) return;
    const a = Math.floor(Math.random() * nodes.length);
    let b = Math.floor(Math.random() * nodes.length);
    if (a === b) b = (b + 1) % nodes.length;
    packets.push({ a, b, t: 0, speed: .006 + Math.random() * .008 });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    });

    /* links */
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 130) {
          ctx.strokeStyle = `rgba(36,54,216,${(1 - d / 130) * .22})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    /* nodes */
    nodes.forEach(n => {
      ctx.fillStyle = "rgba(12,23,37,.32)";
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    });

    /* packets in flight */
    packets = packets.filter(p => p.t <= 1);
    packets.forEach(p => {
      const a = nodes[p.a], b = nodes[p.b];
      if (!a || !b) { p.t = 2; return; }
      p.t += p.speed;
      const x = a.x + (b.x - a.x) * p.t;
      const y = a.y + (b.y - a.y) * p.t;
      ctx.fillStyle = "rgba(217,138,0,.85)";
      ctx.beginPath();
      ctx.arc(x, y, 2.6, 0, Math.PI * 2);
      ctx.fill();
    });

    raf = requestAnimationFrame(draw);
  }

  size(); seed(); draw();
  setInterval(spawnPacket, 1400);
  window.addEventListener("resize", () => { cancelAnimationFrame(raf); size(); seed(); draw(); });
})();
