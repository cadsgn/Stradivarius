/* eslint-disable no-undef */
describe('Map loaded', () => {
  it('Show if map is visible', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=map]').should('be.visible');    
  });
})
