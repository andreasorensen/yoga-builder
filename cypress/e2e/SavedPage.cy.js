describe("SavedPage", () => {

  it("displays a message when there are no saved asanas", () => {
    cy.visit("http://localhost:3000/saved");

    cy.get(".nav-container").should("exist");

    cy.get(".no-saved-msg").should("exist");

    cy.get(".no-saved-msg").contains("You currently have no saved asanas.");
  });

  it("should display the saved AsanaCards", () => {
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

    cy.saveAsanas();

    cy.get(".asana-card").within(($card) => {
      cy.get(".fav-btn").should(
        "have.attr",
        "src",
        "/static/media/favorited.87754932ce8f4b92a09c.png"
      );
      cy.contains(".name", "Half Boat");
      cy.contains(".sanskrit-name", "Ardha Nāvāsana");
      cy.get(".asana-image").should(
        "have.attr",
        "src",
        "https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483073/yoga-api/2_ozh7sv.svg"
      );
      cy.get(".description").should(
        "contain",
        `Description: From a seated position the hands are gripped around the back of the legs and the knees are bent in a 90 degree angle.  Both legs are pulled in towards the abdomen.  The core is engaged to maintain balance on the sits bones (be sure that the back does not round).  The front of the torso lengthens between the pubis and top of the sternum as the spine extends in both directions reaching up to the sky and rooting down to the earth.  The gaze is forward and Bandhas are engaged.`
      );
      cy.get(".benefits").should(
        "contain",
        `Benefits: Strengthens the abdomen, hip flexors and spine.  Stimulates the kidneys, thyroid, prostate glands and intestines.  Helps relieve stress.  Improves digestion.`
      );
    });
  });

  it("should be able to unfavorite the asana from the saved page", () => {
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

    cy.saveAsanas();

    cy.get(".fav-btn").click();

    cy.get('.no-saved-msg').should('be.visible');

  });

});
