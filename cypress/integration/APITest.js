/// <reference types="Cypress" />

describe('API Test Test Suite', () => {
    it('API Test Test Case', () => {

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
                "name": "Learn Appium Automation with Java",
                "isbn": "bcd",
                "aisle": "227",
                "author": "John foe"
            }
        ).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('Msg', "successfully added");
            expect(response.body).to.have.property('ID', "bcd227");
        });
    });
});
