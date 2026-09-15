import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './projects',
  outputDir: './artifacts/test-results',


  // Evita que una prueba se quede colgada demasiado tiempo
  timeout: 90_000,

  // Timeout para assertions como expect(locator).toBeVisible()
  expect: {
    timeout: 30_000,
  },


  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'],
    [
      'html',
      {
        outputFolder: './artifacts/playwright-report',
        open: 'never',
        //  title: 'Semana 8 - Día 36 - Reporte HTML',
      },
    ],
    [
      'junit',
      {
        outputFile: './artifacts/junit/results.xml',
      },
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    actionTimeout: 30_000,
    navigationTimeout: 60_000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      testIgnore: ['**/practiceQA/**',
        '**/academyBugs/**',
      ],
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      testIgnore: ['**/practiceQA/**',
        '**/academyBugs/**',
      ],
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      testIgnore: ['**/practiceQA/**',
        '**/academyBugs/**',
      ],
      use: { ...devices['Desktop Safari'] },
    },

    //{
    // name: 'API Test',
    // testMatch: 'APITest/**/* ',
    // use: {
    //  baseURL: '',
    //   extraHTTPHeaders: {
    //    'Authorization': token,
    //    }
    // }
    // },

    {
      name: 'academyBugs',
      testMatch: /academyBugs\/tests\/.*\.spec\.ts/,
      use: {
        baseURL:
          process.env.ACADEMY_BUGS_BASE_URL ||
          'https://academybugs.com/',
      },
    },


    {
      name: 'practiceQA',
      testMatch: /practiceQA\/tests\/.*\.spec\.ts/,
      testIgnore:
        ['**/practiceQA/tests/products/**/*.spec.ts',
          /.*example.*\.ts/,
        ],
      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env.PRACTICE_QA_BASE_URL || 'https://fullstack.qa-practice.dev',
      },
    },

    {
      name: 'practiceQA-setup',

      testMatch: /practiceQA\/automation\/setup\/.*\.setup\.ts/,
      testIgnore: /.*example.*\.ts/,
      use: {
        ...devices['Desktop Chrome'],

        baseURL:
          process.env.PRACTICE_QA_BASE_URL ||
          'https://fullstack.qa-practice.dev',
      },
    },

    {
      name: 'practiceQA-authenticated',
      testMatch: /practiceQA\/tests\/products\/.*\.spec\.ts/,
      testIgnore: /.*example.*\.ts/,
      dependencies: ['practiceQA-setup'],

      use: {
        ...devices['Desktop Chrome'],
        baseURL:
          process.env.PRACTICE_QA_BASE_URL ||
          'https://fullstack.qa-practice.dev',

        storageState: 'playwright/.auth/user.json',
      },
    },

    /*
    Este se usa para ejecutar pruebas en un dispositivo móvil específico, como un iPhone 12. 
    Al configurar este proyecto, Playwright emulará el entorno de ese dispositivo, 
    lo que incluye la resolución de pantalla, el agente de usuario y otras características específicas del dispositivo.
     Esto es útil para asegurarse de que tu aplicación web funcione correctamente en dispositivos móviles,
      ya que puedes detectar problemas relacionados con la interfaz de usuario o el rendimiento que podrían no ser evidentes en un entorno de escritorio.
        {
          name: 'Iphone',
          testMatch: "/*.spec.ts",
          use: { ...devices['iPhone 12'] },
        },
        */

    /*
      Este proyecto se utiliza para ejecutar pruebas de humo (smoke tests) en el navegador Chromium.
      Ojo para esto es necesario agregar la etiqueta @smoke a las pruebas que deseas incluir en este proyecto.
      Al configurar este proyecto, Playwright ejecutará solo las pruebas que tengan la etiqueta @smoke en el navegador Chromium.
       Esto es útil para realizar pruebas rápidas y básicas para verificar que las funcionalidades principales de tu aplicación estén funcionando correctamente antes de ejecutar pruebas más exhaustivas.
{
  name: 'smoke-chromium',
  grep: /@smoke/,
  use: {
    ...devices['Desktop Chrome'],
  },
 
  Con este comando se correria npx playwright test --project=smoke-chromium
    */

    /*
    este proyecto se utiliza para ejecutar pruebas de regresión en el navegador Chromium.
    Al configurar este proyecto, Playwright ejecutará solo las pruebas que tengan la etiqueta @regression en el navegador Chromium.
     Esto es útil para ejecutar pruebas específicas de regresión que se centran en verificar que las funcionalidades existentes no se hayan visto afectadas por cambios recientes en el código.
     Para usar este proyecto, debes agregar la etiqueta @regression a las pruebas que deseas incluir en este conjunto de pruebas de regresión.
     Además, en la configuración de este proyecto, se establece la propiedad baseURL utilizando una variable de entorno BASE_URL. 
     Esto permite que las pruebas de regresión se ejecuten contra diferentes entornos (por ejemplo, desarrollo, staging, producción) sin necesidad de modificar el código de las pruebas. 
     Si la variable de entorno BASE_URL no está definida, se utilizará un valor predeterminado (en este caso, 'https://prod.tu-app.com').
     Esto es especialmente útil para ejecutar pruebas de regresión en diferentes entornos sin tener que cambiar la configuración de las pruebas, lo que facilita la integración continua y el despliegue continuo (CI/CD).
  {
        name: 'regression-chromium',
        grep: /@regression/,
        use: {
          ...devices['Desktop Chrome'],
          baseURL: process.env.BASE_URL || 'https://prod.tu-app.com',
        },
        Con este comando se correria npx playwright test --project=regression-chromium 
    }
 
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});


/* retries es una configuración que se utiliza para especificar el número de veces que Playwright intentará ejecutar una prueba fallida antes de marcarla como fallida definitivamente.
En el contexto de la configuración que has proporcionado, retries se establece en 2 si la variable de entorno CI está presente (lo que indica que las pruebas se están ejecutando en un entorno de integración continua), y se establece en 0 (sin reintentos) si no se está ejecutando en CI.

Esto significa que si una prueba falla durante la ejecución en CI, Playwright intentará ejecutarla nuevamente hasta un máximo de 2 veces antes de marcarla como fallida. En entornos locales, las pruebas no se reintentará automáticamente, lo que puede ser útil para detectar problemas de manera más rápida durante el desarrollo.

timeout es una configuración que se utiliza para establecer un límite de tiempo para la ejecución de cada prueba. En el contexto de la configuración que has proporcionado, timeout se establece en 60,000 milisegundos (o 60 segundos). Esto significa que si una prueba tarda más de 60 segundos en completarse, Playwright la marcará como fallida debido a un tiempo de espera agotado.
*/
