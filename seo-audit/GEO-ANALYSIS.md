# Análisis GEO / Búsqueda con IA — finucrochet.com

- **Fecha:** 2026-07-28
- **URL:** https://www.finucrochet.com/
- **Alojamiento:** GitHub Pages (HTML estático = equivalente a SSR)

---

## 1. GEO Readiness Score: **67 / 100** — Moderado-Bueno

El sitio parte con una base sólida para IA: es **HTML estático** (los rastreadores de IA no ejecutan JS, y aquí el contenido principal sí está en el HTML), tiene un **`llms.txt` ejemplar**, un **FAQ muy citable** y `robots.txt` abierto a todos los rastreadores. Lo que frena la puntuación es la **autoridad/menciones de marca** (sin Wikipedia/Reddit/YouTube, sin autoría ni fechas) y la ausencia de contenido multimodal más allá de fotos.

| # | Criterio | Peso | Puntaje |
|---|----------|------|---------|
| 1 | Citabilidad (pasajes) | 25% | 70 |
| 2 | Legibilidad estructural | 20% | 80 |
| 3 | Contenido multimodal | 15% | 65 |
| 4 | Autoridad y señales de marca | 20% | 40 |
| 5 | Accesibilidad técnica | 20% | 80 |

---

## 2. Desglose por plataforma

| Plataforma | Estimado | Por qué |
|------------|----------|---------|
| **Google AI Overviews** | ~70 | Se nutre de páginas top-10 + SEO tradicional. FAQ y schema ayudan; falta rankear primero. |
| **ChatGPT** | ~45 | Fuentes principales: Wikipedia (47.9%) y Reddit (11.3%) + índice de **Bing**. Finucrochet no tiene presencia ahí y **Bing Places no está reclamado**. |
| **Perplexity** | ~45 | Muy dependiente de Reddit/comunidad. Sin presencia en Reddit → baja citación. |
| **Bing Copilot** | ~55 | Necesita SEO de Bing + IndexNow. Hay un archivo tipo clave IndexNow (`053...txt`), pero Bing Places sin reclamar. |

> Recuerda: **solo el 11% de los dominios** son citados a la vez por ChatGPT y Google AIO. Hay que optimizar por plataforma.

---

## 3. Estado de acceso de rastreadores de IA

`robots.txt` actual:
```
User-agent: *
Allow: /
Sitemap: https://www.finucrochet.com/sitemap.xml
```

| Rastreador | Estado |
|------------|--------|
| GPTBot (OpenAI) | ✅ Permitido |
| OAI-SearchBot / ChatGPT-User | ✅ Permitido |
| ClaudeBot (Anthropic) | ✅ Permitido |
| PerplexityBot | ✅ Permitido |
| Bingbot | ✅ Permitido |
| CCBot (Common Crawl, entrenamiento) | ✅ Permitido |
| Bytespider (ByteDance) | ✅ Permitido |

**Veredicto:** todos los rastreadores de búsqueda por IA tienen acceso. 👍 No hay bloqueos que corregir.

*Opcional (decisión de negocio):* si NO quieres que tu contenido se use para **entrenar** modelos (distinto de aparecer en búsquedas), podrías bloquear `CCBot`, `anthropic-ai` y `Bytespider` manteniendo permitidos los de búsqueda (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot). Para un negocio que busca visibilidad, **dejarlo abierto es lo recomendable**.

---

## 4. Estado de llms.txt — 🟢 Excelente

`/llms.txt` presente, bien estructurado y **ya ampliado en esta sesión** con el catálogo de piezas por categoría. Incluye: descripción, información clave (ubicación, cobertura, contacto, modelo de venta, pagos), categorías, catálogo, materiales, tiempos de entrega, **política de citación para IA** y recursos. Es de lo mejor que puede tener un negocio de este tamaño. **No requiere cambios.**

*Sugerencia menor:* añadir el horario (Lun–Vie 9–18) y la dirección (El Poblado, Medellín) también en `llms.txt` para coherencia con el schema recién actualizado.

---

## 5. Análisis de menciones de marca — 🔴 Punto débil principal

> Las **menciones de marca correlacionan 3× más con la visibilidad en IA que los backlinks** (Ahrefs, dic 2025).

| Plataforma | Presencia | Impacto en IA |
|------------|-----------|---------------|
| Wikipedia / Wikidata | ❌ No | Alto (clave para ChatGPT) |
| Reddit | ❌ No | Alto (clave para Perplexity) |
| YouTube | ❌ No | El más fuerte (~0.737) |
| Instagram | ✅ Sí | Media (venta visual) |
| Facebook | ✅ Sí | Media |
| LinkedIn | ❌ No | Moderado |

**Realidad:** para un taller artesanal, Wikipedia no es realista, pero **YouTube y Reddit sí** son alcanzables y son justo las fuentes que más pesan:
- **YouTube:** videos cortos del proceso de tejido ("time-lapse de un amigurumi", "cómo se hace un pesebre a crochet"). Alto potencial de menciones/citación.
- **Reddit:** participación auténtica en comunidades (r/crochet, r/amigurumi, r/Medellin) — sin spam.

---

## 6. Citabilidad a nivel de pasaje

**Fortaleza clara: el FAQ.** Formato pregunta-respuesta, autocontenido, con datos específicos (tiempos de entrega 3–30 días, materiales, cobertura). Es lo más citable del sitio.

**Oportunidades:**
- Los bloques de respuesta rondan las **40–80 palabras**; el óptimo de citación es **134–167 palabras**. Ampliar 2–3 respuestas clave con más detalle específico mejora la extracción.
- **Falta un bloque de definición** al estilo *"¿Qué es un amigurumi?"* en los primeros 60 palabras — patrón que la IA cita mucho.
- Añadir **una tabla** (p. ej. tiempos de entrega por tipo de pieza) da un formato que la IA extrae bien.

**Bloque de definición sugerido (listo para pegar en la sección Nosotros o FAQ):**

> **¿Qué es un amigurumi?** Un amigurumi es una figura tejida a crochet (o a punto) rellena a mano, de origen japonés. En Finucrochet cada amigurumi se teje a mano por encargo en Medellín, Colombia, con hilo 100% algodón premium hipoalergénico y relleno siliconado, con ojos de seguridad aptos para niños. A diferencia de un peluche de fábrica, cada pieza es única, personalizable y elaborada puntada a puntada; los tiempos van de 3 a 30 días según el tamaño y la complejidad, y la cotización se hace por WhatsApp en menos de 24 horas.

*(~90 palabras; se puede extender a ~140 añadiendo materiales/categorías.)*

---

## 7. Renderizado del lado del servidor (dependencia de JS)

| Contenido | ¿En HTML estático? | Visible para IA |
|-----------|--------------------|-----------------|
| Hero, Nosotros, Proceso, FAQ, Testimonios | ✅ Sí | ✅ |
| Schema LocalBusiness / WebSite / FAQPage | ✅ Sí (estático) | ✅ |
| **Galería (46 piezas)** | ⚠️ Generada por JS | ⚠️ Mitigado |
| **Schema `VisualArtwork`** | ⚠️ Inyectado por JS | ❌ No |

**Estado tras las correcciones de esta sesión:** añadimos un bloque **`<noscript>` con el catálogo** y el **listado de piezas en `llms.txt`**, así que los rastreadores de IA sin JS **ya "ven" el catálogo textual**. 

**Pendiente:** el `VisualArtwork` (una obra por pieza) sigue siendo solo-JS → invisible para IA. Si se quiere que cada pieza sea citable como obra, habría que renderizar ese schema en el HTML estático. *(Impacto medio; el contenido textual ya está cubierto.)*

---

## 8. Top 5 cambios de mayor impacto

1. **🔴 Construir presencia en YouTube y Reddit** — las dos fuentes que más pesan en IA. Videos de proceso + participación auténtica en r/crochet, r/amigurumi, r/Medellin. *(Alto impacto, esfuerzo continuo.)*
2. **🟠 Reclamar Bing Places** — alimenta ChatGPT y Copilot. Palanca directa de visibilidad en IA. *(30 min.)*
3. **🟠 Añadir bloque de definición "¿Qué es un amigurumi?"** en los primeros 60 palabras de una sección + una tabla de tiempos de entrega. *(30 min — texto arriba.)*
4. **🟡 Añadir autoría y fechas** — nombre de la artesana + `datePublished`/`dateModified`. La IA prioriza contenido fechado y con autor identificable. *(Ver sección 9.)*
5. **🟡 Sincronizar `llms.txt`** con horario y dirección nuevos, y considerar renderizar el `VisualArtwork` en HTML. *(20 min.)*

---

## 9. Recomendaciones de Schema para descubribilidad por IA

- **`Person` (la artesana)** vinculada como `founder`/`employee` del `LocalBusiness` — mejora E-E-A-T y citabilidad. *(Requiere nombre real.)*
- **Fechas en el `WebSite`/contenido:** añadir `datePublished` y `dateModified`.
- **`sameAs`:** agregar la **URL de tu ficha de Google Maps** (recién confirmada) y, cuando existan, YouTube y LinkedIn. Hoy solo IG + FB.
- **`Article`/`HowTo`** si se crea un blog (p. ej. "Cómo cuidar tu amigurumi") — muy citable por IA.
- Mantener el **`FAQPage`** (ya presente y correcto) — es tu mayor activo GEO.

**Fragmento `Person` (cuando tengas el nombre):**
```json
"founder": {
  "@type": "Person",
  "name": "NOMBRE REAL",
  "jobTitle": "Artesana tejedora / Fundadora",
  "worksFor": { "@id": "https://www.finucrochet.com/#business" }
}
```

---

## 10. Sugerencias de reformateo de contenido

- **Sección Nosotros:** abrir con el bloque de definición (sección 6) para captar la consulta "qué es un amigurumi".
- **FAQ:** ampliar 2–3 respuestas a ~140 palabras con datos concretos (materiales exactos, ejemplos de personalización, cobertura de envíos por ciudad).
- **Añadir tabla de tiempos de entrega** (llaveros 3–7 días / medianos 7–15 / pesebres hasta 30) — formato tabla = alta extracción por IA.
- **Añadir fecha visible** de "última actualización" en el footer.
- **Comparativa hecho-a-mano vs fábrica** (texto o mini-tabla) — responde intención de decisión muy consultada en IA.

---

## Limitaciones
- No se verificó en vivo qué devuelven ChatGPT/Perplexity/AIO para consultas objetivo (requiere DataForSEO `ai_optimization_chat_gpt_scraper` o pruebas manuales).
- Las puntuaciones por plataforma son estimaciones basadas en señales on-page + presencia de marca observable, no en posiciones reales de citación.
- Para seguimiento de menciones en LLMs, considerar `ai_opt_llm_ment_search` (DataForSEO) si se dispone del MCP.
