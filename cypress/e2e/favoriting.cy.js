describe("Favoriting functionality", () => {
  it("toggles the favorite icon when clicked & exists on the SavedPage", () => {
    cy.intercept(
      "GET",
      "https://yoga-api-nzy4.onrender.com/v1/poses?level=beginner",
      {
        fixture: "beginner.json",
      }
    ).as("getBeginnerPoses");

    cy.visit("http://localhost:3000/");

    cy.get(".drop-down").select("Beginner");
    cy.get(".submit-btn").click();

    cy.get(".asana-card").first().as("firstCard");

    cy.get("@firstCard")
      .find(".fav-btn")
      .should(
        "have.attr",
        "src",
        "/static/media/not-favorited.de98d8c9e4e13ede460f.png"
      );

    cy.get("@firstCard").find(".fav-btn").click();

    cy.get("@firstCard")
      .find(".fav-btn")
      .should(
        "have.attr",
        "src",
        "/static/media/favorited.87754932ce8f4b92a09c.png"
      );

    cy.get("@firstCard").find(".fav-btn").click();

    cy.get("@firstCard")
      .find(".fav-btn")
      .should(
        "have.attr",
        "src",
        "/static/media/not-favorited.de98d8c9e4e13ede460f.png"
      );
  });

  it("shows favorited asana card on the saved page", () => {
    cy.intercept(
      "GET",
      "https://yoga-api-nzy4.onrender.com/v1/poses?level=beginner",
      {
        fixture: "beginner.json",
      }
    ).as("getBeginnerPoses");

    cy.visit("http://localhost:3000/");

    cy.get(".drop-down").select("Beginner");
    cy.get(".submit-btn").click();

    cy.get(".asana-card").first().as("firstCard");
    cy.get("@firstCard").find(".fav-btn").click();

    cy.get(".saved-asanas-btn").click();

    cy.get(".asana-card").first().should("exist");
  });
});
