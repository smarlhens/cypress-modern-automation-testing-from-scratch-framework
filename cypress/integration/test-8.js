/// <reference types="Cypress" />

describe('My Eighth Test Suite', () => {
    let data;

    before(async () => {
        data = await cy.fixture('example');
    });

    it('My Eighth Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');

        cy.get('form input[name="name"]').type(data.name);
        cy.get('select').select(data.gender);
        cy.get('form-comp h4 > input[name="name"]').should('have.value', data.name);
        cy.get('form input[name="name"]').should('have.attr', 'minlength', '2');
        cy.get('#inlineRadio3').should('be.disabled');
        cy.selectProduct('Blackberry');
    });
});
