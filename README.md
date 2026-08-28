# ¿Cuánto cuesta tener un perro? — V1

Calculadora de presupuesto personalizado. Next.js 14 · TypeScript · Tailwind CSS.

## Puesta en marcha (local)

Este proyecto se generó sin acceso a red, así que `node_modules` no está
instalado. Para arrancarlo:

```bash
npm install
npm run dev
```

Abre http://localhost:3000

Build de producción:

```bash
npm run build
npm start
```

## Tests

La lógica de cálculo (`src/lib/`) tiene tests que corren con el runner nativo
de Node (no dependen de `npm install`, puedes ejecutarlos ahora mismo):

```bash
npm test
# equivalente a: node --experimental-strip-types --test tests/*.test.ts
```

Ahora mismo pasan 14/14, cubriendo: no duplicación mensual/anual, prorrateo de
RC, equipamiento solo en primer año, sustitución (no suma) de salud de
cachorro, monotonía peso→coste, fronteras de tamaño, cambio de coste al
añadir/quitar servicios, y coincidencia exacta con la tabla de ración.

## Estructura

```
src/
  lib/
    types.ts               tipos de dominio
    sources.ts              registro de fuentes (mercado vs. supuesto interno)
    rationTable.ts           tabla de ración + interpolación
    economicParameters.ts    TODOS los precios/parámetros, un único sitio
    calculations.ts          funciones puras de cálculo
    format.ts                 formato € europeo
    analytics.ts              eventos, sin proveedor conectado, sin PII
  components/
    ui/                       Button, ProgressBar, EstimateStamp, LedgerRow
    calculator/                StepShell, CalculatorWizard, ResultsView
  app/
    page.tsx                   home
    calculadora/page.tsx        calculadora
    sitemap.ts / robots.ts      SEO técnico
tests/
  calculations.test.ts          suite de tests (Node nativo)
```

## Antes de tocar precios

Todos los parámetros económicos están en `src/lib/economicParameters.ts` y
documentados en `src/lib/sources.ts`. No hay ningún precio "suelto" dentro de
componentes de interfaz — así se pueden actualizar sin tocar lógica ni UI.

## Checklist de finalización (spec original, sección 40)

- [x] Home funcional
- [x] Calculadora funciona de principio a fin (10 preguntas, atrás/continuar, progreso)
- [x] Resultados matemáticamente coherentes (ver tests)
- [x] Los 3 casos de prueba (internos, recalculados) pasan
- [x] Responsive (mobile-first con Tailwind, `sm:` en adelante)
- [x] Accesible: labels asociadas, focus visible, roles ARIA en grupos de opción, sin iconos como único significado
- [x] Parámetros económicos separados del resto del código
- [x] Fuentes documentadas con tipo (market / model_assumption), fecha y notas
- [x] SEO básico: title, meta description, Open Graph, canonical, sitemap, robots, contenido textual bajo la herramienta
- [ ] Sin errores de consola / TypeScript — **pendiente de confirmar en tu máquina** tras `npm install` (aquí no hay red para instalar dependencias ni levantar el compilador de Next; la lógica de dominio sí se ha verificado con Node nativo)
- [x] No hay datos ficticios presentados como reales (RC, salud y equipamiento están explícitamente marcados como supuestos internos donde corresponde)
- [x] El usuario puede modificar sus respuestas ("Modificar mis respuestas" vuelve al paso 1 conservando los datos en memoria)
- [x] Código organizado para añadir herramientas futuras (dominio 100% desacoplado de la UI de esta calculadora concreta)

## Import con extensión `.ts`

Verás que los imports internos de `src/lib/` incluyen la extensión `.ts`
explícita (p. ej. `from "./rationTable.ts"`). Es intencional: con
`allowImportingTsExtensions` en `tsconfig.json` esto es válido para Next.js
(resolución `bundler`) y además permite ejecutar los tests con Node nativo
sin depender de `ts-node` ni de una build previa.

## Pendiente antes de producción

- Sustituir `ejemplo-cambiar-dominio.es` en `layout.tsx`, `sitemap.ts` y
  `robots.ts` por el dominio real.
- Conectar un proveedor de analítica real en `src/lib/analytics.ts` (un único
  punto de cambio).
- Ejecutar `npm run lint` y `npx tsc --noEmit` en un entorno con red para la
  verificación final de tipos y estilo antes de desplegar en Vercel.
