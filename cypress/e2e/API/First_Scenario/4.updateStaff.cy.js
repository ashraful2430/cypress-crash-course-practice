import { faker } from "@faker-js/faker";
describe("Updating staff", () => {
  let accessToken;
  let staffId;
  before(() => {
    cy.readFile("cypress/fixtures/adminToken.json").then((data) => {
      accessToken = data.adminToken;
    });
    cy.readFile("cypress/fixtures/staffId.json").then((data) => {
      staffId = data.AdminStaffId;
      cy.log(staffId);
    });
  });

  it("As an admin, I should be able to update the staff", () => {
    const newUserEmail = faker.internet.email();
    console.log(staffId);
    cy.request({
      method: "PATCH",
      url: `/api/staff/update/${staffId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        email: newUserEmail,
        firstName: "Ashraful",
        lastName: "islamashik",
        permission: ["654607f34af87d306958c2eb"],
        phone: {
          number: "1949338805",
          countryCode: "880",
        },
        dateOfBirth: "2024-02-12",
        gender: "Male",
        password: "Ashik@2432",
      },
    }).then((res) => {
      console.log(res.body);
      expect(res.status).to.equal(201);
      // Assert that the response body contains a success message (adjust based on actual response structure)
      expect(res.body).to.have.property("message", "Staff update succeed");
    });
  });
});
