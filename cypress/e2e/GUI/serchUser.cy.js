import Login from "../pages/Login";

describe("Search user and send friend request", () => {
  const login = new Login();
  it("Search user", () => {
    login.loginToTheWebsite();
    cy.wait(5000);
    // getting the search bar and typing the user name
    cy.get(
      "body > div:nth-child(16) > div:nth-child(3) > div > div.search_main > div.searchBar > div.flex.ml-15.right-search > div > input"
    ).type("Salma Sarkar");
    cy.get(".search_btn").click();
    //   check all the users

    cy.wait(5000);
    cy.get(
      "body > div:nth-child(16) > div:nth-child(3) > div > div.search_main > div.grid.grid-cols-3.grid-cols-3-responsive.grid-gap-30.px-30.pb-30"
    )
      .children("div")
      .should("have.length", 4);
    // send friend request to the user
    cy.wait(5000);
    cy.get(
      ":nth-child(1) > .mantine-Card-cardSection > .card-footer > .mantine-Group-root > :nth-child(2) > .btn-fill"
    ).click();

    // click on the cancel the friend request button
    cy.wait(2000);
    cy.get(".btn-light").click();

    // click on okay button
    cy.get(".reminder-box > :nth-child(2) > :nth-child(2) > .btn-fill").click();
  });
});
