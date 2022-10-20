export default {

    getAvgSalaryValue() {
        return cy.get('.avg-salary')
    },
    getFederalStateValue() {
        return cy.get(':nth-child(1) > .difference');
    },
    getWorkExperienceValue() {
        return cy.get(':nth-child(2) > .difference');
    },
    getTravellingValue() {
        return cy.get(':nth-child(3) > .difference');
    },
  };