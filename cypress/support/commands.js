Cypress.Commands.add('loginSintetizado', (username, password) => {
  cy.visit('https://the-internet.herokuapp.com/login');
  cy.get('#username').type(username, {force: true, delay: 150});
  cy.get('#password').type(password, {force: true, delay: 150});
  cy.get('button[type="submit"]').click({force: true});
});