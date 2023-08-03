Cypress.Commands.add('setupIntercepts', () => {
  cy.intercept('GET', 'https://yoga-api-nzy4.onrender.com/v1/poses?level=beginner', {
    fixture: 'beginner.json'
  }).as('getBeginnerPoses');

  cy.intercept('GET', 'https://yoga-api-nzy4.onrender.com/v1/poses?level=intermediate', {
    fixture: 'intermediate.json'
  }).as('getIntermediatePoses');

  cy.intercept('GET', 'https://yoga-api-nzy4.onrender.com/v1/poses?level=expert', {
    fixture: 'expert.json'
  }).as('getExpertPoses');
});
