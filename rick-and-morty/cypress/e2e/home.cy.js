beforeEach(() => {
  cy.visit('/')
})

it('should have a heading', () => {
  cy.get('h1').should('be.visible')
})

it('starts with an empty poke container', () => {
  cy.get('nav').children().should('have.length', 0)
 })