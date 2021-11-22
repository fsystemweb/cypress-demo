/// <reference types="cypress" />

it("Search hello world", () => {
  cy.visit("https://google.com");
  cy.get("#L2AGLb").click(); // accept google terms
  cy.get(".gLFyf").type("hello world");
  cy.get(":nth-child(2) > .eIPGRd > .pcTkSc > .wM6W7d > span").should(
    "have.text",
    "hello world java"
  );
  cy.get(":nth-child(3) > .eIPGRd > .pcTkSc > .wM6W7d > span").should(
    "have.text",
    "hello world python"
  );
  cy.get(":nth-child(4) > .eIPGRd > .pcTkSc > .wM6W7d > span").should(
    "have.text",
    "hello world c++"
  );

  cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").click();

  cy.get(
    '[href="https://www.filmaffinity.com/es/film516816.html"] > .LC20lb'
  ).should("have.text", "Hello World (2019) - Filmaffinity"); // check first result

  cy.get(":nth-child(11) > .fl").should("have.text", "10"); // test page max size in first page
});

it("Search hello world - Using I'm feeling lucky", () => {
  cy.visit("https://google.com");
  cy.get("#L2AGLb").click(); // accept google terms
  cy.get(".gLFyf").type("hello world");

  cy.get(".aajZCb > .lJ9FBc > center > .RNmpXc").click(); // click I have lucky

  cy.url().should("include", "filmaffinity");
});
