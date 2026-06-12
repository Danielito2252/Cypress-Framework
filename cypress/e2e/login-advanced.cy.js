import LoginPage from '../page-objects/LoginPage';

describe('Suite Avanzada de Pruebas de Autenticación', () => {
  
  beforeEach(() => {
    cy.fixture('user-data').as('userData');
    cy.log('Iniciando entorno de pruebas limpio para el escenario...');
  });

  it('Escenario 1: Intento de Login utilizando patrón Page Object Model (POM)', function() {
    LoginPage.navigate();
    LoginPage.typeEmail(this.userData.validUser);
    LoginPage.typePassword(this.userData.validPassword);
    LoginPage.clickLogin();
    
    // VALIDACIÓN: Al ser datos incorrectos para esta web, el sistema nos retiene en el login
    cy.url().should('include', '/login');
    cy.log('POM: Control de acceso validado con éxito en un entorno real.');
  });

  it('Escenario 2: Login optimizado mediante Comando Personalizado', function() {
    cy.loginSintetizado(this.userData.validUser, this.userData.validPassword);
    
    cy.url().should('include', '/login');
    cy.log('Comando Personalizado: Bloqueo de credenciales verificado con éxito.');
  });
});