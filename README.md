# 🧪 Cypress E2E Automation Framework

<div align="center">

### 🚀 Framework de Automatización de Pruebas End-to-End con Cypress

Diseñado bajo buenas prácticas de ingeniería de software utilizando **Page Object Model (POM)**, **Custom Commands** y una arquitectura modular orientada a la mantenibilidad y escalabilidad.

<br>

[![Cypress](https://img.shields.io/badge/Cypress-13.13.0-17202C?style=for-the-badge\&logo=cypress\&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-v24.14-339933?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/)
[![Architecture](https://img.shields.io/badge/Architecture-POM-orange?style=for-the-badge)](https://martinfowler.com/bliki/PageObject.html)

<br>

![Automation](https://img.shields.io/badge/Test_Automation-Cypress-success?style=flat-square)
![Framework](https://img.shields.io/badge/Framework-Custom_Commands-blue?style=flat-square)
![Testing](https://img.shields.io/badge/Testing-E2E_Testing-informational?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

<br>

![POM](https://img.shields.io/badge/Page_Object_Model-Implemented-orange?style=for-the-badge)
![Fixtures](https://img.shields.io/badge/Fixtures-JSON-blue?style=for-the-badge)
![Custom Commands](https://img.shields.io/badge/Custom_Commands-Implemented-success?style=for-the-badge)
![E2E](https://img.shields.io/badge/E2E-Testing-red?style=for-the-badge)
![QA](https://img.shields.io/badge/QA-Automation-purple?style=for-the-badge)

</div>

## 📊 Estadísticas del Repositorio

<div align="center">

![GitHub last commit](https://img.shields.io/github/last-commit/Danielito2252/Cypress-Framework?style=for-the-badge)

![GitHub repo size](https://img.shields.io/github/repo-size/Danielito2252/Cypress-Framework?style=for-the-badge)

![GitHub stars](https://img.shields.io/github/stars/Danielito2252/cypress-framework?style=for-the-badge)

![GitHub forks](https://img.shields.io/github/forks/Danielito2252/Cypress-Framework?style=for-the-badge)

</div>

# 📸 Evidencia de Ejecución

### Ejecución Exitosa de los Casos de Prueba

La siguiente captura muestra la ejecución exitosa de los escenarios automatizados utilizando Cypress.

<div align="center">

![Cypress Execution](Cypress-Framework/images/cypress-run.png)

</div>

# 🎥 Demostración

A continuación se muestra la ejecución automatizada del flujo de autenticación implementado en el framework.

<div align="center">

![Login Demo](Cypress-Framework/images/cypress-run.gif)

</div>

---

# 📖 Acerca del Proyecto

Este proyecto demuestra la implementación de un framework profesional de automatización de pruebas **End-to-End (E2E)** utilizando Cypress.

Fue desarrollado aplicando patrones de diseño ampliamente utilizados en la industria para garantizar:

* ✅ Código reutilizable
* ✅ Fácil mantenimiento
* ✅ Escalabilidad
* ✅ Separación de responsabilidades
* ✅ Mayor legibilidad de las pruebas

El objetivo principal es servir como evidencia práctica de conocimientos en automatización de pruebas, diseño de frameworks y buenas prácticas de ingeniería de software.

---

# 📌 Framework Highlights

* ✅ Page Object Model (POM)
* ✅ Custom Commands
* ✅ Fixtures Management
* ✅ Modular Architecture
* ✅ Reusable Components
* ✅ Scalable Design
* ✅ End-to-End Testing
* ✅ Professional Project Structure

---

# 🎯 Objetivos del Framework

* Automatizar escenarios críticos de negocio.
* Reducir duplicación de código.
* Facilitar la creación de nuevos casos de prueba.
* Centralizar la administración de elementos de interfaz.
* Mejorar la mantenibilidad del proyecto.
* Aplicar buenas prácticas de automatización utilizadas en entornos profesionales.

---

# ✨ Características Implementadas

## 🏛️ Page Object Model (POM)

Implementación del patrón de diseño que encapsula elementos y acciones de la interfaz de usuario en clases reutilizables.

### Beneficios

* Menor duplicación de código.
* Fácil mantenimiento.
* Mejor organización.
* Mayor legibilidad.

---

## ⚙️ Custom Commands

Extensión de la API nativa de Cypress mediante comandos personalizados reutilizables.

### Ejemplo

```javascript
cy.loginSintetizado();
```

### Beneficios

* Reduce código repetitivo.
* Mejora la legibilidad.
* Facilita la creación de escenarios complejos.

---

## 📂 Fixtures

Separación de datos de prueba mediante archivos JSON para facilitar el mantenimiento y la reutilización de información.

---

## 🧩 Arquitectura Modular

Organización clara de componentes para favorecer el crecimiento del framework sin afectar la estabilidad de las pruebas existentes.

---

## 🛡️ Pruebas Resilientes

Implementación de estrategias para mejorar la estabilidad durante la ejecución de escenarios automatizados:

* Uso de `{ force: true }`
* Simulación de escritura humana mediante `delay`
* Manejo de elementos dinámicos
* Reducción de falsos positivos

---

# 🛠️ Tecnologías Utilizadas

| Tecnología      | Uso                      |
| --------------- | ------------------------ |
| Cypress         | Automatización E2E       |
| JavaScript ES6+ | Desarrollo del framework |
| Node.js         | Entorno de ejecución     |
| Git             | Control de versiones     |
| GitHub          | Gestión del repositorio  |

---

# 🏗️ Estructura del Proyecto

```text
cypress-framework/
│
├── cypress/
│   ├── fixtures/
│   │   └── user-data.json
│   │
│   ├── page-objects/
│   │   └── LoginPage.js
│   │
│   ├── e2e/
│   │   └── login-advanced.cy.js
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

# 📂 Organización de Carpetas

| Carpeta             | Descripción                                        |
| ------------------- | -------------------------------------------------- |
| `fixtures`          | Datos de prueba utilizados por los escenarios      |
| `page-objects`      | Implementación del patrón Page Object Model        |
| `e2e`               | Casos de prueba automatizados                      |
| `support`           | Configuraciones globales y comandos personalizados |
| `cypress.config.js` | Configuración principal del framework              |

---

# 🧪 Casos de Prueba Automatizados

Actualmente el framework implementa escenarios de autenticación:

### ✅ Login Exitoso

Verificación de acceso utilizando credenciales válidas.

### ✅ Login Fallido

Validación de mensajes de error y comportamiento esperado ante credenciales inválidas.

---

# 🚀 Instalación

## 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Danielito2252/cypress-framework.git
```

## 2️⃣ Ingresar al proyecto

```bash
cd cypress-framework
```

## 3️⃣ Instalar dependencias

```bash
npm install
```

---

# ▶️ Ejecución de las Pruebas

## Modo Interactivo

Permite visualizar la ejecución de los escenarios en tiempo real.

```bash
npm run cypress:open
```

---

## Modo Headless

Ideal para ejecuciones rápidas desde terminal.

```bash
npm run cypress:run
```

---

# 📸 Evidencias de Ejecución

Puedes agregar capturas de pantalla, GIFs o videos demostrando la ejecución del framework.

### Ejemplo de Captura

```markdown
![Ejecución Cypress](docs/images/cypress-run.png)
```

### Ejemplo de GIF

```markdown
![Demo](docs/images/demo.gif)
```

---

# 📚 Buenas Prácticas Aplicadas

* ✔️ Page Object Model (POM)
* ✔️ Reutilización de código
* ✔️ Principio DRY (Don't Repeat Yourself)
* ✔️ Separación de datos de prueba
* ✔️ Modularidad
* ✔️ Escalabilidad
* ✔️ Mantenibilidad
* ✔️ Legibilidad del código

---

# 👨‍💻 Autor

## Herberth Barrios

**QA Automation Engineer | Software Developer**

### 🔗 LinkedIn

https://www.linkedin.com/in/herberth-barrios-299236261/

### 🔗 GitHub

https://github.com/Danielito2252

---

# ⭐ Sobre este Repositorio

Este proyecto forma parte de mi portafolio profesional y tiene como objetivo demostrar conocimientos en:

* Automatización de pruebas E2E
* Cypress Framework Design
* Page Object Model
* Custom Commands
* Arquitectura de pruebas escalable
* Buenas prácticas de QA Automation

Si el proyecto te resulta interesante o útil, considera darle una ⭐ al repositorio.

---

<div align="center">

### 🚀 Quality Assurance Through Automation

Construyendo software más confiable mediante pruebas automatizadas.

</div>
