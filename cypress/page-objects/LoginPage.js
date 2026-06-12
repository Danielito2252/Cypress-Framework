class LoginPage {
  // Selectores reales de la nueva página de pruebas
  get usernameInput() { return cy.get('#username'); }
  get passwordInput() { return cy.get('#password'); }
  get loginButton() { return cy.get('button[type="submit"]'); }

  navigate() {
    // URL ultra-estable de login real
    cy.visit('https://the-internet.herokuapp.com/login');
  }

  typeEmail(username) {
    // Mantenemos tu delay humano de 150ms y el force por seguridad
    this.usernameInput.clear({force: true}).type(username, {force: true, delay: 150});
  }

  typePassword(password) {
    this.passwordInput.clear({force: true}).type(password, {force: true, delay: 150});
  }

  clickLogin() {
    this.loginButton.click({force: true});
  }
}

export default new LoginPage();