describe('App routing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('visits the homepage', () => {
    cy.url().should('include', '/')
    // cy.get('.form-container')
    // cy.contains('Please select a level before submitting.')
  })

  it('navigates to /saved when Saved Asanas link is clicked', () => {
    cy.get('.saved-asanas-btn').click() 
    cy.url().should('include', '/saved')
    cy.get('.saved-poses-container') // assuming SavedPage has a class name of 'saved-poses-container'
    cy.contains('You currently have no saved asanas.') // assuming this text appears by default on SavedPage
  })

  it('displays NotFoundPage for non-existing routes', () => {
    cy.visit('http://localhost:3000/non-existing')
    cy.url().should('include', '/non-existing')
    cy.get('.not-found-msg') // assuming NotFoundPage has a class name of 'not-found-msg'
    cy.contains('We\'re sorry, but that page cannot be found.') 
  })
})
