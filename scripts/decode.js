/* Caption decode: on hover/focus, the caption line under the sentences decodes
   the link's destination (in the mono face, so there's no layout shift). rAF
   only, paused when the tab is hidden, instant under prefers-reduced-motion.
   The sentences themselves only fade in (CSS, styles/index.scss). */
export function decode() {
  'use strict';
  const mqRM = matchMedia('(prefers-reduced-motion: reduce)');
  let RM = mqRM.matches;
  const clock = () => performance.now();

  /* deterministic noise */
  function rnd(a, b, c) {
    let h = Math.imul(a | 0, 0x27d4eb2d) ^ Math.imul(b | 0, 0x165667b1) ^ Math.imul(c | 0, 0x9e3779b1);
    h = Math.imul(h ^ (h >>> 15), 0x85ebca6b);
    h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  }
  // monospace + no spaces/hyphens/slashes in the set → same advance, no new break points → zero layout shift
  const GL = '01_=<>[]*+';
  const NB = ' ';

  /* a glyph "front" sweeps left → right; char i resolves at t0 + (off+i)·stagger */
  let uid = 1;
  class Scramble {
    constructor(el, final) {
      this.el = el; this.id = uid++; this.gen = 0;
      this.final = final != null ? final : el.textContent.replace(/\s+/g, ' ');
      this.from = this.to = this.shown = this.final;
      this.t0 = -1e9; this.o = {};
      el.textContent = this.final;
    }
    set(to, t0, o, from) {
      this.from = from; this.to = to; this.t0 = t0; this.gen++;
      this.o = Object.assign({ off: 0, stagger: 20, win: 64, jitter: 10 }, o);
      if (RM) { this.render(Infinity); active.delete(this); return; }
      this.render(clock());
      active.add(this); kick();
    }
    show(str) { if (str !== this.shown) { this.el.textContent = str; this.shown = str; } }
    render(t) {
      const { from, to, t0, o } = this;
      const slot = Math.floor(t / 32);
      let out = '', done = true;
      for (let i = 0; i < to.length; i++) {
        const c = to[i];
        if (c === ' ' || c === NB) { out += c; continue; }
        const r = t0 + (o.off + i) * o.stagger + rnd(this.id, i, this.gen) * o.jitter;
        if (t >= r) { out += c; continue; }
        done = false;
        out += t < r - o.win ? (from[i] != null ? from[i] : NB) : GL[Math.floor(rnd(this.id * 31 + i, slot, this.gen) * GL.length)];
      }
      this.show(out);
      return done;
    }
  }

  /* links + destination labels */
  const links = [...document.querySelectorAll('a[data-dest]')].map(a => {
    const tip = document.createElement('span');
    tip.className = 'tip'; tip.setAttribute('aria-hidden', 'true');
    (document.querySelector('.cap') || a).appendChild(tip);
    const dest = a.dataset.dest, label = a.querySelector('.k').textContent;
    const pad = s => s + NB.repeat(Math.max(0, dest.length - s.length));
    return { a, tip, dest, label: pad(label), t: new Scramble(tip, dest) };
  });

  /* rAF loop, only while something decodes */
  const active = new Set();
  let raf = 0;
  function kick() { if (!raf && !document.hidden) raf = requestAnimationFrame(frame); }
  function frame(now) {
    raf = 0;
    for (const s of active) if (s.render(now)) active.delete(s);
    if (active.size) kick();
  }
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else kick();
  });

  /* hover / focus: word → destination, ≈ 200ms; back on leave */
  const HOVER = len => ({ stagger: Math.min(12, 170 / len), win: 50, jitter: 8 });
  let hot = null;
  function place(L) {
    L.tip.style.setProperty('--dx', '0px');
    const r = L.tip.getBoundingClientRect();
    const over = r.right - (document.documentElement.clientWidth - 12);
    if (over > 0) L.tip.style.setProperty('--dx', -Math.ceil(over) + 'px');
  }
  function setHot(L, t = clock()) {
    if (L === hot) return;
    if (hot) {
      const H = hot;
      H.a.classList.remove('hot'); H.tip.classList.remove('on');
      H.t.set(H.label, t, HOVER(H.dest.length), H.t.shown);
    }
    hot = L;
    if (L) {
      L.t.set(L.dest, t, HOVER(L.dest.length), L.label);
      place(L);
      L.a.classList.add('hot'); L.tip.classList.add('on');
    }
  }
  for (const L of links) {
    L.a.addEventListener('focus', () => setHot(L));
    L.a.addEventListener('blur', () => { if (hot === L) setHot(null); });
    // touch: no label, no delay — the tap simply navigates
    L.a.addEventListener('pointerenter', e => { if (e.pointerType !== 'touch') setHot(L); });
    L.a.addEventListener('pointerleave', e => {
      // fall back to a keyboard-focused link, so its caption isn't lost after hovering another
      if (e.pointerType !== 'touch' && hot === L && document.activeElement !== L.a)
        setHot(links.find(x => x.a === document.activeElement) || null);
    });
  }

  const onRM = e => {
    RM = e.matches;
    if (RM) { for (const s of active) s.render(Infinity); active.clear(); }
  };
  if (mqRM.addEventListener) mqRM.addEventListener('change', onRM); else if (mqRM.addListener) mqRM.addListener(onRM);

  /* boot */
  addEventListener('resize', () => { if (hot) place(hot); });
}
