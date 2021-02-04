/// <reference types="Cypress" />
import HomePage from "../support/page-objects/home-page";
import ProductPage from "../support/page-objects/product-page";

describe('My Eighth Test Suite', () => {
    let data;
    const homePage = new HomePage();
    const productPage = new ProductPage();

    before(async () => {
        data = await cy.fixture('example');
    });

    it('My Eighth Test Case', () => {
        cy.visit(`${Cypress.env('url')}/angularpractice/`);

        homePage.getEditBox().type(data.name);
        homePage.getGender().select(data.gender);
        homePage.getTwoWayDataBinding().should('have.value', data.name);
        homePage.getEditBox().should('have.attr', 'minlength', '2');
        homePage.getEntrepreneur().should('be.disabled');
        homePage.getShopTab().click();
        data.productsName.forEach((productName) => {
            cy.selectProduct(productName);
        });

        productPage.getCheckoutButton().click();

        let totalExpected = 0;

        cy.get('tr td:nth-child(4) strong').each((element) => {
            const price = element.text().split(' ')[1];
            totalExpected += Number(price);
        });

        cy.get('h3 strong').then((element) => {
            const total = element.text().split(' ')[1];
            expect(Number(total)).to.equal(totalExpected);
        });

        cy.contains('Checkout').click();
        cy.get('#country').type('India');
        Cypress.config('defaultCommandTimeout', 8000);
        cy.get('.suggestions > ul > li> a').click();
        cy.get('#checkbox2').check({force: true});
        cy.get('input[type="submit"]').click();
        cy.get('.alert').then((element) => {
            expect(element.text().includes('Success')).to.be.true;
        });
    });
});
