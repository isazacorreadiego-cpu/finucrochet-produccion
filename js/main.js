/* ═══════════════════════════════════════════════
   FINUCROCHET — JavaScript principal
═══════════════════════════════════════════════ */

const WA = '573058157511';
const PER = 4;

/* ── Datos de galería (única fuente de verdad) ──
   Para agregar un trabajo nuevo:
   1. Guarda la imagen en img/ (preferentemente .webp)
   2. Agrega un objeto al final del array con:
      { img, title, cat, size }
   - cat: 'navidad' | 'decoracion' | 'llaveros' | 'animales' | 'personajes'
   - size: '' (1×1) | 'tall' (1×2) | 'wide' (2×1)
*/
const ITEMS = [
  { img: 'img/pesebre.webp',                   title: 'Pesebre Navideño',         cat: 'navidad',     size: 'wide' },
  { img: 'img/ANGEL.webp',                     title: 'Ángel Guardián',           cat: 'navidad',     size: 'tall' },
  { img: 'img/LLAVERO_OSO.webp',               title: 'Llavero Osito',            cat: 'llaveros',    size: '' },
  { img: 'img/beagle.webp',                    title: 'Beagle con Pañuelo',       cat: 'animales',    size: 'tall' },
  { img: 'img/conejo.webp',                    title: 'Conejita con Overol',      cat: 'animales',    size: 'tall' },
  { img: 'img/frailejon.webp',                 title: 'Frailejón Mágico',         cat: 'personajes',  size: '' },
  { img: 'img/gato_dormido.webp',              title: 'Gatito Dormilón',          cat: 'animales',    size: 'wide' },
  { img: 'img/gato_grande.webp',               title: 'Gato Ángel',               cat: 'animales',    size: '' },
  { img: 'img/llavero_tortuga.webp',           title: 'Llavero Tortuga',          cat: 'llaveros',    size: '' },
  { img: 'img/pesebre_animales.webp',          title: 'Animales del Pesebre',     cat: 'navidad',     size: 'wide' },
  { img: 'img/pesebre_completo.webp',          title: 'Pesebre Completo',         cat: 'navidad',     size: 'wide' },
  { img: 'img/reyes_magos.webp',               title: 'Reyes Magos',              cat: 'navidad',     size: 'wide' },
  { img: 'img/arbol_navidad.webp',             title: 'Árbol de Navidad',         cat: 'navidad',     size: 'tall' },
  { img: 'img/arbol_navidad2.webp',            title: 'Árbol Desmontable',        cat: 'navidad',     size: '' },
  { img: 'img/gorro_navidad.webp',             title: 'Gorro Navideño',           cat: 'navidad',     size: '' },
  { img: 'img/virgen_maria.webp',              title: 'Virgen María',             cat: 'personajes',  size: 'tall' },
  { img: 'img/muneco_graduado.webp',           title: 'Muñeco Graduado',          cat: 'personajes',  size: '' },
  { img: 'img/bailarina.webp',                 title: 'Bailarina',                cat: 'personajes',  size: 'tall' },
  { img: 'img/llavero_virgen.webp',            title: 'Llavero Virgen',           cat: 'llaveros',    size: '' },
  { img: 'img/llavero_cactus.webp',            title: 'Llavero Cactus',           cat: 'llaveros',    size: '' },
  { img: 'img/llavero_cactus2.webp',           title: 'Cactus con Flor',          cat: 'llaveros',    size: '' },
  { img: 'img/conejitas_bebe.webp',            title: 'Conejitas Bebé',           cat: 'animales',    size: 'wide' },
  { img: 'img/oveja.webp',                     title: 'Ovejita',                  cat: 'animales',    size: '' },
  { img: 'img/vaca.webp',                      title: 'Vaquita',                  cat: 'animales',    size: '' },
  { img: 'img/perro_golden.webp',              title: 'Perro Golden',             cat: 'animales',    size: 'tall' },
  { img: 'img/perro_cafe.webp',                title: 'Perrito Café',             cat: 'animales',    size: 'wide' },
  { img: 'img/rosa_amarilla.webp',             title: 'Rosa Amarilla',            cat: 'decoracion',  size: 'tall' },
  { img: 'img/saco_bebe.webp',                 title: 'Saco Bebé',                cat: 'decoracion',  size: '' },
  { img: 'img/angel_guardiana.webp',           title: 'Ángel Guardiana',          cat: 'personajes',  size: 'tall' },
  { img: 'img/flores_maceta.webp',             title: 'Flores en Maceta',         cat: 'decoracion',  size: '' },
  { img: 'img/lirio_maceta.webp',              title: 'Lirio en Maceta',          cat: 'decoracion',  size: 'tall' },
  { img: 'img/girasol_maceta.webp',            title: 'Girasol en Maceta',        cat: 'decoracion',  size: 'tall' },
  { img: 'img/pesebre_sencillo.webp',          title: 'Pesebre Sencillo',         cat: 'navidad',     size: 'wide' },
  { img: 'img/rosa_empacada.webp',             title: 'Rosa para Regalo',         cat: 'decoracion',  size: 'tall' },
  { img: 'img/rosa_grande.webp',               title: 'Rosa Grande',              cat: 'decoracion',  size: 'tall' },
  { img: 'img/coleccion_productos.webp',       title: 'Colección',                cat: 'decoracion',  size: 'wide' },
  { img: 'img/llavero_girasol.webp',           title: 'Llavero Girasol',          cat: 'llaveros',    size: '' },
  { img: 'img/llavero_ositos_coleccion.webp',  title: 'Colección Ositos',         cat: 'llaveros',    size: 'wide' },
  { img: 'img/llavero_osita_lazo.webp',        title: 'Osita con Lazo',           cat: 'llaveros',    size: 'tall' },
  { img: 'img/llavero_osita_lazo2.webp',       title: 'Osita Lazo Rojo',          cat: 'llaveros',    size: '' },
  { img: 'img/llavero_osito_clasico.webp',     title: 'Osito Clásico',            cat: 'llaveros',    size: 'tall' },
  { img: 'img/pesebre_desierto.webp',          title: 'Pesebre Desierto',         cat: 'navidad',     size: 'wide' },
  { img: 'img/flores_amarillo.webp',           title: 'Flores Amarillas en Maceta', cat: 'decoracion', size: 'tall' },
  { img: 'img/flores_rosado.webp',             title: 'Flores Rosadas en Maceta',  cat: 'decoracion',  size: 'tall' },
  { img: 'img/maomao.webp',                    title: 'Maomao',                    cat: 'personajes',  size: 'tall' },
  { img: 'img/perro_personalizado.webp',       title: 'Perro Personalizado',       cat: 'animales',    size: 'tall' },
  { img: 'img/virgen_de_guadalupe.webp',       title: 'Virgen de Guadalupe',       cat: 'personajes',  size: 'tall' },
];

const CATS = {
  navidad:    { label: 'Navideño',    icon: 'i-tree' },
  decoracion: { label: 'Decoración',  icon: 'i-flower' },
  llaveros:   { label: 'Llavero',     icon: 'i-key' },
  animales:   { label: 'Animal',      icon: 'i-bear' },
  personajes: { label: 'Personaje',   icon: 'i-crown' },
};
const catLabel = (k) => CATS[k] ? CATS[k].label : k;
const catIcon  = (k) => CATS[k] ? CATS[k].icon  : 'i-sparkle';

let filt = 'todos', page = 0, vis = [], lbIdx = 0;

/* ── Loader: rápido en visitas repetidas, completo en primera visita ── */
(function hideLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  let hidden = false;
  const hide = () => {
    if (hidden) return;
    hidden = true;
    loader.classList.add('hidden');
    try { localStorage.setItem('finu_seen', '1'); } catch (e) {}
  };
  let isReturning = false;
  try { isReturning = localStorage.getItem('finu_seen') === '1'; } catch (e) {}
  if (isReturning) {
    // Visita repetida: ocultar inmediato al DOMContentLoaded
    if (document.readyState !== 'loading') hide();
    else document.addEventListener('DOMContentLoaded', hide);
    setTimeout(hide, 400);
  } else {
    // Primera visita: mostrar la animación completa
    window.addEventListener('load', hide);
    setTimeout(hide, 2200); // tope máximo
  }
})();

/* ── Cursor personalizado (opt-in con toggle persistente) ── */
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let cursorOn = false;
try { cursorOn = localStorage.getItem('finu_cursor') === '1'; } catch (e) {}
if (cursorOn && finePointer && !reducedMotion) {
  document.body.classList.add('cursor-on');
}

if (finePointer && !reducedMotion) {
  const cur = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (cur) { cur.style.left = mx + 'px'; cur.style.top = my + 'px'; }
  });
  (function animRing() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
    requestAnimationFrame(animRing);
  })();

  // Toggle
  document.addEventListener('DOMContentLoaded', () => {
    const tog = document.getElementById('cursorToggle');
    if (!tog) return;
    tog.addEventListener('click', () => {
      const isOn = document.body.classList.toggle('cursor-on');
      try { localStorage.setItem('finu_cursor', isOn ? '1' : '0'); } catch (e) {}
    });
  });
}

/* ── Hero slideshow: crossfade entre imágenes cada 6s ── */
(function heroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length < 2 || reducedMotion) return;
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove('is-active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('is-active');
  }, 6000);
})();

/* ── Scroll handler con rAF throttle ── */
let scrollTicking = false;
const heroBg = document.getElementById('heroBg');
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    if (heroBg && !reducedMotion) heroBg.style.transform = `translateY(${y * 0.4}px)`;
    if (navEl) navEl.classList.toggle('solid', y > 80);
    scrollTicking = false;
  });
}, { passive: true });

/* ── Hamburger ── */
const burger = document.getElementById('burger');
const nl = document.getElementById('navLinks');
if (burger && nl) {
  burger.addEventListener('click', () => {
    const open = nl.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  nl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nl.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));
}

/* ── Smooth scroll en anclas ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    const t = document.querySelector(href);
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    }
  });
});

/* ── Reveal con IntersectionObserver + counters ── */
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10) || 0;
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.classList.add('in');
        e.target.querySelectorAll('[data-count]').forEach(animateCount);
      }, i * 80);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* ── WhatsApp ── */
function sendWA() {
  const inp = document.getElementById('ctaIn');
  const msg = inp ? inp.value.trim() : '';
  const t = msg
    ? `Hola Finucrochet! 🧶 Quisiera un amigurumi: ${msg}`
    : 'Hola Finucrochet! 🧶 Me gustaría encargar un amigurumi personalizado.';
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(t)}`, '_blank', 'noopener,noreferrer');
}
function consultarProducto(n) {
  const t = `Hola Finucrochet! 🧶 Me interesa: *${n}*. ¿Podrías darme más información?`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(t)}`, '_blank', 'noopener,noreferrer');
}

/* ── Form CTA: submit + Enter ── */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ctaForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      sendWA();
    });
  }

  // Bento cells: accesibilidad por teclado
  document.querySelectorAll('.bento-cell[data-product]').forEach(cell => {
    cell.addEventListener('click', () => consultarProducto(cell.dataset.product));
    cell.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        consultarProducto(cell.dataset.product);
      }
    });
  });
});

/* ══════════════════════════════════════════
   GALLERY MASONRY
══════════════════════════════════════════ */
function buildMasonry() {
  const grid = document.getElementById('masonry');
  if (!grid) return;
  vis = [...ITEMS]; // todos por defecto; los filtros solo ocultan/muestran
  grid.innerHTML = '';
  ITEMS.forEach((item, idx) => {
    const s = document.createElement('button');
    s.className = 'm-card';
    s.type = 'button';
    s.dataset.cat = item.cat;
    s.dataset.idx = idx;
    s.setAttribute('aria-label', `Ver ${item.title} en grande`);
    s.innerHTML =
      `<img src="${item.img}" alt="${item.title} — amigurumi tejido a crochet" loading="lazy">` +
      `<div class="m-info" aria-hidden="true">` +
        `<div class="m-cat"><svg class="icon" aria-hidden="true"><use href="img/icons.svg#${catIcon(item.cat)}"/></svg> ${catLabel(item.cat)}</div>` +
        `<div class="m-name">${item.title}</div>` +
        `<div class="m-btn">Ver detalle <svg class="icon" aria-hidden="true"><use href="img/icons.svg#i-arrow-right"/></svg></div>` +
      `</div>`;
    s.addEventListener('click', () => lbOpen(idx));
    grid.appendChild(s);
  });
}

function applyFilter(f) {
  filt = f;
  vis = f === 'todos' ? [...ITEMS] : ITEMS.filter(i => i.cat === f);
  document.querySelectorAll('.m-card').forEach(card => {
    const show = f === 'todos' || card.dataset.cat === f;
    card.classList.toggle('is-hidden', !show);
  });
}

/* ── Filtros ── */
const galFilters = document.getElementById('galFilters');
if (galFilters) {
  galFilters.addEventListener('click', e => {
    if (!e.target.matches('.gf')) return;
    document.querySelectorAll('.gf').forEach(b => {
      b.classList.remove('on');
      b.setAttribute('aria-pressed', 'false');
    });
    e.target.classList.add('on');
    e.target.setAttribute('aria-pressed', 'true');
    applyFilter(e.target.dataset.f);
  });
}

/* ── Botón "Ver toda la colección" ── */
const seeAllBtn = document.getElementById('seeAllBtn');
if (seeAllBtn) {
  seeAllBtn.addEventListener('click', () => {
    const m = document.getElementById('masonry');
    const expanded = m.classList.toggle('expanded');
    seeAllBtn.innerHTML = expanded
      ? 'Mostrar menos <svg class="icon" aria-hidden="true" style="transform:rotate(180deg)"><use href="img/icons.svg#i-arrow-right"/></svg>'
      : 'Ver toda la colección <svg class="icon" aria-hidden="true"><use href="img/icons.svg#i-arrow-right"/></svg>';
  });
}

/* ══════════════════════════════════════════
   LIGHTBOX (con ficha de producto)
══════════════════════════════════════════ */
function lbOpen(idx) {
  lbIdx = idx;
  const i = ITEMS[idx];
  if (!i) return;
  const lb = document.getElementById('lb');
  document.getElementById('lbImg').src = i.img;
  document.getElementById('lbImg').alt = i.title;
  document.getElementById('lbTitle').textContent = i.title;
  document.getElementById('lbCat').textContent = catLabel(i.cat);
  // Botón "Consultar por WhatsApp" prellenado
  const waBtn = document.getElementById('lbWA');
  if (waBtn) {
    const t = `Hola Finucrochet! 🧶 Me interesa: *${i.title}*. ¿Podrías darme más información?`;
    waBtn.href = `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
  }
  lb.classList.add('on');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function lbClose() {
  const lb = document.getElementById('lb');
  lb.classList.remove('on');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function lbNav(d) {
  // Navegar solo entre los actualmente visibles
  const visibleIdx = ITEMS
    .map((_, i) => i)
    .filter(i => filt === 'todos' || ITEMS[i].cat === filt);
  if (!visibleIdx.length) return;
  const cur = visibleIdx.indexOf(lbIdx);
  const next = (cur + d + visibleIdx.length) % visibleIdx.length;
  lbOpen(visibleIdx[next]);
}
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lb');
  if (!lb || !lb.classList.contains('on')) return;
  if (e.key === 'Escape') lbClose();
  if (e.key === 'ArrowLeft') lbNav(-1);
  if (e.key === 'ArrowRight') lbNav(1);
});

/* ══════════════════════════════════════════
   MICROINTERACCIONES
══════════════════════════════════════════ */

/* Tilt 3D suave en bento cells (solo desktop con puntero fino) */
if (finePointer && !reducedMotion) {
  document.querySelectorAll('.bento-cell').forEach(card => {
    let rafId = null;
    card.style.transformStyle = 'preserve-3d';
    card.addEventListener('mousemove', e => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        const rx = (0.5 - y) * 8;  // grados
        const ry = (x - 0.5) * 8;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
        rafId = null;
      });
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* Magnetic en botones primarios */
  document.querySelectorAll('.btn-fill, .nav-wa').forEach(btn => {
    let rafId = null;
    btn.addEventListener('mousemove', e => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
        rafId = null;
      });
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* Exponer funciones que el HTML llama desde atributos onclick */
window.sendWA = sendWA;
window.consultarProducto = consultarProducto;
window.lbClose = lbClose;
window.lbNav = lbNav;

/* ══════════════════════════════════════════
   SEO: JSON-LD Product por cada amigurumi
══════════════════════════════════════════ */
function slugify(s) {
  return s.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function injectProductSchema() {
  const SITE = 'https://www.finucrochet.com';
  const products = ITEMS.map(item => {
    const slug = slugify(item.title);
    return {
      "@type": "Product",
      "@id": `${SITE}/#producto/${slug}`,
      "sku": slug,
      "name": item.title,
      "image": `${SITE}/${item.img}`,
      "description": `${item.title} — amigurumi tejido a crochet a mano con hilo 100% algodón premium. Pieza única artesanal hecha en Medellín, Colombia. Categoría: ${catLabel(item.cat)}.`,
      "brand": { "@type": "Brand", "name": "Finucrochet" },
      "category": catLabel(item.cat),
      "manufacturer": { "@id": `${SITE}/#business` },
      "material": "Hilo 100% algodón premium",
      "url": `${SITE}/`,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/MadeToOrder",
        "priceCurrency": "COP",
        "seller": { "@id": `${SITE}/#business` },
        "itemCondition": "https://schema.org/NewCondition",
        "areaServed": { "@type": "Country", "name": "Colombia" }
      }
    };
  });
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": products
  });
  document.head.appendChild(script);
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  buildMasonry();
  injectProductSchema();
});
