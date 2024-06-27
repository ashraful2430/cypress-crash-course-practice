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
      const token = res.body.token.accessToken;
      cy.writeFile("cypress/fixtures/adminToken.json", { adminToken: token });
      console.log(res.body);
      expect(res.status).to.equal(200);
      // Assert that the response body contains a success message (adjust based on actual response structure)
      expect(res.body).to.have.property("message", "Login succeed");
    });
  });
});
