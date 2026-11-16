// Dinter – comportamiento compartido (el menú y el pie ahora están escritos en cada página)
(function () {
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

  const btn     = document.getElementById('hamburger-btn');
  const overlay = document.getElementById('drawer-overlay');
  const drawer  = document.getElementById('drawer');
  const close   = document.getElementById('drawer-close');

  if (!btn) return;

  function openDrawer() {
    btn.classList.add('open');
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    btn.classList.remove('open');
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', openDrawer);
  close.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Cerrar con Escape
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
})();
