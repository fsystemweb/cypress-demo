/// <reference types="cypress" />

const fixtureFile = "properties.json";

it("TEST_FIRST_PAGE", () => {
  cy.fixture(fixtureFile).then((data) => {
    cy.visit(data.googleUrl);
    cy.get("#L2AGLb").click(); // accept google terms
    cy.get(".gLFyf").type(data.searchValue);

    cy.screenshot("TEST_2-Google_Before_Search");

    cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").click();

    cy.get('[href="' + data.firstResultWebsite + '"] > .LC20lb').should(
      "have.text",
      data.firstResultTitle
    ); // check first result

    cy.get(":nth-child(11) > .fl").should("have.text", "10"); // test page max size in first page

    cy.screenshot("TEST_2-Google_Result_Page");
  });
});
