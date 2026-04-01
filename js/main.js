/* ═══════════════════════════════════════════════
   FINUCROCHET — JavaScript Principal
   ═══════════════════════════════════════════════ */

// ── Navbar scroll effect ──
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── Reveal on scroll ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => revealObserver.observe(el));


/* ═══════════════════════════════════════════════
   SISTEMA DE GALERÍA
   ═══════════════════════════════════════════════
   
   Para agregar un nuevo trabajo a la galería, 
   simplemente agrega un nuevo objeto al array
   "galleryItems" siguiendo este formato:

   {
     img: "img/nombre_de_tu_imagen.webp",  ← ruta de la imagen
     title: "Nombre del Trabajo",         ← nombre que aparecerá
     category: "navidad",                 ← categoría para filtrar
     size: ""                             ← "" normal, "tall" alto, "wide" ancho
   }

   CATEGORÍAS disponibles (puedes crear nuevas):
   - "navidad"     → Navideños
   - "decoracion"  → Decoración
   - "llaveros"    → Llaveros
   - "animales"    → Animales
   - "personajes"  → Personajes

   Para crear una NUEVA CATEGORÍA:
   1. Agrega un nuevo <button> en el HTML dentro de .gallery-filters
   2. Usa el nuevo nombre en data-filter y en category aquí

   TAMAÑOS para el grid:
   - ""      → tamaño normal (1x1)
   - "tall"  → ocupa 2 filas de alto
   - "wide"  → ocupa 2 columnas de ancho

   ═══════════════════════════════════════════════ */

const galleryItems = [
  
  // ┌─────────────────────────────────────────┐
  // │  🎄 TRABAJOS ACTUALES                   │
  // └─────────────────────────────────────────┘

  {
    img: "img/pesebre.webp",
    title: "Pesebre Navideño",
    category: "navidad",
    size: "wide"          // Se ve grande porque es un set completo
  },
  {
    img: "img/ANGEL.webp",
    title: "Ángel Guardián",
    category: "navidad",
    size: "tall"           // Se ve alto porque la figura es vertical
  },
  {
    img: "img/LLAVERO_OSO.webp",
    title: "Llavero Osito",
    category: "llaveros",
    size: ""               // Tamaño normal
  },

  // ┌─────────────────────────────────────────┐
  // │  ✨ AGREGA TUS NUEVOS TRABAJOS AQUÍ ✨  │
  // │                                         │
  // │  Copia y pega este bloque por cada       │
  // │  nuevo trabajo que quieras agregar:       │
  // │                                         │
  // │  {                                       │
  // │    img: "img/MI_IMAGEN.webp",            │
  // │    title: "Nombre del Trabajo",          │
  // │    category: "decoracion",               │
  // │    size: ""                              │
  // │  },                                      │
  // │                                         │
  // │  Recuerda:                               │
  // │  1. Guardar la imagen en la carpeta img/ │
  // │  2. Poner la ruta correcta en "img:"    │
  // │  3. La coma al final es importante!      │
  // └─────────────────────────────────────────┘

  // ┌─────────────────────────────────────────┐
  // │  🐾 ANIMALES Y PERSONAJES              │
  // └─────────────────────────────────────────┘

  {
    img: "img/beagle.webp",
    title: "Beagle con Pañuelo",
    category: "animales",
    size: "tall"
  },
  {
    img: "img/conejo.webp",
    title: "Conejita con Overol",
    category: "animales",
    size: "tall"
  },
  {
    img: "img/frailejon.webp",
    title: "Frailejón Mágico",
    category: "personajes",
    size: ""
  },
  {
    img: "img/gato_dormido.webp",
    title: "Gatito Dormilón",
    category: "animales",
    size: "wide"
  },
  {
    img: "img/gato_grande.webp",
    title: "Gato Ángel",
    category: "animales",
    size: ""
  },
  {
    img: "img/llavero_tortuga.webp",
    title: "Llavero Tortuga",
    category: "llaveros",
    size: ""
  },

  // ── Nuevos trabajos ──
  { img: "img/pesebre_animales.webp", title: "Animales del Pesebre", category: "navidad", size: "wide" },
  { img: "img/pesebre_completo.webp", title: "Pesebre Completo", category: "navidad", size: "wide" },
  { img: "img/reyes_magos.webp", title: "Reyes Magos", category: "navidad", size: "wide" },
  { img: "img/arbol_navidad.webp", title: "Árbol de Navidad", category: "navidad", size: "tall" },
  { img: "img/arbol_navidad2.webp", title: "Árbol de Navidad Desmontable", category: "navidad", size: "" },
  { img: "img/pesebre_desierto.webp", title: "Pesebre en el Desierto", category: "navidad", size: "wide" },
  { img: "img/gorro_navidad.webp", title: "Gorro Navideño", category: "navidad", size: "" },
  { img: "img/virgen_maria.webp", title: "Virgen María", category: "personajes", size: "tall" },
  { img: "img/muñeco_graduado.webp", title: "Muñeco Graduado", category: "personajes", size: "" },
  { img: "img/bailarina.webp", title: "Bailarina", category: "personajes", size: "tall" },
  { img: "img/llavero_virgen.webp", title: "Llavero Virgen", category: "llaveros", size: "" },
  { img: "img/llavero_cactus.webp", title: "Llavero Cactus", category: "llaveros", size: "" },
  { img: "img/llavero_cactus2.webp", title: "Llavero Cactus con Flor", category: "llaveros", size: "" },
  { img: "img/conejitas_bebe.webp", title: "Conejitas Bebé", category: "animales", size: "wide" },
  { img: "img/oveja.webp", title: "Ovejita", category: "animales", size: "" },
  { img: "img/vaca.webp", title: "Vaquita", category: "animales", size: "" },
  { img: "img/perro_golden.webp", title: "Perro Golden", category: "animales", size: "tall" },
  { img: "img/perro_cafe.webp", title: "Perrito Café", category: "animales", size: "wide" },
  { img: "img/rosa_amarilla.webp", title: "Rosa Amarilla", category: "decoracion", size: "tall" },
  { img: "img/saco_bebe.webp", title: "Saco Bebé", category: "decoracion", size: "" },

  // ┌─────────────────────────────────────────┐
  // │  ✨ AGREGA TUS NUEVOS TRABAJOS AQUÍ ✨  │
  // │                                         │
  // │  Copia y pega este bloque por cada       │
  // │  nuevo trabajo que quieras agregar:       │
  // │                                         │
  // │  {                                       │
  // │    img: "img/MI_IMAGEN.webp",            │
  // │    title: "Nombre del Trabajo",          │
  // │    category: "decoracion",               │
  // │    size: ""                              │
  // │  },                                      │
  // │                                         │
  // │  Recuerda:                               │
  // │  1. Guardar la imagen en la carpeta img/ │
  // │  2. Poner la ruta correcta en "img:"    │
  // │  3. La coma al final es importante!      │
  // └─────────────────────────────────────────┘


  // ── Segunda tanda de trabajos ──
  { img: "img/llavero_girasol.webp", title: "Llavero Girasol", category: "llaveros", size: "" },
  { img: "img/llavero_ositos_coleccion.webp", title: "Colección Llaveros Ositos", category: "llaveros", size: "wide" },
  { img: "img/llavero_osita_lazo.webp", title: "Llavero Osita con Lazo", category: "llaveros", size: "tall" },
  { img: "img/llavero_osita_lazo2.webp", title: "Llavero Osita Lazo Rojo", category: "llaveros", size: "" },
  { img: "img/llavero_osito_clasico.webp", title: "Llavero Osito Clásico", category: "llaveros", size: "tall" },
  { img: "img/angel_guardiana.webp", title: "Ángel Guardiana", category: "personajes", size: "tall" },
  { img: "img/flores_maceta.webp", title: "Flores en Maceta", category: "decoracion", size: "" },
  { img: "img/lirio_maceta.webp", title: "Lirio Rosa en Maceta", category: "decoracion", size: "tall" },
  { img: "img/girasol_maceta.webp", title: "Girasol en Maceta", category: "decoracion", size: "tall" },
  { img: "img/pesebre_sencillo.webp", title: "Pesebre Sencillo", category: "navidad", size: "wide" },
  { img: "img/rosa_empacada.webp", title: "Rosa Empacada para Regalo", category: "decoracion", size: "tall" },
  { img: "img/rosa_grande.webp", title: "Rosa Grande", category: "decoracion", size: "tall" },
  { img: "img/coleccion_productos.webp", title: "Colección Finucrochet", category: "decoracion", size: "wide" },

];


// ── Renderizar galería ──
function renderGallery(filter = 'todos') {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  grid.innerHTML = '';

  galleryItems.forEach((item, index) => {
    const show = filter === 'todos' || item.category === filter;

    const div = document.createElement('div');
    div.className = `gallery-item ${item.size} reveal visible ${show ? '' : 'hidden'}`;
    div.setAttribute('data-category', item.category);
    div.setAttribute('data-index', index);
    div.onclick = () => openLightbox(index);

    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay">
        <h4>${item.title}</h4>
        <p>${getCategoryLabel(item.category)}</p>
      </div>
    `;

    grid.appendChild(div);
  });
}

// ── Nombre bonito para cada categoría ──
function getCategoryLabel(cat) {
  const labels = {
    navidad: '🎄 Navideño',
    decoracion: '🏠 Decoración',
    llaveros: '🔑 Llavero',
    animales: '🐻 Animal',
    personajes: '👸 Personaje'
    // Agrega más categorías aquí si creas nuevas
  };
  return labels[cat] || cat;
}

// ── Filtros de la galería ──
document.addEventListener('DOMContentLoaded', () => {
  renderGallery();

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Actualizar botón activo
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filtrar
      const filter = btn.getAttribute('data-filter');
      renderGallery(filter);
    });
  });
});


/* ═══════════════════════════════════════════════
   LIGHTBOX (ver imágenes en grande)
   ═══════════════════════════════════════════════ */
let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  const item = galleryItems[index];
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');
  const cat = document.getElementById('lightboxCat');

  img.src = item.img;
  img.alt = item.title;
  title.textContent = item.title;
  cat.textContent = getCategoryLabel(item.category);

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  const visibleItems = galleryItems
    .map((item, i) => ({ ...item, originalIndex: i }))
    .filter(item => {
      const el = document.querySelector(`.gallery-item[data-index="${item.originalIndex}"]`);
      return el && !el.classList.contains('hidden');
    });

  const currentVisible = visibleItems.findIndex(item => item.originalIndex === currentLightboxIndex);
  let newIndex = currentVisible + direction;

  if (newIndex < 0) newIndex = visibleItems.length - 1;
  if (newIndex >= visibleItems.length) newIndex = 0;

  openLightbox(visibleItems[newIndex].originalIndex);
}

// Cerrar con Escape, navegar con flechas
document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox || !lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
});
