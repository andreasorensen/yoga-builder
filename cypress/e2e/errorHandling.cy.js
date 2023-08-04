describe("Error handling", () => {
  it("Handles 5XX error during fetch of poses", () => {
    cy.intercept(
      "GET",
      "https://yoga-api-nzy4.onrender.com/v1/poses?level=beginner",
      {
        statusCode: 500,
        body: "Internal Server Error",
      }
    ).as("getPoses");

    cy.visit("http://localhost:3000/");

    cy.get(".drop-down").select("beginner");

    cy.contains(
      `I'm sorry, something went wrong on our end. Please try again later. Server Error: 500`
    ).should("be.visible");
  });

  it("Handles 4XX error during fetch of poses", () => {
    cy.intercept(
      "GET",
      "https://yoga-api-nzy4.onrender.com/v1/poses?level=beginner",
      {
        statusCode: 404,
        body: "Not Found",
      }
    ).as("getPoses");

    cy.visit("http://localhost:3000/");

    cy.get('.drop-down').select('beginner');

    cy.contains(`I'm sorry, something went wrong. Error: 404`).should(
      "be.visible"
    );
  });
});
