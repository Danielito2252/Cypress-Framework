// ***********************************************************
// Configuración Global de Soporte para Pruebas E2E
// ***********************************************************

// 1. Importar los Comandos Personalizados (commands.js)
// Esto hace que cy.loginSintetizado() esté disponible en todo el framework.
import './commands';

// 2. Manejador de Excepciones No Controladas (Mapeo de Estabilidad)
// Nota de Arquitectura: La aplicación Juice Shop genera errores internos de Angular/React 
// que pueden romper los tests de Cypress de forma injustificada. 
// Con este bloque evitamos que el framework falle por errores ajenos al flujo del test.
Cypress.on('uncaught:exception', (err, runnable) => {
    // Al retornar false, le decimos a Cypress que ignore el error de la app y continúe con la prueba
    return false;
});

// 3. Configuraciones Globales de Comportamiento (Opcional)
beforeEach(() => {
    // Limpiar cookies y almacenamiento local para asegurar que cada test corra en un entorno limpio
    cy.clearCookies();
    cy.clearLocalStorage();
    
    // Configurar la aceptación automática de alertas si fuera necesario
    cy.log('Iniciando entorno de pruebas limpio para el escenario...');
});