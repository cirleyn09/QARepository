# QA Automation Framework — Playwright & Postman

[![CI](https://github.com/cirleyn09/qarepository/actions/workflows/playwright.yml/badge.svg)](https://github.com/cirleyn09/qarepository/actions/workflows/playwright.yml)

[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/)
[![Newman](https://img.shields.io/badge/Newman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://github.com/postmanlabs/newman)

[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)

**QA Automation Framework** es un proyecto de QA que integra **Playwright para la automatización de pruebas E2E y API, implementado en TypeScript** y **Postman y Newman** para validar servicios REST mediante colecciones de requests. Incluye escenarios positivos y negativos, pruebas Smoke y Regression, documentación de QA y generación de evidencias y reportes.

La automatización utiliza Page Object Model (POM), fixtures reutilizables y helpers de API. **GitHub Actions** ejecuta las pruebas de Playwright y la colección de Postman en jobs independientes y publica sus resultados.

## Resultados visuales

### Playwright Report

Vista del reporte HTML de Playwright con el resumen de la ejecución, las pruebas y sus resultados.

<!-- Cuando agregues docs/images/playwright-report.png, reemplaza el aviso anterior por:
![Reporte HTML de Playwright con los resultados de las pruebas](docs/images/playwright-report.png)
-->

### CI Pipeline

Vista del workflow **Portfolio Tests** en GitHub Actions, mostrando la validación de TypeScript y la ejecución exitosa de Playwright y Postman/Newman.

> Pendiente: agregar una captura del pipeline con las validaciones aprobadas.

<!-- Cuando agregues docs/images/ci-pipeline.png, reemplaza el aviso anterior por:
![Pipeline de GitHub Actions con TypeScript, Playwright y Postman/Newman aprobados](docs/images/ci-pipeline.png)
-->

### Test execution

Demostración de Playwright ejecutando el flujo **login → productos → carrito** en el navegador.

> Pendiente: agregar un GIF corto de la ejecución.

<!-- Cuando agregues docs/images/test-execution.gif, reemplaza el aviso anterior por:
![Playwright ejecutando el flujo de login, productos y carrito](docs/images/test-execution.gif)
-->

## Proyecto

El proyecto principal del repositorio es **PracticeQA**, orientado a validar la aplicación `https://fullstack.qa-practice.dev`. Reúne pruebas automatizadas, una colección de Postman y documentación de pruebas manuales.

## Tecnologías y herramientas

| Herramienta / tecnología | Uso en el proyecto                                             |
| ------------------------- | -------------------------------------------------------------- |
| Playwright                | Pruebas E2E y API, automatización del navegador y evidencias. |
| TypeScript                | Pruebas, Page Objects, fixtures y helpers de API.              |
| Postman                   | Colección de pruebas REST y configuración de environments.   |
| JavaScript                | Scripts de preparación y validación dentro de Postman.       |
| Newman                    | Ejecución automatizada de la colección de Postman.           |
| newman-reporter-htmlextra | Reportes HTML de las ejecuciones de Newman.                    |
| Node.js / npm             | Entorno de ejecución, dependencias y scripts.                 |
| REST APIs / JSON          | Solicitudes HTTP y validación de respuestas.                  |
| dotenv                    | Carga del archivo `.env` para Playwright.                    |
| Git / GitHub Actions      | Control de versiones e integración continua.                  |

## Estructura y arquitectura

La estructura principal separa configuración, componentes reutilizables, pruebas, colecciones y documentación:

```text
QARepository/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── projects/
│   └── practiceQA/
│       ├── automation/
│       │   ├── api/
│       │   ├── data/
│       │   ├── fixtures/
│       │   ├── pages/
│       │   ├── setup/
│       │   └── utils/
│       ├── postman/
│       │   ├── README.md
│       │   ├── collections/
│       │   └── environments/
│       ├── qa/
│       │   ├── bugReports/
│       │   ├── evidence/
│       │   ├── reports/
│       │   ├── testCases/
│       │   └── testPlan/
│       └── tests/
│           ├── api/
│           └── e2e/
├── templates/
│   └── examples/
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

* **`automation/pages`**: Page Objects para login y productos.
* **`automation/fixtures`**: preparación reutilizable del login y autenticación por prueba.
* **`automation/api`**: datos, helpers y assertions para las pruebas API de Playwright.
* **`automation/data` y `automation/utils`**: datos de prueba y acceso a variables de entorno.
* **`automation/setup`**: generación del estado de autenticación mediante `storageState`.
* **`tests`**: escenarios automatizados de API e interfaz.
* **`postman`**: colección, environment y guía específica de uso.
* **`qa`**: plan de pruebas, casos, reportes de bugs y evidencias.
* **`templates`**: plantillas y ejemplos para documentar el trabajo de QA.

## Pruebas

### Interfaz y flujos E2E

Las pruebas en `projects/practiceQA/tests/e2e` validan login, mensajes de error, logout y el flujo de agregar un producto al carrito.

También incluyen un flujo combinado de API y UI en `login-ui-api.spec.ts`: crea un usuario por API, inicia sesión con ese usuario desde la interfaz, verifica la sesión y elimina el usuario al finalizar.

### API con Playwright

Las pruebas en `projects/practiceQA/tests/api` cubren solicitudes de productos, ordenamiento por precio, filtros por categoría y disponibilidad, y escenarios negativos de autenticación y registro. Utilizan los helpers y assertions de `automation/api`.

### API con Postman

La colección de Postman complementa la validación de autenticación y productos con escenarios positivos y negativos. Puede ejecutarse desde Postman o automáticamente con Newman.

La cobertura detallada, los archivos de la colección, la configuración de variables y las instrucciones de importación y ejecución están en la [guía de Postman](projects/practiceQA/postman/README.md).

### Smoke, Regression y Negative Testing

Las pruebas de Playwright etiquetadas pueden seleccionarse mediante `@smoke`, `@regression` y `@negative`. Los filtros ejecutan únicamente los escenarios que tienen la etiqueta correspondiente.

## Configuración de Playwright

El archivo [playwright.config.ts](playwright.config.ts) define las suites, los navegadores y las opciones de ejecución.

| Proyecto                              | Configuración actual                                                                          |
| ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `practiceQA`                        | Ejecuta las pruebas API y E2E de PracticeQA con Chromium.                                      |
| `practiceQA-setup`                  | Inicia sesión y genera `playwright/.auth/user.json`.                                        |
| `practiceQA-authenticated`          | Utiliza el estado generado por el setup y selecciona pruebas de `practiceQA/tests/products`. |
| `chromium`, `firefox`, `webkit` | Proyectos generales que excluyen las suites de PracticeQA y AcademyBugs.                       |

Actualmente las pruebas de productos y logout están en `tests/e2e` y utilizan la fixture de autenticación de `automation/fixtures/auth.ts`, por lo que se ejecutan dentro de `practiceQA`.

La configuración general utiliza:

| Opción                  | Valor                        |
| ------------------------ | ---------------------------- |
| Directorio de pruebas    | `./projects`               |
| Resultados de Playwright | `./artifacts/test-results` |
| Timeout por prueba       | 90 segundos                  |
| Timeout de assertions    | 30 segundos                  |
| Timeout de acciones      | 30 segundos                  |
| Timeout de navegación   | 60 segundos                  |
| Reintentos               | 2 en CI; 0 en local          |
| Workers en CI            | 1                            |

Las pruebas se configuran para ejecutarse en paralelo. En CI se restringen a un worker y se rechaza el uso de `test.only`.

## Instalación y entorno local

Desde una terminal:

```bash
git clone https://github.com/cirleyn09/qarepository.git
cd qarepository
npm install
npx playwright install
```

`npm install` instala las dependencias de Playwright, TypeScript, Newman y su reporter HTML. Los navegadores son necesarios para las pruebas de interfaz de Playwright.

Para configurar PracticeQA, crea un archivo `.env` en la raíz:

```env
PRACTICE_QA_BASE_URL=https://fullstack.qa-practice.dev
PRACTICE_QA_EMAIL=your_email
PRACTICE_QA_PASSWORD=your_password
```

La URL base tiene como valor predeterminado `https://fullstack.qa-practice.dev`. Las credenciales son necesarias para el login válido, las pruebas que utilizan la fixture de autenticación y el setup de sesión. En GitHub Actions se proporcionan mediante los secrets `PRACTICE_QA_EMAIL` y `PRACTICE_QA_PASSWORD`.

El archivo `.env` está excluido mediante `.gitignore`. Postman utiliza su propio environment, cuya configuración se explica en su guía.

## Ejecución de pruebas

Los siguientes comandos se ejecutan desde la raíz del repositorio:

| Ejecución                                                          | Comando                                                                    |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Todas las pruebas seleccionadas por la configuración de Playwright | `npm test`                                                               |
| Suite principal de PracticeQA                                       | `npx playwright test --project=practiceQA`                               |
| Pruebas API de PracticeQA                                           | `npx playwright test projects/practiceQA/tests/api --project=practiceQA` |
| Pruebas E2E de PracticeQA                                           | `npx playwright test projects/practiceQA/tests/e2e --project=practiceQA` |
| Smoke                                                               | `npm run test:smoke`                                                     |
| Regression                                                          | `npm run test:regression`                                                |
| Negative                                                            | `npm run test:negative`                                                  |
| Debug                                                               | `npm run test:debug`                                                     |
| Generación de pruebas con Codegen                                  | `npm run codegen`                                                        |
| Validación de TypeScript                                           | `npx tsc --noEmit`                                                       |

Para ejecutar un archivo o seleccionar una prueba por nombre:

```bash
npx playwright test projects/practiceQA/tests/e2e/login-ui-api.spec.ts --project=practiceQA
npx playwright test --project=practiceQA -g "nombre del test"
```

`npm test` ejecuta Playwright. La colección de Postman tiene una ejecución independiente, documentada en su guía.

## Reportes y evidencias

| Resultado                                             | Ubicación                           |
| ----------------------------------------------------- | ------------------------------------ |
| Reporte HTML de Playwright                            | `artifacts/playwright-report/`     |
| Reporte JUnit de Playwright                           | `artifacts/junit/results.xml`      |
| Screenshots, videos y traces de Playwright            | `artifacts/test-results/`          |
| Reporte HTML de Newman en local, con el script actual | `newman/`                          |
| Reporte HTML de Newman en GitHub Actions              | `artifacts/postman/report.html`    |
| Evidencias de QA documentadas en el repositorio       | `projects/practiceQA/qa/evidence/` |

Para abrir el reporte HTML de Playwright:

```bash
npm run report
```

Playwright captura screenshots y conserva videos y traces cuando una prueba falla. Newman genera su reporte HTML mediante `newman-reporter-htmlextra`.

## Integración continua

El workflow [Portfolio Tests](.github/workflows/playwright.yml) se ejecuta en pushes y Pull Requests hacia `main` o `master`, y permite ejecución manual mediante `workflow_dispatch`.

Contiene dos jobs independientes en Ubuntu con Node.js 24:

| Job                  | Proceso                                                                                                                                                   | Artefactos publicados                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `playwright-tests` | Instala dependencias con `npm ci`, valida TypeScript, instala navegadores y ejecuta `practiceQA` y `practiceQA-authenticated`, incluyendo su setup. | Reporte HTML, screenshots, videos y traces. |
| `postman-tests`    | Instala Newman y el reporter HTML, ejecuta la colección con su environment y genera resultados en consola y HTML.                                        | `postman-html-report`.                    |

Los artefactos se conservan durante **30 días**. Playwright genera también el reporte JUnit, aunque el workflow actual no lo publica como artefacto.

## Documentación de QA

PracticeQA incluye un [plan de pruebas](projects/practiceQA/qa/testPlan/testPlan-practiceQA.md), casos de login, catálogo, carrito, checkout e interfaz, reportes de bugs y evidencias. La cobertura documentada de QA es más amplia que los escenarios automatizados actualmente.

Las [plantillas](templates) permiten crear casos de prueba, planes, reportes de bugs y reportes finales con una estructura común.

## Contribuir

1. Crear una rama con `git checkout -b feature/nombre-feature`.
2. Realizar los cambios y actualizar la documentación correspondiente.
3. Validar TypeScript y ejecutar las pruebas relacionadas con el cambio.
4. Crear el commit y subir la rama al repositorio.
5. Abrir un Pull Request hacia `main` con una descripción y los resultados de validación.

## Autora

**Cirley Nava**
