/// <reference types="cypress" />

const fixtureFile = "properties.json";

it("TEST_SUGGESTION", () => {
  cy.fixture(fixtureFile).then((data) => {
    cy.visit(data.googleUrl);
    cy.get("#L2AGLb").click(); // accept google terms
    cy.get(".gLFyf").type(data.searchValue);
    cy.get(":nth-child(2) > .eIPGRd > .pcTkSc > .wM6W7d > span").should(
      "have.text",
      data.suggestions[0]
    );
    cy.get(":nth-child(2) > .eIPGRd > .pcTkSc > .wM6W7d > span").should(
      "not.have.text",
      data.suggestions[1]
    );

    cy.get(":nth-child(3) > .eIPGRd > .pcTkSc > .wM6W7d > span").should(
      "have.text",
      data.suggestions[2]
    );

    cy.get(":nth-child(4) > .eIPGRd > .pcTkSc > .wM6W7d > span").should(
      "have.text",
      data.suggestions[3]
    );

    cy.screenshot("TEST_1-Google_Suggestions");
  });
});
