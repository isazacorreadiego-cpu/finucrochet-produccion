# Análisis de SEO Local — finucrochet.com

- **Fecha:** 2026-07-28
- **URL:** https://www.finucrochet.com/
- **Alojamiento:** GitHub Pages (single-page)

---

## 1. Local SEO Score: **42 / 100** — Necesita trabajo

El sitio está muy bien construido a nivel on-page y de schema, pero la **infraestructura de presencia local está prácticamente ausente**: no hay señales de Google Business Profile, hay muy pocas reseñas y sin citaciones locales. Para un negocio cuyo *core* es "amigurumis Medellín", esto es lo que más frena la visibilidad en el *local pack* y en respuestas de IA.

| # | Dimensión | Peso | Puntaje | Estado |
|---|-----------|------|---------|--------|
| 1 | Señales GBP (Google Business Profile) | 25% | 25 | 🔴 Bajo |
| 2 | Reseñas y reputación | 20% | 30 | 🔴 Bajo |
| 3 | SEO local on-page | 20% | 50 | 🟡 Parcial |
| 4 | Consistencia NAP y citaciones | 15% | 55 | 🟡 Parcial |
| 5 | Schema local | 10% | 80 | 🟢 Fuerte |
| 6 | Enlaces y autoridad local | 10% | 30 | 🔴 Bajo |

**Diagnóstico en una frase:** buen sitio, casi sin presencia local fuera del sitio. La palanca #1 es **crear y optimizar el Google Business Profile**.

---

## 2. Tipo de negocio

**Service Area Business (SAB)** — taller artesanal *made-to-order*.
- No hay dirección de calle visible (solo ciudad: Medellín, Antioquia).
- Lenguaje de cobertura: "envíos a toda Colombia", "Medellín, Colombia".
- Schema con `areaServed` (Colombia + Medellín) y `PostalAddress` **sin** `streetAddress`.
- Modelo de contacto: WhatsApp (no tienda física visitable).

> Implicación: se omiten verificaciones de mapa embebido y dirección física exacta. En el GBP debe configurarse como **"área de servicio"**, no como local visitable, salvo que quieras recibir clientes en un punto.

---

## 3. Vertical de industria

**Genérico / Comercio artesanal (Store)** — no aplica ninguno de los verticales con checks especiales (restaurante, salud, legal, servicios del hogar, inmobiliario, automotriz). Se usa la ruta `LocalBusiness` genérica. El subtipo `Store` actual es adecuado; también encaja `Craftsman`/tienda de manualidades a nivel de categoría GBP.

---

## 4. Checklist de optimización GBP (detectado vs faltante)

| Señal GBP | Estado |
|-----------|--------|
| Perfil de Google Business Profile referenciado en el sitio | ❌ No detectado |
| Mapa de Google embebido / Place ID | ❌ No |
| Widget de reseñas de Google | ❌ No |
| Categoría primaria alineada con el contenido | ⚠️ No verificable (sin GBP) |
| Publicaciones (Posts) activas | ❌ No verificable |
| Fotos del portafolio en GBP | ❌ No verificable |
| Horario de atención visible | ❌ No hay `openingHoursSpecification` |
| `sameAs` a redes sociales | ✅ Instagram + Facebook |

**Acción crítica:** crear el GBP. La **categoría primaria** es el factor #1 del local pack (Whitespark). Sugeridas para Finucrochet:
- Primaria: **"Tienda de artesanías"** (o "Tienda de manualidades").
- Secundarias (hasta 4): "Tienda de regalos", "Servicio de personalización", "Fabricante de juguetes", "Tienda de tejidos/lana".
- Configurar **área de servicio** (Medellín + municipios del Valle de Aburrá + envíos nacionales).
- Subir 15–20 fotos reales del portafolio (los amigurumis venden solos visualmente → +45% de solicitudes de indicaciones con fotos).

---

## 5. Snapshot de reseñas

| Métrica | Valor | Benchmark |
|---------|-------|-----------|
| Reseñas en schema | 3 (tras corrección) | Umbral mágico: **10** (Sterling Sky) |
| Rating | 5.0 ⭐ | 68% de consumidores exigen 4+; 31% exige 4.5+ |
| Recencia (fechas) | ❌ Sin fecha | 74% solo valora reseñas de los últimos 3 meses |
| Reseñas de Google (GBP) | ❌ Ninguna | Fuente principal del local pack |
| Presencia multi-plataforma | ❌ Solo testimonios propios | Consumidores consultan ~6 sitios |
| Respuestas del dueño | ❌ N/A | 88% prefiere negocios que responden |

**Riesgo/observación:** los 3 testimonios del sitio son auto-declarados (sin verificación). Google rara vez muestra estrellas de reseñas auto-servidas en `LocalBusiness`. **La prioridad real es generar reseñas en Google (GBP)**, no en el sitio.

**Regla de los 18 días:** las posiciones locales caen si pasan 3 semanas sin reseñas nuevas. Objetivo inicial: llegar a **10+ reseñas de Google** y mantener cadencia (1 reseña cada ~2 semanas mínimo). Pedirlas por WhatsApp tras cada entrega (con el enlace directo a "escribir reseña").

> ⚠️ **Prohibido el "review gating"** (pre-filtrar a clientes satisfechos antes de mandarlos a Google). Viola políticas de Google y de la FTC. Pide la reseña a **todos** los clientes por igual.

---

## 6. Auditoría de consistencia NAP

| Dato | Página (footer/FAQ) | Schema JSON-LD | Consistencia |
|------|---------------------|----------------|--------------|
| **Nombre** | Finucrochet | Finucrochet | ✅ |
| **Teléfono** | +57 305 815 7511 (texto) / `wa.me/573058157511` | `+57-305-815-7511` | ✅ (mismo número; formato distinto) |
| **Email** | finucrochet@gmail.com | finucrochet@gmail.com | ✅ |
| **Ciudad** | Medellín, Colombia | Medellín, Antioquia, CO | ✅ |
| **Dirección de calle** | — (SAB) | — (sin `streetAddress`) | ✅ coherente |

**Hallazgos:**
- NAP **consistente** entre página y schema. 👍
- ❌ **No hay enlace `tel:` de clic-para-llamar.** El teléfono aparece como texto y como `wa.me`, pero no como `<a href="tel:+573058157511">`. En móvil (donde ocurre el 76% de las búsquedas "cerca de mí") esto cuesta conversiones.
- Cuando exista el GBP, el NAP debe coincidir **exactamente** con el del sitio (mismo número, misma escritura).

---

## 7. Presencia en citaciones (directorios)

> Nota: varias fuentes del framework son de EE. UU. (BBB, Data Axle, Neustar). Adaptado a Colombia.

| Directorio / fuente | Estado | Relevancia |
|---------------------|--------|------------|
| Google Business Profile | ❌ No detectado | 🔴 Crítico (local pack) |
| **Bing Places** | ❌ No detectado | 🔴 Alto — alimenta **ChatGPT, Copilot, Alexa** |
| **Apple Business Connect** | ❌ No detectado | 🟠 Medio — uso creciente (Mapas de Apple) |
| Facebook (página de negocio) | ✅ Presente (`sameAs`) | Media |
| Instagram | ✅ Presente (`sameAs`) | Media (clave para venta visual) |
| Waze / OpenStreetMap | ❌ No detectado | Baja-media |
| Directorios locales CO (PáginasAmarillas, Guía local) | ❌ No detectado | Baja |

**BBB / Chamber of Commerce (EE. UU.) → no aplican.** Equivalente local: **Cámara de Comercio de Medellín** (si el negocio está registrado, mencionarlo aporta señal de confianza).

---

## 8. Estado del Schema local — 🟢 Fuerte (con ajustes)

**Presente y correcto:** `LocalBusiness` + `Store`, `name`, `address` (PostalAddress), `geo`, `telephone`, `email`, `url`, `priceRange` "$$", `image`, `areaServed` (Colombia + Medellín), `makesOffer`, `aggregateRating` (ahora 3), `sameAs`. JSON-LD válido.

**Ajustes recomendados:**
1. **`geo` con más precisión:** hoy `6.2476, -75.5658` (4 decimales, punto genérico de Medellín). Recomendado **5+ decimales**. *(Si prefieres no revelar el taller por ser SAB, puedes dejar el centroide de la zona de servicio.)*
2. **Falta `openingHoursSpecification`** — añade el horario de atención/respuesta.
3. **Añadir `hasMap`** y el `sameAs` del GBP una vez creado (Google Maps URL / Place).

**Fragmento listo para pegar** (añadir dentro del objeto `#business`):

```json
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Saturday",
    "opens": "09:00",
    "closes": "13:00"
  }
],
"contactPoint": {
  "@type": "ContactPoint",
  "telephone": "+57-305-815-7511",
  "contactType": "sales",
  "availableLanguage": "Spanish",
  "areaServed": "CO"
}
```

Y en `sameAs`, tras crear el GBP, agrega la URL de tu ficha de Google Maps.

*(Ajusta los horarios a los reales del taller.)*

---

## 9. Calidad de páginas de ubicación

**No aplica multi-ubicación** (sitio de una sola página, un solo negocio). Sin riesgo de *doorway pages*.

**Observación de arquitectura:** las **páginas de servicio dedicadas son el factor #1 de SEO local orgánico y el #2 de visibilidad en IA** (Whitespark 2026). Hoy todo vive en `/`. A mediano plazo, crear páginas como:
- `/amigurumis-personalizados-medellin`
- `/pesebres-a-crochet`
- `/llaveros-amigurumi`

cada una con su H1 local, contenido único y `LocalBusiness`/`Service` schema, sería la mayor palanca de crecimiento local.

---

## 10. Top 10 acciones priorizadas

| # | Acción | Prioridad | Esfuerzo |
|---|--------|-----------|----------|
| 1 | **Crear y verificar Google Business Profile** (categoría "Tienda de artesanías", área de servicio, 15+ fotos) | 🔴 Crítico | 1–2 h |
| 2 | **Estrategia de reseñas en Google**: pedir por WhatsApp tras cada entrega, meta 10+, cadencia ≤18 días, sin *gating* | 🔴 Crítico | Continuo |
| 3 | **Añadir enlace `tel:`** de clic-para-llamar en footer/contacto (móvil) | 🟠 Alto | 10 min |
| 4 | **Reclamar Bing Places** (alimenta ChatGPT/Copilot/Alexa) | 🟠 Alto | 30 min |
| 5 | Añadir **ciudad al H1** ("Amigurumis a crochet en **Medellín**") | 🟠 Alto | 10 min |
| 6 | Añadir `openingHoursSpecification` + `contactPoint` al schema | 🟡 Medio | 20 min |
| 7 | Subir precisión de `geo` a 5+ decimales | 🟡 Medio | 5 min |
| 8 | Reclamar **Apple Business Connect** | 🟡 Medio | 30 min |
| 9 | Registrar en **Cámara de Comercio de Medellín** / directorios locales CO y buscar menciones en prensa/"lo mejor de" | 🟡 Medio | Continuo |
| 10 | Crear **páginas de servicio dedicadas** (personalizados, pesebres, llaveros) | ⚪ Crecimiento | 1–2 días |

---

## 11. Limitaciones de este análisis

Este análisis se basa en el **contenido del sitio y su schema**. **No** pudo evaluar (requieren herramientas/accesos específicos):
- **Posición real en el local pack** ni **geo-grid** de "amigurumis Medellín" (requiere DataForSEO / rank tracker con geolocalización).
- **Datos reales del GBP** (categoría actual, reseñas de Google, Insights, indicaciones) — no hay GBP detectable.
- **Domain Authority y perfil de backlinks** local (requiere Moz/Ahrefs/DataForSEO).
- **Consistencia NAP en directorios externos** (auditoría de citaciones automatizada).
- **Posición en respuestas de IA** (ChatGPT/Perplexity/AI Overviews) — para esto ejecuta `/seo geo https://www.finucrochet.com` (análisis de citabilidad, llms.txt y menciones de marca).

**Contexto de mercado:** el 45% de usuarios ya usa IA para recomendaciones locales (BrightLocal 2026) y ChatGPT convierte al 15.9% vs 1.76% de orgánico Google. Como ChatGPT se nutre de **Bing/Yelp/reseñas**, reclamar **Bing Places** y generar **reseñas de Google** son las dos jugadas con mayor retorno para Finucrochet.
