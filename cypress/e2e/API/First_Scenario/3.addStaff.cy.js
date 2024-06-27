import { faker } from "@faker-js/faker";
describe("Adding staff", () => {
  let accessToken;
  before(() => {
    cy.readFile("cypress/fixtures/adminToken.json").then((data) => {
      accessToken = data.adminToken;
    });
  });

  it("As an admin, I should be able to add staff", () => {
    const newUserEmail = faker.internet.email();
    cy.request({
      method: "POST",
      url: "/api/staff/create",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        email: `${newUserEmail}`,
        firstName: "Shakil",
        lastName: "Ahmed",
        permission: ["64eadb6a5bd5576dd4df3cd8"],
        phone: {
          number: "1775069169",
          countryCode: "880",
        },
        dateOfBirth: "2024-06-27",
        gender: "Male",
        password: "testPassword",
      },
    }).then((res) => {
      const newStaffId = res.body.data.staff._id;
      cy.writeFile("cypress/fixtures/staffId.json", { staffId: newStaffId });
    });
  });
});
