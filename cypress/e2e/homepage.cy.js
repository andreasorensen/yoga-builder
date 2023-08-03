//  DONE   The "Homepage" component is rendered correctly with all its child components
//  DONE    Dropdown functionality: Changing the level updates the selectedLevel state
//Submitting the form fetches the correct poses based on selectedLevel
//Loading state is displayed while fetching data
//Poses are rendered correctly when the data is fetched
//Toggle favorite functionality: The favorited poses state updates correctly


describe('homepage', () => {

  it('renders homepage correctly with all it`s elements', () => {

    cy.intercept('GET', 'https://yoga-api-nzy4.onrender.com/v1/poses?level=beginner', {
      fixture: 'beginner.json'
    }).as('getBeginnerPoses');

    cy.visit('http://localhost:3000/')
    cy.wait('@getBeginnerPoses')

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

  it('Changing the level updates the selectedLevel state', () => {

    cy.intercept('GET', 'https://yoga-api-nzy4.onrender.com/v1/poses?level=beginner', {
      fixture: 'beginner.json'
    }).as('getBeginnerPoses');

    cy.intercept('GET', 'https://yoga-api-nzy4.onrender.com/v1/poses?level=intermediate', {
      fixture: 'intermediate.json'
    }).as('getIntermediatePoses');
  
    cy.intercept('GET', 'https://yoga-api-nzy4.onrender.com/v1/poses?level=expert', {
      fixture: 'expert.json'
    }).as('getExpertPoses');

    cy.visit('http://localhost:3000/')
    cy.wait('@getBeginnerPoses')

    cy.get('.drop-down').should('have.value', 'beginner');
  
    cy.get('.drop-down').select('Intermediate').should('have.value', 'intermediate');

    cy.get('.drop-down').select('Expert').should('have.value', 'expert');

    cy.get('.drop-down').select('Beginner').should('have.value', 'beginner');
  });


}) 