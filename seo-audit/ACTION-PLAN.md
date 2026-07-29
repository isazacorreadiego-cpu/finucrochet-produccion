# Plan de Acción SEO — Finucrochet

**Fecha:** 2026-07-28 · **Score actual:** 81/100 · **Objetivo:** 90+/100

Prioridades: 🔴 Crítico (ya) · 🟠 Alto (≤1 semana) · 🟡 Medio (≤1 mes) · ⚪ Bajo (backlog)

---

## ✅ Estado de aplicación (2026-07-28)

Correcciones ya aplicadas al código en esta sesión:

| ID | Corrección | Estado |
|----|------------|--------|
| C1 | `aggregateRating` `ratingCount`/`reviewCount` 47 → **3** (coincide con reseñas reales) | ✅ Hecho |
| A1 | Catálogo visible para IA: bloque `<noscript>` con las piezas + listado en `llms.txt` | ✅ Hecho |
| A2 | H1 ahora inicia con la keyword: "**Amigurumis** — arte en cada puntada" | ✅ Hecho |
| M1 | Meta description recortada a **158 caracteres** (≤160) | ✅ Hecho |
| M2 (parcial) | Comentario del schema corregido (ya no promete breadcrumb/organización inexistentes) | ✅ Hecho |
| M6 | Nota aclaratoria en `.htaccess` (no activo en GitHub Pages) | ✅ Hecho |

Pendientes que **requieren decisión o datos del propietario** (no automatizables sin inventar información):

| ID | Motivo por el que no se auto-aplicó |
|----|--------------------------------------|
| A3 | Crear Google Business Profile — requiere cuenta/gestión del dueño |
| M2 (Person) | Añadir autoría de la artesana — falta el **nombre real** (no debo inventarlo) |
| M3 | Sección de historia/artesana — requiere texto y foto reales |
| M4 | Recomprimir imágenes — para un negocio artesanal la **fidelidad de imagen** prima; mejor revisión visual del dueño |
| M5 | Verificar CWV — requiere clave propia de PageSpeed / Search Console |
| B1–B3 | Cambios estructurales de crecimiento (multipágina, blog, reseñas GBP) |

---

## 🔴 Crítico

### C1. Corregir `aggregateRating` (riesgo de política de datos estructurados)
- **Problema:** `ratingCount`/`reviewCount = 47` con solo 3 reseñas visibles. Google puede ignorar los rich results o penalizar por datos no genuinos.
- **Acción (elige una):**
  - **A (rápida):** bajar `ratingCount` y `reviewCount` al número real de reseñas publicadas (p. ej. 3), o al número real que puedas respaldar.
  - **B (mejor):** publicar en la página las reseñas reales (con nombre y, si es posible, fecha) que justifiquen el número, e idealmente migrar a reseñas de Google Business Profile.
- **Archivo:** `index.html` (líneas ~90–117).
- **Esfuerzo:** 15 min (A) / 2–3 h (B).

---

## 🟠 Alto

### A1. Renderizar el catálogo en HTML estático (SEO + GEO)
- **Problema:** las 46 piezas y el schema `VisualArtwork` se generan por JS → invisibles para rastreadores de IA sin ejecución de JS.
- **Acción:** generar el markup de la galería en el HTML (build step o volcado estático) o, como mínimo, añadir un `<noscript>`/listado textual de piezas y categorías. Complementariamente, listar las piezas en `llms.txt`.
- **Esfuerzo:** 2–4 h.

### A2. Añadir keyword primaria al H1
- **Problema:** H1 = "Arte en cada puntada" (sin "amigurumis").
- **Acción:** reforzar el H1 o un H2 temprano con "Amigurumis artesanales a crochet en Medellín" sin sacrificar el diseño (p. ej. subtítulo semántico).
- **Archivo:** `index.html` (~línea 189).
- **Esfuerzo:** 10–20 min.

### A3. Crear/optimizar Google Business Profile
- **Problema:** para "amigurumis Medellín" el *map pack* domina; hoy no se aprovecha.
- **Acción:** crear GBP (área de servicio), categorías correctas, fotos del portafolio, y enlazarlo en `sameAs` del schema.
- **Esfuerzo:** 1–2 h.

---

## 🟡 Medio

### M1. Acortar meta description a ≤160 caracteres
- Evita truncado en SERP. `index.html` línea 7. **5 min.**

### M2. Añadir `BreadcrumbList` y bloque `Person` (artesana) al schema
- El comentario del código promete "breadcrumb" pero no existe. Añadir también autoría real (nombre/historia) para E-E-A-T. **30–45 min.**

### M3. Sección de autoría / historia de la artesana
- Foto + nombre + trayectoria ("5 años tejiendo…"). Sube E-E-A-T y citabilidad en IA. **1–2 h.**

### M4. Recomprimir imágenes de galería >300 KB
- ~10 archivos (p. ej. `pesebre_desierto`, `reyes_magos`, `pesebre_animales`, `llavero_girasol`, `conejitas_bebe`). Objetivo <200 KB. **30–60 min.**

### M5. Verificar Core Web Vitals reales
- PageSpeed Insights con clave propia + Search Console. Confirmar LCP/INP/CLS en móvil. **30 min.**

### M6. Eliminar/documentar código muerto de hosting
- `.htaccess` (reglas Apache) y `docker-compose.yml` no aplican en GitHub Pages. Eliminar de producción o mover a una carpeta `dev/` con nota. Evita confusión futura sobre dónde se configuran caché/compresión/seguridad. **15 min.**

---

## ⚪ Bajo (backlog / crecimiento)

### B1. Evolucionar hacia arquitectura multipágina
- Páginas dedicadas por categoría (Pesebres, Llaveros, Animales, Personajes, Decoración) y/o piezas destacadas, cada una con URL, title y schema propios. Es la palanca de crecimiento orgánico más grande a mediano plazo.

### B2. Blog / guías de contenido informacional
- "Cómo cuidar tu amigurumi", "ideas de regalos tejidos", "pesebres a crochet paso de inspiración". Captación top-of-funnel + más superficie para IA.

### B3. Reseñas con fecha y esquema `Review` individual verificable
- Migrar a reseñas reales de GBP/Facebook y reflejarlas con fechas.

---

## Resumen de impacto esperado

| Acción | Palanca | Impacto |
|--------|---------|---------|
| C1 aggregateRating | Evita penalización + habilita rich results | Alto |
| A1 catálogo en HTML | Indexación + visibilidad en IA | Alto |
| A3 Google Business Profile | Map pack local "amigurumis Medellín" | Alto |
| A2 H1 keyword | Relevancia on-page | Medio |
| B1 multipágina | Cobertura de keywords | Alto (mediano plazo) |

**Ruta sugerida:** C1 → A2 → M1 → M6 (esta semana, bajo esfuerzo) → A1, A3, M2–M5 (este mes) → B1, B2 (trimestre).
