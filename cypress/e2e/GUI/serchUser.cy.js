import Login from "../pages/Login";

describe("Search user and send friend request", () => {
  const login = new Login();
  it("Search user", () => {
    login.loginToTheWebsite();
    // getting the search bar and typing the user name
    // cy.get(
    //   "body > div:nth-child(16) > div:nth-child(3) > div > div.search_main > div.searchBar > div.flex.ml-15.right-search > div > input"
    // ).type("Salma Sarkar");
  });
});
