// ponytail: no framework — plain JS covers menu/scroll/validation.
document.getElementById('menuBtn').addEventListener('click', () =>
  document.getElementById('menu').classList.toggle('open'));
document.querySelectorAll('a[href^="#"]').forEach(a =>
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  }));
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const ok = f.get('name') && /.+@.+\..+/.test(f.get('email')) && f.get('msg');
  document.getElementById('formMsg').textContent = ok
    ? `Thanks ${f.get('name')} — message noted (demo, no backend).`
    : 'Please fill name, valid email, message.';
  if (ok) e.target.reset();
});
