import homePage from "../pageObject/homePage";
import salaryPage from "../pageObject/salaryPage";
import registrationPage from "../pageObject/registrationPage";
import resultPage from "../pageObject/resultPage";

const num = Math.floor(1000 + Math.random() * 9000);

context("Check Salary", () => {
  beforeEach(() => {
    cy.visit("https://staging.powerus.de/");
    cy.wait(500)
  });

  it("Checking Average salary", () => {
    homePage.getBlogButton().click()
    homePage.getEletrikerGehaltButton().click()
    cy.url().should('eq', 'https://staging.powerus.de/elektriker-gehalt-%C3%BCbersicht')
    salaryPage.getSalaryCheckenButton().click()
    cy.url().should('eq', 'https://staging.powerus.de/elektriker-gehalt-%C3%BCbersicht/gehaltscheck-machen')
    salaryPage.getDiplomaDropdown().click()
    salaryPage.getDropdownOptions().contains("Berufsausbildung").click()
    salaryPage.getWorkExperienceDropdown().click()
    salaryPage.getDropdownOptions().contains("0-2 Jahre").click()
    salaryPage.getTravelingDropdown().click()
    salaryPage.getDropdownOptions().contains("Ein paar Tage im Monat").click()
    salaryPage.getFederalStateDropdown().click()
    salaryPage.getDropdownOptions().contains("Berlin").click()
    salaryPage.getSubmitButton().click();
    cy.url().should('include', 'https://staging.powerus.de/registrieren/salary-checker')
    registrationPage.getFirstNameField().type("luis")
    registrationPage.getLastNameField().type('schneider')
    registrationPage.getEmailField().type("emails"+num+"@gmail.com")
    registrationPage.getPasswordField().type('1234562')
    registrationPage.getContinueButton().click()
    registrationPage.getPhoneField().type("1518899"+num)
    registrationPage.getRegistrationButton().click()
    cy.url().should('include', 'https://staging.powerus.de/registrieren/salary-checker')
    resultPage.getAvgSalaryValue().should('contain', '2.419')
    resultPage.getFederalStateValue().should('contain', '-100')
    resultPage.getWorkExperienceValue().should('contain', '-605')
    resultPage.getTravellingValue().should('contain', '-132')
  });
});