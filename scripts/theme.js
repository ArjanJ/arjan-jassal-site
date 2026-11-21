/* Theme: 2-state toggle over a system default. The no-flash part lives in the
   inline <head> script (includes/head.pug); this wires the button and keeps the
   theme-color metas and the button label in sync. */
export function theme() {
  'use strict';
  const d = document.documentElement;
  const btn = document.querySelector('button.theme');
  const mq = matchMedia('(prefers-color-scheme: dark)');
  const BG = { light: '#fafafa', dark: '#0a0a0a' };
  const ok = v => v === 'light' || v === 'dark';
  const q = new URLSearchParams(location.search).get('theme');
  let forced = ok(q) ? q : null;              // ?theme= : screenshots, never stored
  let choice = null;                          // in-memory copy of the stored choice
  if (!forced) { try { const v = localStorage.getItem('theme'); if (ok(v)) choice = v; } catch (e) {} }
  const store = v => { try { v ? localStorage.setItem('theme', v) : localStorage.removeItem('theme'); } catch (e) {} };
  const sys = () => mq.matches ? 'dark' : 'light';
  const current = () => forced || choice || sys();
  const metas = [...document.querySelectorAll('meta[name="theme-color"]')];

  function apply() {
    const t = current(), manual = !!(forced || choice);
    d.setAttribute('data-theme', t);
    // following the system → each media meta keeps its own colour; manual → both carry the active one
    for (const m of metas) m.setAttribute('content', manual ? BG[t] : BG[/dark/.test(m.getAttribute('media') || '') ? 'dark' : 'light']);
    if (btn) btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  if (btn) btn.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    if (forced) forced = next;                                        // URL-forced: in-memory only
    else { choice = next === sys() ? null : next; store(choice); }    // same as system → follow system again
    apply();
  });
  const onSys = () => { if (!forced && !choice) apply(); };
  if (mq.addEventListener) mq.addEventListener('change', onSys); else if (mq.addListener) mq.addListener(onSys);
  apply();

  const arm = () => requestAnimationFrame(() => requestAnimationFrame(() => d.classList.add('theme-anim')));
  if (document.readyState === 'complete') arm(); else addEventListener('load', arm, { once: true });
}
