// Footer year updates itself every year
document.getElementById('year').textContent = new Date().getFullYear();

// Dark / light toggle
const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

toggle.addEventListener('click', () => {
  // What's showing right now? Either the forced theme, or the system default
  const current = root.getAttribute('data-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';

  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});
