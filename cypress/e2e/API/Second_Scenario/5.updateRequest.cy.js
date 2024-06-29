describe("Friendship request update", () => {
  let accessToken;
  let updatedFriend;
  before(() => {
    cy.readFile("cypress/fixtures/loginToken.json").then((info) => {
      accessToken = info.accessToken;
    });
    cy.readFile("cypress/fixtures/updatedFriend.json").then((info) => {
      updatedFriend = info.updatedFriend;
    });
  });
  it("As a groom/bride, I should be able to update friend request", () => {
    cy.request({
      method: "PATCH",
      url: "/api/user/updatefriends",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        status: "accepted",
        friendshipId: `${updatedFriend}`,
      },
    }).then((res) => {
      expect(res.status).to.equal(200);
      console.log(res);
    });
  });
});
