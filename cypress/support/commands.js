Cypress.Commands.add('assertAsanas', (fixture) => {
  cy.fixture(fixture).then((data) => {
    const poses = data.poses;
    poses.forEach((pose, index) => {
      cy.get(`.asana-card:nth-child(${index + 1})`).within(($card) => {
        cy.contains('.name', pose.english_name);
        cy.contains('.sanskrit-name', pose.sanskrit_name);
        cy.get('.asana-image').should('have.attr', 'src', pose.url_svg);
        cy.get('.description').should('contain', `Description: ${pose.pose_description}`);
        cy.get('.benefits').should('contain', `Benefits: ${pose.pose_benefits}`);
      });
    });
  });
});
