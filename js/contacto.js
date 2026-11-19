// Dinter – valida el formulario de contacto y arma el mail de consulta
(function () {
  var form = document.getElementById('form-consulta');
  if (!form) return;
  var campos = {
    nombre:  { el: form.elements.nombre,  ok: function (v) { return v.length > 0; } },
    mail:    { el: form.elements.mail,    ok: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); } },
    mensaje: { el: form.elements.mensaje, ok: function (v) { return v.length > 0; } }
  };

  function revisar(nombre) {
    var c = campos[nombre], v = c.el.value.trim(), bien = c.ok(v);
    c.el.setAttribute('aria-invalid', String(!bien));
    document.getElementById('e-' + nombre).hidden = bien;
    return bien;
  }

  // Una vez marcado un error, se corrige en vivo mientras se escribe
  Object.keys(campos).forEach(function (n) {
    campos[n].el.addEventListener('input', function () {
      if (campos[n].el.getAttribute('aria-invalid') === 'true') revisar(n);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var primeroMal = null;
    Object.keys(campos).forEach(function (n) { if (!revisar(n) && !primeroMal) primeroMal = campos[n].el; });
    if (primeroMal) { primeroMal.focus(); return; }

    var nombre   = campos.nombre.el.value.trim();
    var mail     = campos.mail.el.value.trim();
    var producto = form.elements.producto.value;
    var mensaje  = campos.mensaje.el.value.trim();
    var subject  = encodeURIComponent('Consulta desde la web de Dinter' + (producto ? ' – ' + producto : ''));
    var body     = encodeURIComponent('Nombre: ' + nombre + '\nMail: ' + mail + '\nProducto: ' + (producto || '—') + '\n\n' + mensaje);
    window.location.href = 'mailto:dinter111@hotmail.com?subject=' + subject + '&body=' + body;
  });
})();
