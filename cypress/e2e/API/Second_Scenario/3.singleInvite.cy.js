describe("Friend request invitation", () => {
  it("As a groom/bride, I should be able to send friend request to another user", () => {
    cy.request({
      method: "POST",
      url: "/api/user/single-invite",
      headers: { "Accept-Language": "en-us" },
    });
  });
});
