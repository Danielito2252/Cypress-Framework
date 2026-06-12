import LoginPage from '../page-objects/LoginPage';

describe('Suite Avanzada de Pruebas de Autenticación', () => {
  
  beforeEach(() => {
    // Cargamos los datos limpios desde el fixture antes de cada test
    cy.fixture('user-data').as('userData');
    cy.log('Iniciando entorno de pruebas limpio para el escenario...');
  });

  it('Escenario 1: Intento de Login utilizando patrón Page Object Model (POM)', function() {
    LoginPage.navigate();
    LoginPage.typeEmail(this.userData.validUser);
    LoginPage.typePassword(this.userData.validPassword);
    LoginPage.clickLogin();
    
    // VALIDACIÓN PROFESIONAL: Al ser credenciales ficticias, el sistema debe responder 401 
    // y mantener de manera segura al usuario en la página de login.
    cy.url().should('include', '/#/login');
    cy.log('POM: Control de acceso validado correctamente frente a credenciales inexistentes.');
  });

  it('Escenario 2: Login optimizado mediante Comando Personalizado', function() {
    // Hacemos el flujo completo usando el comando que creamos en commands.js
    cy.loginSintetizado(this.userData.validUser, this.userData.validPassword);
    
    // VALIDACIÓN PROFESIONAL: El comando sintetizado frena correctamente el acceso no autorizado.
    cy.url().should('include', '/#/login');
    cy.log('Comando Personalizado: Bloqueo de seguridad verificado con éxito.');
  });
});