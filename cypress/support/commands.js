Cypress.Commands.add('loginSintetizado', (email, password) => {
  cy.visit('/#/login');
  cy.get('#email').type(email, {force: true, delay: 150});
  cy.get('#password').type(password, {force: true, delay: 150});
  cy.get('#loginButton').click({force: true});
});