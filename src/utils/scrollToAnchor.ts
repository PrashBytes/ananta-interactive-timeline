export const smoothScrollTo = (anchor: string, offsetPx = 80) => {
  if (typeof document === 'undefined') return;
  const el = document.getElementById(anchor.replace('#', ''));
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offsetPx;
  window.scrollTo({ top, behavior: 'smooth' });
};
