# Auditoría SEO Completa — Finucrochet

- **URL auditada:** https://www.finucrochet.com/
- **Fecha:** 2026-07-28
- **Tipo de negocio detectado:** Servicio local / Taller artesanal *made-to-order* (híbrido: local Medellín + envíos a toda Colombia). No transaccional (cotización por WhatsApp).
- **Alojamiento:** GitHub Pages (CDN Fastly)
- **Alcance del rastreo:** 1 página (sitio single-page). 46 piezas de galería renderizadas por JavaScript.

---

## 1. Resumen Ejecutivo

### 🟢 SEO Health Score: **81 / 100** — Bueno

El sitio está técnicamente muy bien construido para ser una landing de una sola página: HTTPS forzado, redirecciones canónicas correctas, meta-etiquetas completas, Open Graph/Twitter, schema.org extenso, `llms.txt` ejemplar y buen uso de WebP con dimensiones explícitas. Los puntos de mejora se concentran en **arquitectura de una sola página** (limita el alcance de keywords), **E-E-A-T** (falta autoría real del artesano), un **riesgo de política en el `aggregateRating`**, y el hecho de que **el catálogo se genera con JavaScript** (invisible para rastreadores de IA que no ejecutan JS).

| Categoría | Peso | Puntaje |
|-----------|------|---------|
| SEO Técnico | 22% | 90 |
| Calidad de Contenido | 23% | 72 |
| SEO On-Page | 20% | 82 |
| Schema / Datos Estructurados | 10% | 75 |
| Rendimiento (CWV) | 10% | 80* |
| Preparación para IA | 10% | 85 |
| Imágenes | 5% | 85 |

\* Estimado en laboratorio: la API de PageSpeed estaba con límite de tasa (sin clave propia) y no hay datos de campo CrUX disponibles.

### Top 5 problemas críticos / importantes
1. **`aggregateRating` con `ratingCount: 47` pero solo 3 reseñas visibles** — riesgo de que Google ignore los rich results o marque los datos como no genuinos. *(Alta)*
2. **Arquitectura de una sola página** — todas las categorías (pesebres, llaveros, animales, personajes, decoración) compiten por una única URL; se pierde potencial de posicionamiento por consulta específica. *(Alta)*
3. **Catálogo (46 piezas) y schema `VisualArtwork` inyectados por JavaScript** — invisibles para GPTBot/PerplexityBot y otros rastreadores que no ejecutan JS. *(Media-Alta)*
4. **Falta señal de autoría / E-E-A-T** — no hay nombre ni historia de la persona artesana; debilita "Experiencia" y "Autoría". *(Media)*
5. **`.htaccess` y `docker-compose.yml` son código muerto en GitHub Pages** — las reglas de GZIP, caché y seguridad NO se aplican en producción; dan una falsa sensación de estar configuradas. *(Media / housekeeping)*

### Top 5 quick wins
1. Ajustar `ratingCount` para que coincida con las reseñas reales publicadas (o mostrar en página las 47 reseñas). *(15 min)*
2. Añadir keyword primaria al `<h1>` o a un `H2` temprano (hoy el H1 es "Arte en cada puntada", sin "amigurumis"). *(10 min)*
3. Acortar la meta description a ≤160 caracteres para evitar truncado en SERP. *(5 min)*
4. Añadir `BreadcrumbList` (el comentario del código lo menciona pero no existe) y bloque `Person`/artesana en el schema. *(30 min)*
5. Recomprimir las ~10 imágenes de galería que superan 300 KB. *(30 min)*

---

## 2. SEO Técnico — 90/100

| Ítem | Estado |
|------|--------|
| HTTPS | ✅ Forzado |
| HTTP → HTTPS | ✅ 301 |
| `finucrochet.com` → `www` | ✅ 301 (consolidación canónica) |
| `<link rel="canonical">` | ✅ Autorreferencial correcto |
| `robots.txt` | ✅ Válido, `Allow: /`, referencia sitemap |
| `sitemap.xml` | ✅ Válido, con extensión de imágenes, `lastmod` 2026-06-18 |
| `hreflang` | ✅ `es-CO` + `x-default` |
| Meta robots | ✅ `index, follow, max-image-preview:large` |
| Viewport responsive | ✅ |
| Compresión (gzip/brotli) | ✅ Automática vía Fastly |
| Caché HTTP | ✅ `Cache-Control: max-age=600` (HTML) |

**Hallazgos:**
- **Sin cabeceras de seguridad** (HSTS, `X-Content-Type-Options`, CSP, `Referrer-Policy`). GitHub Pages no permite cabeceras personalizadas, por lo que es una limitación del hosting, no un error. Impacto SEO bajo.
- **`.htaccess` inoperante:** contiene reglas de `mod_deflate`, `mod_expires` y `Options -Indexes`. En GitHub Pages (que no es Apache) **no se ejecutan**. La compresión y caché reales las provee Fastly automáticamente, así que el efecto neto es correcto, pero el archivo es engañoso y debería eliminarse o documentarse.
- **`docker-compose.yml` (nginx)** tampoco participa en producción; es solo para desarrollo local.
- **Archivo `053d9cecbcd2bdbe52f2d611e8479016.txt`**: parece una clave de verificación (formato IndexNow / verificación de propiedad). Responde 200 OK. Inofensivo.

---

## 3. Indexabilidad — OK

- Página única con canónica autorreferencial; sin `noindex`, sin bloqueos en `robots.txt`. ✅
- El sitemap declara una sola URL (`/`), coherente con el sitio. ✅
- **Nota:** al ser SPA-estática con galería por JS, Google (que renderiza JS) indexará el contenido, pero conviene verificar en Search Console la cobertura y el renderizado (prueba de resultados enriquecidos / inspección de URL).

---

## 4. SEO On-Page — 82/100

| Elemento | Valor | Evaluación |
|----------|-------|------------|
| `<title>` | "Amigurumis Medellín \| Tejidos a Crochet 100% Algodón \| Finucrochet" (~63 car.) | ✅ Óptimo |
| Meta description | ~200 car. | ⚠️ Se truncará en SERP (recortar a ≤160) |
| H1 | "Arte en cada puntada" | ⚠️ Sin keyword primaria ("amigurumis") |
| Jerarquía de encabezados | H1 → H2 (secciones) → H3 (proceso/FAQ) | ✅ Lógica y única |
| Enlaces internos | Anclas a secciones + footer | ✅ Correcto para SPA |
| Nombres de imagen | Descriptivos (`pesebre.webp`, `virgen_maria.webp`) | ✅ |

**Hallazgos:**
- **Brecha de keyword en el H1.** El eyebrow ("Amigurumis artesanales — Medellín, Colombia") sí la contiene, pero el H1 semántico no. Recomendable reforzar.
- **Arquitectura de una sola página.** Toda la temática vive en `/`. Para consultas como "pesebre a crochet Medellín", "llaveros amigurumi personalizados", "amigurumi mascota personalizada", páginas dedicadas rankearían mejor. Es la mayor palanca de crecimiento a mediano plazo.

---

## 5. Calidad de Contenido & E-E-A-T — 72/100

**Fortalezas:**
- Secciones claras: Nosotros, Proceso (4 pasos), Materiales, FAQ (6 preguntas útiles), Testimonios. ✅
- Contenido localizado (Medellín, Antioquia, envíos Colombia) y específico (materiales, tiempos de entrega, pagos). ✅ (buenas señales de *Trust*).

**Debilidades:**
- **Sin autoría real (Expertise/Authoritativeness):** no aparece el nombre ni la historia de la persona que teje. Una biografía de la artesana con foto y trayectoria elevaría notablemente E-E-A-T y la citabilidad en IA.
- **Reseñas sin fecha ni volumen verificable:** solo 3 testimonios visibles frente a `ratingCount: 47` en el schema (ver sección 6).
- **Profundidad temática limitada** por ser una sola página; sin blog ni guías ("cómo cuidar un amigurumi", "ideas de regalo tejido"), lo que reduce oportunidades de captación informacional.

---

## 6. Schema / Datos Estructurados — 75/100

**Implementado (JSON-LD):**
- `LocalBusiness` + `Store` (con `geo`, `areaServed`, `makesOffer`, `aggregateRating`, `review`) ✅
- `WebSite` ✅
- `FAQPage` — coincide con el FAQ visible ✅ (bien hecho)
- `VisualArtwork` × 46 — inyectado por JS ⚠️

**Hallazgos:**
- **⚠️ Riesgo de política — `aggregateRating`:** `ratingCount`/`reviewCount` = **47** pero solo hay **3** reseñas en el marcado y en la página. Las directrices de Google exigen que las valoraciones sean genuinas y estén presentes en la página. Un desajuste así puede provocar que se ignoren los rich results o, en el peor caso, una acción manual por *spam de datos estructurados*. **Acción:** iguala el conteo a las reseñas reales publicadas, o publica en la página las 47 reseñas que respaldan el número.
- **Reseñas auto-servidas en `LocalBusiness`:** desde 2019 Google restringe los rich snippets de estrellas para reseñas que el propio negocio se aplica a sí mismo (`self-serving`). Es posible que las estrellas no se muestren aunque el marcado sea válido.
- **`VisualArtwork` inyectado por JS:** Googlebot lo renderiza, pero rastreadores sin ejecución de JS no lo ven. Considerar renderizarlo en el HTML estático.
- **Falta `BreadcrumbList`:** el comentario del código (`breadcrumb`) lo anuncia, pero no existe en el grafo. Añadirlo (aunque sea mínimo) cierra la promesa del propio código.
- Sin errores de sintaxis detectados en el JSON-LD estático.

---

## 7. Rendimiento (Core Web Vitals) — 80/100 *(estimado en laboratorio)*

> No se pudieron obtener datos de campo (PageSpeed API con límite de tasa en la clave compartida; sin credenciales CrUX). Estimación basada en análisis estático.

**A favor:**
- Imagen hero con `preload` + `fetchpriority="high"` y `width/height` → buen LCP y sin CLS. ✅
- Fuentes con `preconnect` + carga asíncrona (`onload`) + `display=swap`. ✅
- JS único, pequeño (~21 KB) y `defer`. ✅
- WebP en todas las imágenes; `loading="lazy"` bajo el pliegue. ✅

**A vigilar:**
- **46 `<img>` de galería** se inyectan en el DOM al cargar (aunque `lazy`). Varias superan **300 KB** (p. ej. `pesebre_desierto.webp` 410 KB, `reyes_magos.webp` 392 KB, `pesebre_animales.webp` 369 KB, `llavero_girasol.webp` 324 KB, `conejitas_bebe.webp` 322 KB). Recomprimir reduciría peso total y mejoraría el LCP en móvil si alguna entra en viewport.
- Efecto *parallax* en scroll (transform del hero) — controlado con `rAF` y `prefers-reduced-motion`. ✅

**Acción:** verificar CWV reales en PageSpeed Insights / Search Console con clave propia.

---

## 8. Imágenes — 85/100

- **Formato:** 100% WebP. ✅
- **Dimensiones:** `width`/`height` explícitos en el HTML → previene CLS. ✅
- **Alt text:** descriptivo y localizado en hero, bento y "nosotros" (keyword + Medellín). ✅ Imágenes decorativas con `alt=""` correcto. ✅
- **Galería (por JS):** `alt="{título} — amigurumi tejido a crochet"` — aceptable pero plantillado/genérico; podría enriquecerse por pieza.
- **Oportunidad:** recomprimir las ~10 imágenes >300 KB (objetivo <200 KB para vista de galería).

---

## 9. Preparación para Búsqueda con IA (GEO) — 85/100

**Fortalezas:**
- **`llms.txt` ejemplar:** describe negocio, categorías, materiales, tiempos, política de citación para IA y recursos. Es de lo mejor que se puede tener para GEO. ✅
- Contenido factual, FAQ estructurado y `max-image-preview:large`. ✅
- Política explícita de "no representar precios" alineada con el modelo made-to-order. ✅

**Debilidad principal:**
- **El catálogo y el `VisualArtwork` dependen de JavaScript.** Los rastreadores de IA (GPTBot, PerplexityBot, ClaudeBot, etc.) por lo general **no ejecutan JS**, por lo que "ven" el sitio sin las 46 piezas. La esencia del negocio (el portafolio) queda invisible para respuestas de IA. **Acción:** renderizar la galería (o al menos una lista textual de piezas y categorías) en el HTML estático, o ampliar `llms.txt` con el listado de piezas.

---

## 10. SEO Local — Observaciones

- `LocalBusiness` con `geo`, `addressLocality` (Medellín), `areaServed` (Colombia + Medellín), teléfono, email, `sameAs` (Instagram, Facebook). ✅
- **NAP:** consistente entre schema, `llms.txt` y footer (tel `+57 305 815 7511`, email `finucrochet@gmail.com`). ✅
- **Recomendación clave:** crear/optimizar **Google Business Profile** (categoría "Tienda de artesanías" / "Tienda de manualidades"), pues para "amigurumis Medellín" el *map pack* es decisivo. Vincularlo con `sameAs`.
- Sin dirección de calle (modelo SAB/taller) — aceptable; en GBP configurar "área de servicio".

---

## Anexo — Metodología y limitaciones
- Análisis sobre archivos locales del repositorio + verificación de cabeceras en vivo (`curl`) y contenido renderizado.
- No se ejecutó rastreo multi-página (sitio de una sola URL).
- CWV de campo no disponibles (API con límite de tasa; sin credenciales de Google/CrUX/GSC/GA4). Con credenciales se puede enriquecer vía el agente `seo-google`.
