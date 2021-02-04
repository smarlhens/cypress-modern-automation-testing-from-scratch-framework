/// <reference types="Cypress" />

describe('My First Test Suite', () => {
    it('My First Test Case', () => {
        cy.visit(`${Cypress.env('url')}/seleniumPractise/#/`);
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length', 5);
        cy.get('.product:visible').should('have.length', 4);
        cy.get('.products').as('products');
        cy.get('@products').find('.product').should('have.length', 4);
        cy.get('@products').find('.product').eq(2).contains('ADD TO CART').click();
        cy.get('@products').find('.product').each((element, index) => {
            const productName = element.find('h4.product-name').text();
            if (productName.includes('Cashews')) {
                element.find('button').click();
            }
        });
        cy.get('.brand').should('have.text', 'GREENKART');
        cy.get('.brand').then(logo => {
            cy.log(logo.text());
        });
    })
})
