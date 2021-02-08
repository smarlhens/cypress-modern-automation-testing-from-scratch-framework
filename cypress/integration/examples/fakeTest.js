/// <reference types="Cypress" />

describe('Fake Test Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests');
    });

    it('Fake Test Test Case', () => {
        cy.server();

        cy.route({
            method: "PUT",
            url: "comments/*",
            status: 404,
            response: {
                error: "Hey comment do not exist"
            },
            delay: 1000
        }).as('UpdateComment');

        cy.get('.network-put').click();

        cy.get('.network-put-comment').should('contain', 'Hey comment do not exist');
    })
})
