/// <reference types="cypress" />

const fixtureFile = "properties.json";

it("TEST_I'M_FEELING_LUCKY_BUTTON", () => {
  cy.fixture(fixtureFile).then((data) => {
    cy.visit(data.googleUrl);
    cy.get("#L2AGLb").click(); // accept google terms
    cy.get(".gLFyf").type(data.searchValue);
    cy.screenshot("TEST_3-Google_Before_Search");

    cy.get(".aajZCb > .lJ9FBc > center > .RNmpXc").click(); // click I have lucky

    cy.url().should("include", data.firstResultDomain);
    cy.screenshot("TEST_3-External_Page");
  });
});
