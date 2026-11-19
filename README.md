# Dinter

Sitio de Dinter – Instrumentos de medición y control. HTML, CSS y JS sin dependencias, publicado en GitHub Pages.

## Estructura de estilos

- `style.css` — base compartida por todas las páginas (encabezado, menú, pie, franja de cotización).
- `css/inicio.css` — lo propio del inicio.
- `css/fondos.css` — fondos: banner con cintas (`imagenes/fondo-ola.svg`), franjas verdes y fondo de las fotos.
- `css/carrusel.css`, `css/lineas.css`, `css/modelos.css`, `css/producto.css`, `css/sensores.css`, `css/botones.css`, `css/movil.css`.

## Cuando haya dominio propio

Reemplazar `https://luzzzen.github.io/dinter/` por la dirección nueva en:

1. Todas las páginas: `<link rel="canonical">`, `og:url` y `og:image` (buscar y reemplazar en el proyecto).
2. `404.html`: la etiqueta `<base href>` (es la única).
3. `index.html`: los datos estructurados (`application/ld+json`).
4. `sitemap.xml` y `robots.txt`.

Con dominio propio `robots.txt` empieza a funcionar: en `luzzzen.github.io/dinter/` los buscadores no lo leen porque no está en la raíz del dominio.
