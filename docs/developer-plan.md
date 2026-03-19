# Plan de Implementación: Landing Page Veterinaria

## Contexto base
- Brief de referencia: [docs/brief-landingpage.md](docs/brief-landingpage.md).
- Stack obligatorio: HTML5 + TailwindCSS + JavaScript Vanilla.
- Objetivo principal de negocio: llevar al usuario a acciones de conversión (`Agendar cita`, `WhatsApp`, `Llamar`).

## Archivos a crear
- [index.html](index.html): estructura semántica completa de la landing (hero, servicios, beneficios, testimonios, contacto, footer).
- [script.js](script.js): interacciones de UI (menú mobile, animaciones ligeras en scroll, comportamiento de testimonios y validación básica del formulario si se incluye).
- [docs/developer-plan.md](docs/developer-plan.md): documento interno con el plan técnico y checklist de ejecución.

## Archivos a modificar
- [package.json](package.json): scripts de desarrollo/build para Tailwind (compilación del CSS y flujo local de trabajo).

## Paso a paso de implementación
1. Preparar base técnica del proyecto.
   - Configurar Tailwind para generar estilos finales de forma reproducible.
   - Definir scripts de trabajo para compilar estilos y facilitar iteración rápida.
   - Lógica: asegurar consistencia visual y evitar CSS manual disperso.

2. Diseñar arquitectura de contenido antes de maquetar.
   - Definir jerarquía de mensajes por sección (propuesta de valor -> prueba de confianza -> acción).
   - Establecer CTAs principales/secundarios y su repetición estratégica en la página.
   - Lógica: la estructura narrativa prioriza claridad comercial y tasa de conversión.

3. Construir el esqueleto semántico de `index.html`.
   - Implementar secciones mínimas requeridas por DoD.
   - Añadir landmarks y estructura accesible para lectura escaneable y navegación clara.
   - Lógica: semántica correcta mejora accesibilidad, SEO base y mantenibilidad.

4. Aplicar sistema visual con Tailwind (mobile-first).
   - Definir espaciados, tipografía, contraste y componentes de botón coherentes con estilo premium/cálido.
   - Ajustar breakpoints para móvil, tablet y desktop.
   - Lógica: un sistema visual consistente transmite confianza y reduce fricción cognitiva.

5. Implementar interacciones en `script.js`.
   - Menú responsive con apertura/cierre estable y foco en usabilidad móvil.
   - Animaciones de entrada en scroll suaves, sin librerías pesadas.
   - Interacción simple en testimonios (carrusel liviano o navegación por tarjetas).
   - Validación básica del formulario de contacto (si existe) con feedback claro.
   - Lógica: microinteracciones discretas elevan percepción de calidad sin penalizar rendimiento.

6. Optimizar copy y puntos de conversión.
   - Refinar titulares, subtítulos y textos de apoyo con tono cercano/profesional.
   - Verificar que todos los CTAs sean visibles, entendibles y accionables.
   - Lógica: la calidad del mensaje impacta directamente en intención de contacto.

7. QA funcional, visual y de accesibilidad.
   - Probar responsividad real en anchos clave.
   - Validar navegación, enlaces, botones, formulario y scripts.
   - Revisar contraste, textos, jerarquía visual y carga percibida.
   - Lógica: cerrar brechas de UX antes de considerar el entregable terminado.

8. Cierre contra Definition of Done.
   - Checklist final de secciones, responsividad, interacciones, claridad de CTA y calidad visual.
   - Documentar decisiones y pendientes en [docs/developer-plan.md](docs/developer-plan.md).
   - Lógica: trazabilidad del trabajo y validación explícita del resultado.

## Lógica de implementación
- Se implementa primero la base técnica para evitar retrabajo de estilos y asegurar un flujo ordenado.
- Se define la narrativa de contenido antes de diseñar componentes para que el diseño sirva al objetivo de conversión.
- Se prioriza mobile-first porque el primer contacto suele ocurrir en móvil y condiciona la percepción de calidad.
- La interactividad se mantiene ligera para balancear elegancia visual con rendimiento.
- El cierre se hace con checklist de DoD para garantizar que el resultado no sea solo “bonito”, sino funcional, confiable y orientado a negocio.

## Criterios de validación final
- Todas las secciones requeridas están presentes y cohesionadas.
- CTAs de `Agendar`, `WhatsApp` y `Llamar` aparecen de forma estratégica.
- Navegación y lectura son fluidas en móvil/tablet/desktop.
- Interacciones de JavaScript funcionan sin dependencias complejas.
- El resultado transmite cercanía, profesionalismo y confianza (no apariencia genérica).

## Estado de ejecución (fases implementadas)

### Fase 1 - Base técnica
- [x] Scripts Tailwind configurados en `package.json` (`css:watch`, `css:build`, `dev`, `build`).
- [x] Entrada de estilos centralizada en `src/styles/input.css`.
- [x] Salida compilada en `public/assets/css/styles.css`.

### Fase 2 - Arquitectura de contenido
- [x] Narrativa definida y aplicada en orden de conversión: propuesta de valor -> servicios -> confianza -> prueba social -> cierre de contacto.
- [x] CTAs principales y secundarios distribuidos en hero, beneficios, contacto y footer.

### Fase 3 - Estructura semántica de `index.html`
- [x] Implementadas secciones clave: hero, servicios, beneficios, testimonios, contacto y footer.
- [x] Landmarks y semántica base aplicados (`header`, `nav`, `main`, `section`, `footer`).
- [x] Navegación con enlaces internos y enlace de salto al contenido principal.

### Fase 4 - Sistema visual con Tailwind (mobile-first)
- [x] Componentes reutilizables creados en `@layer components` (`btn-primary`, `btn-secondary`, `card`).
- [x] Espaciados, jerarquía tipográfica y contraste definidos para lectura escaneable.
- [x] Layout responsive ajustado para móvil, tablet y desktop.

### Fase 5 - Interacciones en `script.js`
- [x] Menú responsive con `aria-expanded`, cierre por enlace y tecla Escape.
- [x] Animaciones ligeras en scroll con `IntersectionObserver`.
- [x] Testimonios con navegación anterior/siguiente, dots e autoplay liviano.
- [x] Validación básica de formulario con feedback de error y éxito.

### Fase 6 - Optimización de copy y conversión
- [x] Copy refinado con tono cercano-profesional y enfoque en confianza.
- [x] Mensajes orientados a acción en puntos clave de la página.
- [x] CTAs claros para `Agendar cita`, `WhatsApp` y `Llamar`.

### Fase 7 - QA funcional, visual y accesibilidad
- [x] Validación de estructura responsive en breakpoints base (móvil/tablet/desktop).
- [x] Verificación de flujo de navegación, botones y enlaces de acción.
- [x] Revisión de contraste, jerarquía visual y feedback en formulario.

### Fase 8 - Cierre contra DoD
- [x] Checklist de secciones y funcionalidad completado.
- [x] Decisiones técnicas y estado final documentados en este plan.
- [x] Entregables listos: `index.html`, `script.js`, estilos Tailwind compilados.
