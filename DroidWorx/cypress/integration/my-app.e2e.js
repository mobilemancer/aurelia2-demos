/// <reference types="Cypress" />

context('my-app', () => {
  it('shows message', () => {
    cy.visit('/');
    cy.wait(500);
    cy.get('my-app>div').contains('Hello World!');
  });
});
