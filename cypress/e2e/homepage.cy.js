//  DONE   The "Homepage" component is rendered correctly with all its child components
//Dropdown functionality: Changing the level updates the selectedLevel state
//Submitting the form fetches the correct poses based on selectedLevel
//Loading state is displayed while fetching data
//Poses are rendered correctly when the data is fetched
//Toggle favorite functionality: The favorited poses state updates correctly


describe('homepage', () => {
  beforeEach(() => {
    cy.setupIntercepts();
    cy.visit('http://localhost:3000/')
  })

  it('renders homepage correctly with all it`s elements', () => {
    cy.get('.nav-container').should('be.visible');
  
    cy.get('.homepage-btn').should('be.visible');
    cy.get('.saved-asanas-btn').should('be.visible');

    cy.get('.form-container').within(() => {
      cy.get('.form').should('be.visible');
      cy.get('.curr-level').should('be.visible');
      cy.get('.drop-down').should('be.visible');
      cy.get('.submit-btn').should('be.visible');
    });
  });


}) 