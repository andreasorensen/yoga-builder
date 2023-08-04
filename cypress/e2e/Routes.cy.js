describe('App routing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have different rountes when navigating with homepage button & saved buttons', () => {
    cy.get('.saved-asanas-btn').click() 
    cy.url().should('include', '/saved')
    cy.get('.saved-poses-container')
    cy.contains('You currently have no saved asanas.')

    cy.get('.homepage-btn').click()
    cy.url().should('include', '/')
  })

  it('displays NotFoundPage for non-existing routes', () => {
    cy.visit('http://localhost:3000/non-existing')
    cy.url().should('include', '/non-existing')
    cy.get('.not-found-msg')
    cy.contains('We\'re sorry, but that page cannot be found.') 
  })
})
