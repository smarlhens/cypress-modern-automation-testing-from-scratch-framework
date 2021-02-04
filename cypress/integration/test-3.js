/// <reference types="Cypress" />

describe('My Third Test Suite', () => {
    it('My Third Test Case', () => {
        cy.visit(`${Cypress.env('url')}/AutomationPractice/`);
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').check(['option2', 'option3']);

        cy.get('select').select('option2').should('have.value', 'option2');

        cy.get('#autocomplete').type('ind');

        cy.get('.ui-menu-item > div').each((element, index) => {
            if (element.text() === 'India') {
                element.click();
            }
        });

        cy.get('#autocomplete').should('have.value', 'India');

        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        cy.get('[value="radio2"').check().should('be.checked').and('have.value', 'radio2');
    })
})
