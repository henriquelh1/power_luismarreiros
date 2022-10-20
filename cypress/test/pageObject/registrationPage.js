export default {

    getFirstNameField() {
        return cy.get('#mat-input-0').clear();
    },
    getLastNameField() {
        return cy.get('#mat-input-1').clear();
    },
    getEmailField() {
        return cy.get('#mat-input-2').clear();
    },
    getPasswordField() {
        return cy.get('#mat-input-3').clear();
    },
    getPhoneField() {
        cy.wait(500)
        return cy.get('#mat-input-5').clear()
    },
    getRegistrationButton() {
        cy.wait(500)
        return cy.get('.phone-form ').find('button').contains('Kostenlos registrieren')
    },
    getContinueButton() {
        cy.wait(500)
        return cy.get('.registration-form ').find('button');
    },
  };