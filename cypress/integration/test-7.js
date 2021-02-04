/// <reference types="Cypress" />

describe('My Seventh Test Suite', () => {
    it('My Seventh Test Case', () => {
        cy.visit(`${Cypress.env('url')}/AutomationPractice/`);

        cy.get('#opentab').then(element => {
            const url = element.prop();
            cy.visit(url);
        });
    });
});
