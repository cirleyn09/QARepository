# API Testing con Postman

La colección `PracticeQA - API Testing` valida endpoints REST de PracticeQA con requests y scripts de prueba de Postman.

## Archivos

- `collections/PracticeQA - API Testing.postman_collection.json`: colección de requests y validaciones.
- `environments/PracticeQA Environment.postman_environment.json`: environment con la variable `base-url`.

## Cobertura

- Registro de usuarios: creación exitosa, email duplicado, formato de email inválido y campos requeridos ausentes.
- Login: autenticación exitosa, credenciales vacías, contraseña incorrecta y email incorrecto.
- Logout: cierre de sesión y validaciones con token ausente o inválido.
- Productos: filtrado por categoría.
- Validaciones automáticas de status HTTP, formato y contenido de respuesta, datos de usuario y token.

El registro genera un nombre y un email únicos por ejecución. El login almacena el token como variable de colección para las solicitudes autenticadas.

## Ejecutar en Postman

1. Importa la colección `collections/PracticeQA - API Testing.postman_collection.json`.
2. Importa `environments/PracticeQA Environment.postman_environment.json` y selecciona el environment `PracticeQA Environment`.
3. Confirma que `base-url` apunte al host de la API, sin protocolo. El valor incluido es `fullstack.qa-practice.dev`.
4. Ejecuta un request individual o toda la colección mediante Collection Runner.

## Ejecutar con Newman

Desde la raíz del repositorio, instala las dependencias si aún no lo has hecho y ejecuta:

```bash
npm install
npm run test:postman
```

El script del proyecto invoca Newman con esta colección y environment, y usa el reporter `htmlextra`.
