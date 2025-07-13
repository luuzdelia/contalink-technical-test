# Pruebas Automatizadas - Contalink

Este repositorio contiene pruebas de automatización para el sistema de gestión de facturas, separadas por:

- Cypress → pruebas E2E (interfaz gráfica)
- Postman → pruebas API (REST)

---

## 🖥️ Cypress

### Funcionalidades cubiertas:
- Login con validaciones
- Búsqueda de facturas
- Creación, edición y eliminación de facturas

### Instalación y uso:
```bash
npm install
npx cypress open        # Modo visual
npx cypress run         # Modo headless
```
### Consideraciones
- Se debe crear un archivo `.env` que debe incluir las credenciales y la URL del sistema, se adjunta un archivo `.env.example` de referencia.
---

## 📬 Postman
Funcionalidades cubiertas:

- Scripts para validación de endpoints de creación y lectura de facturas con sus validaciones
- Uso de datos desde archivo CSV para el 3er endpoint

### Consideraciones
- Los datos en _data_test.csv_ permiten probar variaciones en Postman de forma parametrizada.
- El entorno definido (`Test Environment`) apunta al ambiente de pruebas para Postman.

