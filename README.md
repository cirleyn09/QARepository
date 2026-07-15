# QA Automation Framework

[![CI](https://github.com/cirleyn09/qa-automation-framework/actions/workflows/ci.yml/badge.svg)](https://github.com/USUARIO/REPOSITORIO/actions/workflows/ci.yml)

Framework de automatización de pruebas (Playwright + TypeScript) diseñado
para ejecutar suites E2E, de API y pruebas de regresión con reportes
generados automáticamente.

## Resumen del proyecto

Este repositorio contiene la implementación de un framework de pruebas
automatizadas con buenas prácticas: componentes reutilizables, organización
clara de proyectos y generación de reportes. Incluye ejemplos y suites en
`projects/**/tests` y utilidades en `projects/**/automation`.

## Tech Stack

- **Lenguaje:** TypeScript (Node.js)
- **Framework de testing:** @playwright/test (Playwright Test)
- **Librería de automatización:** Playwright
- **Gestor de paquetes:** npm
- **CI/CD:** GitHub Actions
- **Reportes:** Playwright HTML report (artifacts/playwright-report)

## Estructura principal

Estructura relevante (resumida):

```
package.json
playwright.config.ts
projects/               # carpetas con tests y código de automatización
	practiceQA/
	academyBugs/
artifacts/              # artefactos generados (reportes, screenshots, videos)
docs/                   # documentación adicional (how-to-run-tests, environments)
README.md
```

## Prerrequisitos

- Node.js >= 18 (recomendado)
- npm
- Git

Además, para ejecutar navegadores locales con Playwright puede ser necesario
instalar los navegadores con `npx playwright install`.

## Instalación

```bash
git clone https://github.com/cirleyn09/qa-automation-framework.git
cd qa-automation-framework
npm install
# Instalar navegadores de Playwright (si es necesario)
npx playwright install
```

## Comandos útiles

- Ejecutar todas las pruebas:

```bash
npm test
```

- Ejecutar suites específicas (definidas en `package.json`):

```bash
npm run test:smoke      # pruebas smoke
npm run test:regression # pruebas de regresión
npm run test:e2e        # pruebas end-to-end
npm run test:api        # pruebas de API
npm run test:headed     # ejecuta en modo headed
npm run test:debug      # modo debug
```

- Generar/abrir reporte HTML local después de la ejecución:

```bash
npm run report
```

- Generar reporte HTML (alternativa):

```bash
npm run test:html
```

Para ver ejemplos de ejecución y parámetros adicionales revise
[docs/how-to-run-tests.md](docs/how-to-run-tests.md) y
[docs/environments.md](docs/environments.md).

## Reportes y artefactos

Los resultados y artefactos se generan en:

```
artifacts/
	playwright-report/   # reporte HTML
	screenshots/
	videos/
	traces/
```

Los reportes integrados se pueden abrir con `npm run report`.

## CI/CD

El pipeline de CI (GitHub Actions) realiza:

1. Instalación de dependencias
2. Ejecución de pruebas
3. Publicación de reportes y artefactos

Revise los flujos en `.github/workflows/` si existen para ver detalles.

## Flujo Git

Se recomienda el siguiente flujo sencillo de ramas:

```
main
develop
feature/*
fix/*
```

Desarrollar cambios en `feature/*` y solicitar PR hacia `develop`/`main`.

## Contribuciones

1. Forkea el repositorio.
2. Crea una rama `feature/mi-cambio`.
3. Abre un Pull Request describiendo los cambios.



## Integración continua

El proyecto utiliza GitHub Actions para ejecutar automáticamente las
validaciones de calidad en cada push y Pull Request.

El pipeline realiza las siguientes tareas:

- Instalación limpia de dependencias.
- Ejecución del linter.
- Ejecución de pruebas automatizadas.
- Construcción del proyecto.
- Bloqueo de cambios cuando alguna validación falla.

El estado actual del pipeline puede consultarse mediante el badge de CI
ubicado al inicio de este documento.

## Autor y contacto

Cirley Nava

---
