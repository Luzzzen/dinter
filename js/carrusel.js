// Carrusel del inicio: flechas, pestañas, teclado, deslizar con el dedo y avance automático
(function () {
  var root = document.querySelector('.hc'); if (!root) return;
  var slides = root.querySelectorAll('.hc-slide'), tabs = root.querySelectorAll('.hc-tab');
  var TIME = 6500, current = 0, timer = null;
  var calm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (calm) root.classList.add('is-static');

  function show(n) {
    current = (n + slides.length) % slides.length;
    slides.forEach(function (s, i) {
      var on = i === current;
      s.classList.toggle('is-active', on);
      if (on) s.removeAttribute('aria-hidden'); else s.setAttribute('aria-hidden', 'true');
    });
    tabs.forEach(function (t, i) {
      t.classList.remove('is-active');
      if (i === current) { void t.offsetWidth; t.classList.add('is-active'); t.setAttribute('aria-current', 'true'); }
      else t.removeAttribute('aria-current');
    });
  }
  function stop() { clearTimeout(timer); timer = null; }
  function play() { stop(); if (calm || root.classList.contains('is-paused')) return; timer = setTimeout(function () { show(current + 1); play(); }, TIME); }
  function go(n) { show(n); play(); }
  function pause(on) { root.classList.toggle('is-paused', on); if (on) stop(); else go(current); }

  root.querySelector('.hc-arrow--prev').addEventListener('click', function () { go(current - 1); });
  root.querySelector('.hc-arrow--next').addEventListener('click', function () { go(current + 1); });
  tabs.forEach(function (t, i) { t.addEventListener('click', function () { go(i); }); });
  root.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') go(current - 1);
    if (e.key === 'ArrowRight') go(current + 1);
  });
  root.addEventListener('mouseenter', function () { pause(true); });
  root.addEventListener('mouseleave', function () { pause(false); });
  root.addEventListener('focusin', function () { pause(true); });
  root.addEventListener('focusout', function (e) { if (!root.contains(e.relatedTarget)) pause(false); });
  document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else play(); });

  var x0 = null, y0 = null;
  root.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  root.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; x0 = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) go(current + (dx < 0 ? 1 : -1));
  }, { passive: true });

  play();
})();
