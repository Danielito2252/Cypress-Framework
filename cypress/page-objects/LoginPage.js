class LoginPage {
  // Elementos (Selectores)
  get emailInput() { return cy.get('#email'); }
  get passwordInput() { return cy.get('#password'); }
  get loginButton() { return cy.get('#loginButton'); }
  get errorMessage() { return cy.get('.error'); }

  // Acciones (Métodos reutilizables actualizados con {force: true})
  navigate() {
    cy.visit('/#/login');
  }

 typeEmail(email) {
    // Añadimos delay: 150 junto al force: true
    this.emailInput.clear({force: true}).type(email, {force: true, delay: 150});
  }

  typePassword(password) {
    // Añadimos delay: 150 junto al force: true
    this.passwordInput.clear({force: true}).type(password, {force: true, delay: 150});
  }

  clickLogin() {
    this.loginButton.click({force: true});
  }
}

export default new LoginPage();