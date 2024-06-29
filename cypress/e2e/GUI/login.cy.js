describe("Testing BiyeKorun user login Interface", () => {
  it("User Login", () => {
    // Visiting the website
    cy.visit("https://staging.biyekorun.us/");
    cy.wait(5000);

    // Clicking on the login button
    cy.get(".flex-gap-15 > .primary-btn-v3").click();

    cy.wait(3000);
    // Getting the email field and inputting the email
    cy.get(
      "body > div:nth-child(16) > div > div > div > div > div.loginComp__wrapper--left.box-shadow.flex.flex-column.justify-center.align-center > div.mantine-InputWrapper-root.mantine-TextInput-root.mantine-1sq88d3 > div > input"
    ).type("ashrafulislamashik960@gmail.com");

    // Getting the password field and typing the password
    cy.get(
      "body > div:nth-child(16) > div > div > div > div > div.loginComp__wrapper--left.box-shadow.flex.flex-column.justify-center.align-center > div:nth-child(5) > div > div > div.mantine-PasswordInput-input.mantine-Input-input.mantine-PasswordInput-input.mantine-a7hhxl > input"
    ).type("Ashik@2430");

    // Clicking on the sign in button
    cy.get(
      "body > div:nth-child(16) > div > div > div > div > div.loginComp__wrapper--left.box-shadow.flex.flex-column.justify-center.align-center > button > div"
    ).click();

    // Ensure the modal is fully loaded
    cy.wait(5000); // Wait for 1 second or adjust as needed

    // Ensure the close button is visible and click on it
    cy.get(".btn-fill").scrollIntoView().should("be.visible").click();
  });
});
