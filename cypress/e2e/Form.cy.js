describe("FilterForm interactions", () => {
  it("Changing the level updates the selectedLevel state", () => {
    cy.visit("http://localhost:3000/");

    cy
      .intercept(
        "GET",
        "https://yoga-api-nzy4.onrender.com/v1/poses?level=intermediate",
        {
          fixture: "intermediate.json",
        }
      )
      .as("getIntermediatePoses"),
      cy
        .intercept(
          "GET",
          "https://yoga-api-nzy4.onrender.com/v1/poses?level=expert",
          {
            fixture: "expert.json",
          }
        )
        .as("getExpertPoses");

    cy.get(".drop-down").should("have.value", "");

    cy.get(".drop-down")
      .select("Intermediate")
      .should("have.value", "intermediate");

    cy.get(".drop-down").select("Expert").should("have.value", "expert");

    cy.get(".drop-down").select("Beginner").should("have.value", "beginner");
  });

  it("Changing the level to beginner displays beginner poses", () => {
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

    cy.wait("@getBeginnerPoses");

    cy.assertAsanas("beginner.json");
  });

  it("Changing the level to intermediate displays intermediate poses", () => {
    cy.intercept(
      "GET",
      "https://yoga-api-nzy4.onrender.com/v1/poses?level=beginner",
      {
        fixture: "beginner.json",
      }
    ).as("getBeginnerPoses");

    cy.intercept(
      "GET",
      "https://yoga-api-nzy4.onrender.com/v1/poses?level=intermediate",
      {
        fixture: "intermediate.json",
      }
    ).as("getIntermediatePoses");

    cy.visit("http://localhost:3000/");
    cy.get(".drop-down").select("Intermediate");
    cy.get(".submit-btn").click();
    cy.wait("@getIntermediatePoses");

    cy.assertAsanas("intermediate.json");
  });

  it("Changing the level to expert displays expert poses", () => {
    cy.intercept(
      "GET",
      "https://yoga-api-nzy4.onrender.com/v1/poses?level=beginner",
      {
        fixture: "beginner.json",
      }
    ).as("getBeginnerPoses");

    cy.intercept(
      "GET",
      "https://yoga-api-nzy4.onrender.com/v1/poses?level=expert",
      {
        fixture: "expert.json",
      }
    ).as("getExpertPoses");

    cy.visit("http://localhost:3000/");
    cy.get(".drop-down").select("Expert");
    cy.get(".submit-btn").click();
    cy.wait("@getExpertPoses");

    cy.assertAsanas("expert.json");
  });
});
