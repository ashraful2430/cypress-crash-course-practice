describe("Friendship status", () => {
  let accessToken;
  before(() => {
    cy.readFile("cypress/fixtures/loginToken.json").then((info) => {
      accessToken = info.accessToken;
    });
  });

  it("As a groom/bride, I should be able to see my all friendship status", () => {
    cy.request({
      method: "GET",
      url: "/api/user/friendship/all",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => {
      console.log(res);
      expect(res.body.message).to.equal("Succeed");
      expect(res.status).to.equal(200);
    });
  });
  it("As a groom/bride, I should be able to see my all pending friendship status", () => {
    cy.request({
      method: "GET",
      url: "/api/user/friendship/pending",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => {
      console.log(res);
      expect(res.body.message).to.equal("Succeed");
      expect(res.status).to.equal(200);
    });
  });
  it("As a groom/bride, I should be able to see my all accepted friendship status", () => {
    cy.request({
      method: "GET",
      url: "/api/user/friendship/accepted",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => {
      console.log(res);
      expect(res.body.message).to.equal("Succeed");
      expect(res.status).to.equal(200);
    });
  });
  it("As a groom/bride, I should be able to see my all denied friendship status", () => {
    cy.request({
      method: "GET",
      url: "/api/user/friendship/denied",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => {
      console.log(res);
      expect(res.body.message).to.equal("Succeed");
      expect(res.status).to.equal(200);
    });
  });
});
