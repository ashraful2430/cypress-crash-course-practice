const { faker } = require("@faker-js/faker");

describe("Register user", () => {
  it("As a groom/bride, I should be able to register on the website", () => {
    const newEmail = faker.internet.email();
    cy.request({
      method: "POST",
      url: "/api/user/register",
      body: {
        email: newEmail,
        firstName: "Shakil",
        lastName: "Ahmed",
        dateOfBirth: "2024-06-29",
        gender: "string",
        postedBy: "Myself",
        language: ["Bangla", "English", "Urdu"],
        country: "Bangladesh",
        religion: "Islam",
        password: "Ashik@2430",
      },
    }).then((res) => {
      const newUserId = res.body.data._id;
      const newUserEmail = res.body.data.email;
      cy.writeFile("cypress/fixtures/newUserData.json", {
        newEmail: newUserEmail,
        newUserId: newUserId,
      });
    });
  });
});
