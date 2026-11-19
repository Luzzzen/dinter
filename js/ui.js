// Dinter – comportamiento compartido: año del pie y menú lateral del celular
(function () {
  document.querySelectorAll('.year').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  var btn     = document.getElementById('hamburger-btn');
  var overlay = document.getElementById('drawer-overlay');
  var drawer  = document.getElementById('drawer');
  var close   = document.getElementById('drawer-close');
  if (!btn || !drawer) return;

  function isOpen() { return drawer.classList.contains('open'); }

  function openDrawer() {
    btn.classList.add('open');
    overlay.classList.add('open');
    drawer.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // El panel pasa a visible en el mismo cuadro: se puede enfocar enseguida
    var first = drawer.querySelector('.drawer-section a');
    if (first) first.focus();
  }

  function closeDrawer(volverAlBoton) {
    if (!isOpen()) return;
    btn.classList.remove('open');
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (volverAlBoton) btn.focus();
  }

  btn.addEventListener('click', function () { if (isOpen()) closeDrawer(true); else openDrawer(); });
  close.addEventListener('click', function () { closeDrawer(true); });
  overlay.addEventListener('click', function () { closeDrawer(true); });

  document.addEventListener('keydown', function (e) {
    if (!isOpen()) return;
    if (e.key === 'Escape') { closeDrawer(true); return; }
    // Mientras está abierto, el Tab da vueltas dentro del panel
    if (e.key === 'Tab') {
      var f = drawer.querySelectorAll('a[href], button');
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Si se agranda la ventana con el panel abierto (girar el celular, por ejemplo), se cierra
  var ancho = window.matchMedia('(min-width: 901px)');
  function alCambiar(e) { if (e.matches) closeDrawer(false); }
  if (ancho.addEventListener) ancho.addEventListener('change', alCambiar); else ancho.addListener(alCambiar);
})();
