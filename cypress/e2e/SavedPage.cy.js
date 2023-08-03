describe('SavedPage', () => {
  it('displays a message when there are no saved asanas', () => {

    cy.visit('http://localhost:3000/saved')

    cy.get('.nav-container').should('exist');

    cy.get('.no-saved-msg').should('exist');

    cy.get('.no-saved-msg').contains('You currently have no saved asanas.')
  })
})

