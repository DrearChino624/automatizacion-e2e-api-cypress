AUTOMATIZACION E2E Y API CON CYPRESS

Opciones desarrolladas:
- Automatizacion E2E: Opcion 2 - Sauce Labs
- APIs: Opcion 3 - Swagger Petstore usuarios

Requisitos:
1. Tener instalado Node.js.
2. Tener acceso a internet para ejecutar las pruebas contra Sauce Demo y Swagger Petstore.

Pasos para ejecutar:
1. Abrir una terminal en la carpeta del proyecto.
2. Instalar dependencias con:
   npm install
3. Ejecutar todas las pruebas con:
   npm test
4. Ejecutar solo la prueba E2E con:
   npm run test:e2e
5. Ejecutar solo la prueba API con:
   npm run test:api
6. Para abrir Cypress en modo interactivo:
   npm run cy:open

Estructura:
- cypress/e2e/sauce-labs-compra.cy.js: prueba funcional de compra en Sauce Labs.
- cypress/e2e/petstore-usuario-api.cy.js: prueba de servicios REST para usuarios de Swagger Petstore.
- cypress/fixtures/checkout.json: datos usados en el flujo de compra.
- reports/: carpeta donde se guardan videos, capturas y respuestas de API generadas durante la ejecucion.

Notas:
- La prueba E2E valida login, seleccion de dos productos, carrito, formulario de compra y confirmacion final.
- La prueba API valida crear usuario, buscarlo, actualizar nombre/correo, buscarlo actualizado y eliminarlo.
- Al terminar la ejecucion, Cypress deja evidencias en la carpeta reports.

Repositorio GitHub:
https://github.com/DrearChino624/automatizacion-e2e-api-cypress
