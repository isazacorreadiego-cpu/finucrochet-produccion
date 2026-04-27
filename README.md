# 🧶 Finucrochet — Página Web

Sitio estático de Finucrochet (amigurumis artesanales en Medellín, Colombia).

## 📁 Estructura

```
finucrochet/
├── index.html         ← Estructura HTML (solo markup + JSON-LD/OG)
├── css/
│   └── styles.css     ← Todos los estilos
├── js/
│   └── main.js        ← Lógica + array de productos (galleryItems = ITEMS)
├── img/               ← Imágenes (.webp recomendado)
├── robots.txt
├── sitemap.xml
├── .htaccess          ← Caché + GZIP para Apache
├── docker-compose.yml ← nginx local en :8080
└── CNAME              ← Dominio GitHub Pages
```

## 🚀 Ver la página localmente

Opción 1 — abrir directamente: doble-click en `index.html`.

Opción 2 — Live Server (recomendado, soporta hot-reload):
1. Instala "Live Server" en VS Code
2. Click derecho en `index.html` → "Open with Live Server"

Opción 3 — Docker:
```bash
docker compose up -d
# Ver en http://localhost:8080
```

## 🖼️ Cómo agregar un trabajo nuevo a la galería

1. Guarda la imagen en `img/` (preferentemente `.webp`).
2. Abre [`js/main.js`](js/main.js) y busca el array `ITEMS`.
3. Agrega un objeto al final, con esta forma:

```javascript
{ img: 'img/MI_IMAGEN.webp', title: 'Nombre Visible', cat: 'decoracion', size: '' },
```

| Campo | Valores |
|-------|---------|
| `cat` | `'navidad'` · `'decoracion'` · `'llaveros'` · `'animales'` · `'personajes'` |
| `size` | `''` (1×1) · `'tall'` (1×2) · `'wide'` (2×1) |

## 🆕 Crear una categoría nueva

1. En `js/main.js`, agrega la categoría al objeto `CATS`:
   ```javascript
   const CATS = { ..., mi_categoria: '🏷️ Mi Categoría' };
   ```
2. En `index.html`, agrega un botón filtro dentro de `#galFilters`:
   ```html
   <button class="gf" data-f="mi_categoria" aria-pressed="false">🏷️ Mi Categoría</button>
   ```
3. Usa `cat: 'mi_categoria'` en los items que correspondan.

## ✏️ Personalización rápida

- **Colores**: variables CSS en [`css/styles.css`](css/styles.css#L7-L24).
- **Textos**: directamente en [`index.html`](index.html).
- **WhatsApp**: cambia la constante `WA` al inicio de [`js/main.js`](js/main.js#L5) (también actualiza los `href="https://wa.me/..."` del HTML).
- **Redes sociales**: actualizar los `<a href>` del footer en [`index.html`](index.html).

## 🌐 SEO incluido

- Meta tags Open Graph + Twitter Card
- JSON-LD `LocalBusiness` para Google Business
- `sitemap.xml` y `robots.txt`
- `prefers-reduced-motion` para accesibilidad
- Imágenes con `width`/`height` para evitar CLS
