describe("Friend request invitation", () => {
  let accessToken;
  let newUserId;
  before(() => {
    cy.readFile("cypress/fixtures/loginToken.json").then((info) => {
      accessToken = info.accessToken;
    });
    cy.readFile("cypress/fixtures/newUserData.json").then((info) => {
      newUserId = info.newUserId;
    });
  });
  it("As a groom/bride, I should be able to send friend request to another user", () => {
    cy.request({
      method: "POST",
      url: "/api/user/single-invite",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        recipient: `${newUserId}`,
      },
    }).then((res) => {
      console.log(res.body);
      expect(res.message).to.equal("Succeed");
      const updatedFriend = res.body.data._id;
      cy.writeFile("cypress/fixtures/updatedFriend.json", {
        updatedFriend: updatedFriend,
      });
    });
  });
});
