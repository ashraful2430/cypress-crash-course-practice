describe("Delete Staff", () => {
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
  it("As an admin, I should be able to delete the staff", () => {
    cy.request({
      method: "DELETE",
      url: `/api/staff/delete/${staffId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => {
      console.log(res.body);
      expect(res.status).to.equal(200);
      // Assert that the response body contains a success message (adjust based on actual response structure)
      expect(res.body).to.have.property(
        "message",
        "Staff deleted successfully"
      );
    });
  });
});
