/// <reference types="Cypress" />

describe('My Fifth Test Suite', () => {
    it('My Fifth Test Case', () => {
        cy.visit(`${Cypress.env('url')}/AutomationPractice/`);

        cy.get('tr td:nth-child(2)').each((element, index) => {

            const text = element.text();
            if (text.includes("Python")) {
                cy.get("tr td:nth-child(2)").eq(index).next().then((price) => {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        });
    });
});


