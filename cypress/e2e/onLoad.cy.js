describe("homepage", () => {
  it("renders homepage correctly with all it`s elements", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".nav-container").should("be.visible");

    cy.get(".homepage-btn").should("be.visible");
    cy.get(".saved-asanas-btn").should("be.visible");

    cy.get(".form-container").within(() => {
      cy.get(".form").should("be.visible");
      cy.get(".curr-level").should("be.visible");
      cy.get(".drop-down").should("be.visible");
      cy.get(".submit-btn").should("be.visible");
    });
  });
});
