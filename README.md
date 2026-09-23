# Playwright QA Automation Framework

[![CI](https://github.com/cirleyn09/qarepository/actions/workflows/playwright.yml/badge.svg)](https://github.com/cirleyn09/qarepository/actions/workflows/playwright.yml)

[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)

**Playwright QA Automation Framework** es un framework de automatización desarrollado con Playwright y TypeScript para validar aplicaciones web y APIs mediante pruebas E2E, API, Smoke, Regression y Negative Testing.

El proyecto implementa Page Object Model, fixtures reutilizables, administración de datos de prueba, autenticación mediante** **`storageState`, generación automática de evidencias y ejecución continua mediante GitHub Actions.

Está diseñado para ejecutar pruebas **End-to-End (E2E)** y **API**, utilizando buenas prácticas de ingeniería de pruebas, Page Object Model (POM), autenticación reutilizable, reportes automatizados e integración continua con GitHub Actions.

## Project

**Playwright QA Automation Framework**

Proyecto principal:

```text
practiceQA
```

## Technologies

* Playwright
* TypeScript
* Node.js
* REST APIs
* Git
* GitHub Actions
* dotenv

## Architecture

El framework utiliza una arquitectura organizada para separar las pruebas, datos, componentes reutilizables y configuración.

* **Page Object Model (POM)** — `projects/practiceQA/automation/pages`
* **Fixtures** — `projects/practiceQA/automation/fixtures`
* **Test Data** — `projects/practiceQA/automation/data`
* **Utilities** — `projects/practiceQA/automation/utils`
* **Setup / Authentication** — `projects/practiceQA/automation/setup`
* **API Tests** — `projects/practiceQA/tests/api`
* **E2E Tests** — `projects/practiceQA/tests/e2e`

La estructura principal del proyecto es:

```text
projects/
└── practiceQA/
    ├── automation/
    │   ├── pages/
    │   ├── fixtures/
    │   ├── data/
    │   ├── utils/
    │   └── setup/
    ├── qa/
    │   ├── bugReports/
    │   ├── evidence/
    │   ├── reports/
    │   ├── testCases/
    │   └── testPlan/
    └── tests/
        ├── api/
        ├── e2e/
        └── examples/
```

## Testing

El framework contempla diferentes tipos de pruebas.

### E2E Testing

Pruebas de interfaz de usuario ejecutadas mediante Playwright Test.

### API Testing

Pruebas de servicios y endpoints REST ubicadas en:

```text
projects/practiceQA/tests/api
```

### Smoke Testing

Las pruebas Smoke se identifican mediante el tag:

```text
@smoke
```

Ejecutar únicamente Smoke Tests:

```bash
npx playwright test --grep @smoke
```

### Regression Testing

Las pruebas de regresión utilizan el tag:

```text
@regression
```

Ejecutar únicamente Regression Tests:

```bash
npx playwright test --grep @regression
```

### Negative Testing

Los escenarios negativos utilizan el tag:

```text
@negative
```

Ejecutar únicamente Negative Tests:

```bash
npx playwright test --grep @negative
```

## Playwright Projects

La configuración de Playwright contiene diferentes proyectos para separar los tipos de ejecución.

### practiceQA

Ejecuta las pruebas principales del proyecto utilizando Chromium.

```bash
npx playwright test --project=practiceQA
```

### practiceQA-setup

Ejecuta el proceso de configuración y autenticación necesario para las pruebas que requieren una sesión iniciada.

### practiceQA-authenticated

Ejecuta las pruebas que necesitan autenticación.

Este proyecto utiliza:

```text
playwright/.auth/user.json
`playwright/.auth/` debe estar incluido en `.gitignore`, ya que los archivos de autenticación pueden contener cookies, tokens y datos de sesión.
```

como estado de autenticación y depende del proyecto:

```text
practiceQA-setup
```

Puede ejecutarse con:

```bash
npx playwright test --project=practiceQA-authenticated
```

Playwright ejecutará previamente la dependencia de autenticación configurada.

## Environment Variables

El proyecto utiliza variables de entorno para información sensible y configuración.

Las principales variables utilizadas por `practiceQA` son:

```text
PRACTICE_QA_BASE_URL
PRACTICE_QA_EMAIL
PRACTICE_QA_PASSWORD
```

Las credenciales no deben almacenarse directamente dentro del repositorio.

En GitHub Actions se utilizan **GitHub Secrets** para:

```text
PRACTICE_QA_EMAIL
PRACTICE_QA_PASSWORD
```

Para desarrollo local pueden configurarse mediante un archivo `.env`.

Ejemplo:

```env
PRACTICE_QA_BASE_URL=https://fullstack.qa-practice.dev
PRACTICE_QA_EMAIL=your_email
PRACTICE_QA_PASSWORD=your_password
```

> No subir el archivo `.env` al repositorio.

## Installation

### 1. Clonar el repositorio

```bash
git clone https://github.com/cirleyn09/qarepository.git
```

### 2. Entrar al proyecto

```bash
cd qarepository
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Instalar los navegadores de Playwright

```bash
npx playwright install
```

## Running Tests

### Ejecutar todas las pruebas

```bash
npm test
```

También pueden ejecutarse directamente con:

```bash
npx playwright test
```

### Ejecutar únicamente practiceQA

```bash
npx playwright test --project=practiceQA
```

### Ejecutar pruebas autenticadas

```bash
npx playwright test --project=practiceQA-authenticated
```

### Ejecutar Smoke Tests

```bash
npx playwright test --grep @smoke
```

### Ejecutar Regression Tests

```bash
npx playwright test --grep @regression
```

### Ejecutar Negative Tests

```bash
npx playwright test --grep @negative
```

### Ejecutar un archivo específico

```bash
npx playwright test projects/practiceQA/tests/e2e/login.spec.ts
```

### Ejecutar una prueba por nombre

```bash
npx playwright test -g "nombre del test"
```

### Ejecutar en Debug Mode

```bash
npm run test:debug
```

### Playwright Codegen

Para generar pruebas utilizando Playwright Codegen:

```bash
npm run codegen
```

## Reports

El framework genera diferentes tipos de reportes.

### HTML Report

El reporte HTML se almacena en:

```text
artifacts/playwright-report/
```

Para abrirlo:

```bash
npm run report
```

También puede abrirse directamente con:

```bash
npx playwright show-report artifacts/playwright-report
```

### JUnit Report

El reporte JUnit se genera en:

```text
artifacts/junit/results.xml
```

## Test Artifacts

Los resultados generados durante las ejecuciones se almacenan en:

```text
artifacts/test-results/
```

Dependiendo del resultado de las pruebas pueden generarse:

* Screenshots
* Videos
* Traces
* Test results

La configuración actual conserva:

* **Screenshots** cuando una prueba falla.
* **Videos** cuando una prueba falla.
* **Traces** cuando una prueba falla.

## Timeouts

El framework utiliza los siguientes tiempos máximos:

| Configuración          |      Tiempo |
| ----------------------- | ----------: |
| Test completo           | 90 segundos |
| Assertions (`expect`) | 30 segundos |
| Acciones                | 30 segundos |
| Navegaciones            | 60 segundos |

En CI, una prueba fallida puede ejecutarse nuevamente hasta **2 veces**.

## CI/CD

El proyecto utiliza **GitHub Actions** para ejecutar automáticamente las pruebas.

El workflow se encuentra en:

```text
.github/workflows/playwright.yml
```

El pipeline se ejecuta cuando:

* Se realiza un `push` a `main` o `master`.
* Se crea o actualiza un Pull Request hacia `main` o `master`.
* Se ejecuta manualmente mediante `workflow_dispatch`.

### Pipeline

El proceso de integración continua realiza los siguientes pasos:

1. Descarga el repositorio.
2. Configura Node.js.
3. Instala las dependencias:

```bash
npm ci
```

4. Valida TypeScript:

```bash
npx tsc --noEmit
```

5. Instala Playwright y sus dependencias:

```bash
npx playwright install --with-deps
```

6. Ejecuta las pruebas de `practiceQA`.
7. Ejecuta el setup requerido para las pruebas autenticadas.
8. Ejecuta las pruebas autenticadas.
9. Genera los reportes.
10. Publica los artefactos generados durante la ejecución.

## CI Artifacts

Los artefactos generados por GitHub Actions pueden incluir:

* Playwright HTML Report
* Screenshots
* Videos
* Traces
* JUnit results

Los artefactos del pipeline se conservan durante **30 días**.

## Configuration

El archivo principal de configuración es:

```text
playwright.config.ts
```

Actualmente define:

* Directorio general de pruebas: `./projects`
* Directorio de resultados: `./artifacts/test-results`
* HTML Reporter
* JUnit Reporter
* Screenshots en pruebas fallidas
* Videos en pruebas fallidas
* Traces en pruebas fallidas
* Retries en CI
* Ejecución controlada de workers en CI
* Configuración de autenticación
* Diferentes proyectos de Playwright

## Key Files

* `playwright.config.ts` — configuración general de Playwright.
* `package.json` — dependencias y scripts.
* `.github/workflows/ci.yml` — pipeline de integración continua.
* `projects/practiceQA/automation/pages` — Page Objects.
* `projects/practiceQA/automation/fixtures` — fixtures.
* `projects/practiceQA/automation/data` — datos de prueba.
* `projects/practiceQA/automation/utils` — utilities y helpers.
* `projects/practiceQA/automation/setup` — configuración y autenticación.
* `projects/practiceQA/tests` — pruebas automatizadas.
* `projects/practiceQA/tests/api` — pruebas API.
* `playwright/.auth/user.json` — estado local de autenticación generado por Playwright.

## Contributing

1. Crear una nueva rama:

```bash
git checkout -b feature/nombre-feature
```

2. Realizar los cambios.
3. Ejecutar las pruebas correspondientes.
4. Crear el commit:

```bash
git add .
git commit -m "feat: descripción del cambio"
```

5. Subir la rama:

```bash
git push origin feature/nombre-feature
```

6. Crear un Pull Request hacia `main`.

El Pull Request debe incluir una descripción clara del cambio y las pruebas realizadas.

## Author

**Cirley Nava**
