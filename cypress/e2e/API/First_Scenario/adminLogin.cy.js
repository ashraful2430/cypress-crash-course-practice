describe("Admin Login", () => {
  it("Storing Admin access token dynamically", () => {
    cy.request({
      method: "POST",
      url: "/api/admin/login",
      body: {
        email: "mituldas751@gmail.com",
        password: "Mitul@23",
      },
    }).then((res) => {
      console.log(res.body.token.accessToken);
      const token = res.body.token.accessToken;
      cy.writeFile("cypress/fixtures/adminToken.json", { adminToken: token });
    });
  });
});
