describe("Friendship count", () => {
  let accessToken;
  before(() => {
    cy.readFile("cypress/fixtures/loginToken.json").then((info) => {
      accessToken = info.accessToken;
    });
  });
  it("As a groom/bride, I should be able to get my friendship count", () => {
    cy.request({
      method: "GET",
      url: "/api/user/friendship-count",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => {
      console.log(res);
    });
  });
});
