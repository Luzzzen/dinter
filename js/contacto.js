// Dinter – arma el mail de consulta con los datos del formulario
(function () {
  function sendMail() {
    const nombre   = document.querySelector('input[type="text"]').value;
    const mail     = document.querySelector('input[type="email"]').value;
    const producto = document.querySelector('select').value;
    const mensaje  = document.querySelector('textarea').value;
    const subject  = encodeURIComponent('Consulta desde la web de Dinter' + (producto ? ' – ' + producto : ''));
    const body     = encodeURIComponent(`Nombre: ${nombre}\nMail: ${mail}\nProducto: ${producto}\n\n${mensaje}`);
    window.location.href = `mailto:dinter111@hotmail.com?subject=${subject}&body=${body}`;
  }
  var boton = document.querySelector('.form-submit');
  if (boton) boton.addEventListener('click', sendMail);
})();
