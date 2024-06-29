describe("Login user", () => {
  it("As a groom/bride, I should be able to login to the website", () => {
    cy.request({
      method: "POST",
      url: "/api/user/login",
      body: {
        email: "ashrafulislamashik960@gmail.com",
        password: "Ashik@2430",
      },
    }).then((res) => {
      expect(res.status).to.equal(200);
      const accessToken = res.body.token.accessToken;
      cy.writeFile("cypress/fixtures/loginToken.json", {
        accessToken: accessToken,
      });
    });
  });
});
