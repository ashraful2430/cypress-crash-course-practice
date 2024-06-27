describe("Getting all the stuff member", () => {
  let accessToken;
  before(() => {
    cy.readFile("cypress/fixtures/adminToken.json").then((res) => {
      accessToken = res.adminToken;
    });
  });
  it("As an admin, I should be able to get all the staff", () => {
    cy.request({
      method: "GET",
      url: "/api/staff/getall",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body.data.staffs);
      const staffId = response.body.data.staffs[0].user.id;
      cy.writeFile("cypress/fixtures/staffId.json", { AdminStaffId: staffId });
      expect(response.status).to.equal(200);
    });
  });
});
