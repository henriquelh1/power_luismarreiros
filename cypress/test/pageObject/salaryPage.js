export default {

    getSalaryCheckenButton() {
        return cy.get('.title-cta > app-salary-checker-cta > .mat-focus-indicator');
    },
    getDiplomaDropdown() {
        return cy.get('#mat-select-0');
    },
    getWorkExperienceDropdown() {
        return cy.get('#mat-select-value-3');
    },
    getTravelingDropdown() {
        return cy.get('#mat-select-value-5');
    },
    getFederalStateDropdown() {
        return cy.get('#mat-select-value-7');
    },
    getSubmitButton() {
        return cy.get('.form > .mat-focus-indicator');
    },
    
    getDropdownOptions(){
        return cy.get('.mat-option-text');
    },
  };