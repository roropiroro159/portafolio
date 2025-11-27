---
trigger: always_on
---

Activation Mode: Always On
Content:
- Siempre maneja errores con `try/catch` en llamadas async.
- Nunca expongas claves o secretos en el código, siempre usa variables de entorno.
- Valida datos en bordes: entradas de API, formularios, subida de archivos.
- Escapa siempre los datos renderizados dinámicamente para evitar XSS.