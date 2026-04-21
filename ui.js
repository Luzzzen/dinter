// Fragmentos compartidos – Dinter
const DinterUI = {

  header: (base = '') => `
<header>
  <a href="${base}index.html" class="logo">
    <img src="${base}Dinter_Logo.png" alt="Dinter" />
  </a>
  <nav>
    <div class="nav-dropdown">
      <a href="#">La Empresa</a>
      <div class="dropdown-menu">
        <a href="${base}nosotros.html">Acerca de nosotros</a>
        <a href="${base}como-llegar.html">Cómo llegar</a>
      </div>
    </div>
    <div class="nav-dropdown">
      <a href="${base}productos.html">Productos</a>
      <div class="dropdown-menu">
        <a href="${base}productos/amperimetros.html">Amperímetros</a>
        <a href="${base}productos/colada-caliente.html">Colada caliente</a>
        <a href="${base}productos/contadores.html">Contadores</a>
        <a href="${base}productos/controladores-temperatura.html">Controladores de temperatura</a>
        <a href="${base}productos/dosificadores-agua.html">Dosificadores de agua</a>
        <a href="${base}productos/humedad.html">Humedad</a>
        <a href="${base}productos/sensores.html">Sensores</a>
        <a href="${base}productos/temporizadores.html">Temporizadores</a>
        <a href="${base}productos/termometro.html">Termómetro</a>
        <a href="${base}productos/variador-velocidad.html">Variador de velocidad</a>
      </div>
    </div>
    <a href="${base}contacto.html" class="nav-cta">Contacto</a>
  </nav>
  <button class="hamburger" id="hamburger-btn" aria-label="Menú">
    <span></span><span></span><span></span>
  </button>
</header>

<div class="drawer-overlay" id="drawer-overlay"></div>
<div class="drawer" id="drawer">
  <div class="drawer-header">
    <a href="${base}index.html">
      <img src="${base}Dinter_Logo.png" alt="Dinter" />
    </a>
    <button class="drawer-close" id="drawer-close">✕</button>
  </div>
  <div class="drawer-section">
    <p class="drawer-section-label">La empresa</p>
    <a href="${base}index.html">Inicio</a>
    <a href="${base}nosotros.html">Acerca de nosotros</a>
    <a href="${base}como-llegar.html">Cómo llegar</a>
  </div>
  <div class="drawer-section">
    <p class="drawer-section-label">Productos</p>
    <a href="${base}productos/amperimetros.html">Amperímetros</a>
    <a href="${base}productos/colada-caliente.html">Colada caliente</a>
    <a href="${base}productos/contadores.html">Contadores</a>
    <a href="${base}productos/controladores-temperatura.html">Controladores de temperatura</a>
    <a href="${base}productos/dosificadores-agua.html">Dosificadores de agua</a>
    <a href="${base}productos/humedad.html">Humedad</a>
    <a href="${base}productos/sensores.html">Sensores</a>
    <a href="${base}productos/temporizadores.html">Temporizadores</a>
    <a href="${base}productos/termometro.html">Termómetro</a>
    <a href="${base}productos/variador-velocidad.html">Variador de velocidad</a>
  </div>
  <div class="drawer-cta">
    <a href="https://wa.me/541150021965" target="_blank">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Contactar por WhatsApp
    </a>
  </div>
</div>`,

  navStrip: (base = '', active = '') => `
<nav class="nav-strip">
  <a href="${base}index.html" ${active === 'inicio' ? 'class="active"' : ''}>Inicio</a>
  <div class="nav-strip-sep"></div>
  <a href="${base}nosotros.html" ${active === 'nosotros' ? 'class="active"' : ''}>La empresa</a>
  <a href="${base}como-llegar.html" ${active === 'como-llegar' ? 'class="active"' : ''}>Cómo llegar</a>
  <div class="nav-strip-sep"></div>
  <a href="${base}productos/contadores.html" ${active === 'contadores' ? 'class="active"' : ''}>Contadores</a>
  <a href="${base}productos/controladores-temperatura.html" ${active === 'controladores' ? 'class="active"' : ''}>Control. temperatura</a>
  <a href="${base}productos/temporizadores.html" ${active === 'temporizadores' ? 'class="active"' : ''}>Temporizadores</a>
  <a href="${base}productos/dosificadores-agua.html" ${active === 'dosificadores' ? 'class="active"' : ''}>Dosificadores</a>
  <a href="${base}productos/amperimetros.html" ${active === 'amperimetros' ? 'class="active"' : ''}>Amperímetros</a>
  <a href="${base}productos/sensores.html" ${active === 'sensores' ? 'class="active"' : ''}>Sensores</a>
  <a href="${base}productos/humedad.html" ${active === 'humedad' ? 'class="active"' : ''}>Humedad</a>
  <a href="${base}productos/termometro.html" ${active === 'termometro' ? 'class="active"' : ''}>Termómetro</a>
  <a href="${base}productos/variador-velocidad.html" ${active === 'variador' ? 'class="active"' : ''}>Variador veloc.</a>
  <div class="nav-strip-sep"></div>
  <a href="${base}contacto.html" ${active === 'contacto' ? 'class="active"' : ''}>Contacto</a>
</nav>`,

  footer: (base = '') => `
<div class="contact-strip">
  <div>
    <h2>¿Necesitás una cotización?</h2>
    <p>Contactanos por WhatsApp o teléfono. Respondemos en el día.</p>
  </div>
  <div class="contact-actions">
    <a href="https://wa.me/541150021965" target="_blank" class="btn-wa">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      WhatsApp
    </a>
    <a href="tel:+541144853764" class="btn-tel">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>
      44853764
    </a>
  </div>
</div>
<footer>
  <div class="footer-brand">
    <img src="${base}Dinter_Logo.png" alt="Dinter" />
    <p>Instrumentos de medición y control fabricados en Argentina.</p>
  </div>
  <div class="footer-col">
    <h4>La empresa</h4>
    <a href="${base}nosotros.html">Acerca de nosotros</a>
    <a href="${base}como-llegar.html">Cómo llegar</a>
  </div>
  <div class="footer-col">
    <h4>Productos</h4>
    <a href="${base}productos/contadores.html">Contadores</a>
    <a href="${base}productos/controladores-temperatura.html">Controladores de temp.</a>
    <a href="${base}productos/temporizadores.html">Temporizadores</a>
    <a href="${base}productos/dosificadores-agua.html">Dosificadores de agua</a>
    <a href="${base}productos.html">Ver todos →</a>
  </div>
  <div class="footer-col">
    <h4>Contacto</h4>
    <a href="https://wa.me/541150021965" target="_blank">WhatsApp: 1150021965</a>
    <a href="tel:+541144853764">Tel: 44853764</a>
    <a href="mailto:dinter111@hotmail.com">dinter111@hotmail.com</a>
    <p>París 1824, Isidro Casanova<br/>Buenos Aires</p>
  </div>
</footer>
<div class="footer-bottom">
  <p>© <span class="year"></span> Dinter. Todos los derechos reservados.</p>
  <p>Instrumentos de Medición y Control</p>
</div>`,

  init: () => {
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
  }
};
