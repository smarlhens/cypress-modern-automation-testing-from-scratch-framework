/// <reference types="Cypress" />

describe('My Sixth Test Suite', () => {
    it('My Sixth Test Case', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', 'top');
    });
});
