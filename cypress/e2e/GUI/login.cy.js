describe("Testing BiyeKorun user login Interface", () => {
  it("User Login", () => {
    //   visiting the website
    cy.visit("https://staging.biyekorun.us/");
    //   clicking on the login button
    cy.get(".flex-gap-15 > .primary-btn-v3").click();
    // getting the email field and inputting the email
    cy.get(
      "body > div:nth-child(16) > div > div > div > div > div.loginComp__wrapper--left.box-shadow.flex.flex-column.justify-center.align-center > div.mantine-InputWrapper-root.mantine-TextInput-root.mantine-1sq88d3 > div"
    ).type("ashrafulislamashik960@gmail.com");
    //   getting the password field and typing the password
    cy.get(
      "body > div:nth-child(16) > div > div > div > div > div.loginComp__wrapper--left.box-shadow.flex.flex-column.justify-center.align-center > div:nth-child(5) > div > div > div.mantine-PasswordInput-input.mantine-Input-input.mantine-PasswordInput-input.mantine-a7hhxl"
    ).type("Ashik@2430");
    //   click on the sign in button
    cy.get(
      "body > div:nth-child(16) > div > div > div > div > div.loginComp__wrapper--left.box-shadow.flex.flex-column.justify-center.align-center > button > div"
    ).click();
  });
});
