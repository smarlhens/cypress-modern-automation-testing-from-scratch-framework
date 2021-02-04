/// <reference types="Cypress" />
import HomePage from "./page-objects/home-page";
import ProductPage from "./page-objects/product-page";

describe('My Eighth Test Suite', () => {
    let data;
    const homePage = new HomePage();
    const productPage = new ProductPage();

    before(async () => {
        data = await cy.fixture('example');
    });

    it('My Eighth Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');

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
    });
});
