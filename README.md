# 🧶 Finucrochet — Página Web

## 📁 Estructura del proyecto

```
finucrochet/
├── index.html              ← Página principal (abrir en navegador)
├── css/
│   └── styles.css          ← Todos los estilos
├── js/
│   └── main.js             ← JavaScript + GALERÍA DE TRABAJOS
├── img/                    ← Todas las imágenes van aquí
│   ├── logo_transparent.png
│   ├── CABECERA.png
│   ├── pesebre.png
│   ├── ANGEL.png
│   ├── LLAVERO_OSO.png
│   └── PIE_DE_PAGINA.jpg
└── README.md               ← Este archivo
```

## 🖼️ Cómo agregar un nuevo trabajo a la galería

### Paso 1: Guarda la imagen
Copia tu nueva imagen a la carpeta `img/`

### Paso 2: Abre `js/main.js` en VS Code
Busca el array `galleryItems` (está bien señalizado con comentarios).

### Paso 3: Agrega un nuevo objeto
Copia y pega este bloque justo antes del cierre del array:

```javascript
{
  img: "img/MI_NUEVA_IMAGEN.png",   // ← Nombre de tu imagen
  title: "Nombre del Trabajo",       // ← Nombre visible
  category: "decoracion",            // ← Categoría (ver abajo)
  size: ""                           // ← Tamaño (ver abajo)
},
```

### Categorías disponibles
| Valor         | Se muestra como   |
|---------------|-------------------|
| `"navidad"`   | 🎄 Navideño       |
| `"decoracion"`| 🏠 Decoración     |
| `"llaveros"`  | 🔑 Llavero        |
| `"animales"`  | 🐻 Animal         |
| `"personajes"`| 👸 Personaje      |

### Tamaños para el grid
| Valor    | Efecto                        |
|----------|-------------------------------|
| `""`     | Tamaño normal (1×1)           |
| `"tall"` | Doble alto (ocupa 2 filas)    |
| `"wide"` | Doble ancho (ocupa 2 columnas)|

## 🆕 Cómo crear una nueva categoría

1. Abre `index.html`
2. Busca la sección `gallery-filters`
3. Agrega un nuevo botón:
```html
<button class="filter-btn" data-filter="mi_categoria">🏷️ Mi Categoría</button>
```
4. Abre `js/main.js`
5. En la función `getCategoryLabel`, agrega:
```javascript
mi_categoria: '🏷️ Mi Categoría',
```
6. Usa `"mi_categoria"` como category en tus nuevos items

## 🚀 Cómo ver la página

Abre `index.html` directamente en tu navegador, o usa Live Server en VS Code:
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html` → "Open with Live Server"

## ✏️ Personalización rápida

- **Colores**: Edita las variables CSS en `css/styles.css` (líneas 7-19)
- **Textos**: Edita directamente en `index.html`
- **WhatsApp**: Cambia `https://wa.me/` por `https://wa.me/57TUNUMERO` en `index.html`
- **Redes sociales**: Busca los `href="#"` en el footer y reemplaza con tus URLs
