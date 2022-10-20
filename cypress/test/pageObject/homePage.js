export default {

    getBlogButton() {
        return  cy.get('.desktop > app-header-dropdown > .mat-focus-indicator ');
    },
    getEletrikerGehaltButton() {
        return   cy.get('.menu > :nth-child(1) > .mat-button-wrapper');
    }
  };