/// <reference types="Cypress" />
import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/page-objects/home-page";
import ProductPage from "../../../support/page-objects/product-page";

const homePage = new HomePage();
const productPage = new ProductPage();
let name;

Given('I open Ecommerce Page', () => {
    cy.visit(`${Cypress.env('url')}/angularpractice/`);
});

When('I add items to Cart', function () {
    homePage.getShopTab().click();
    this.data.productsName.forEach((productName) => {
        cy.selectProduct(productName);
    });

    productPage.getCheckoutButton().click();
});

And('Validate the total prices', () => {
    let totalExpected = 0;

    cy.get('tr td:nth-child(4) strong').each((element) => {
        const price = element.text().split(' ')[1];
        totalExpected += Number(price);
    });

    cy.get('h3 strong').then((element) => {
        const total = element.text().split(' ')[1];
        expect(Number(total)).to.equal(totalExpected);
    });
});

Then('select the country submit and verify Thankyou', () => {
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

When('I fill the form details', (args) => {
    const data = args.rawTable;
    name = data[1][0];
    homePage.getEditBox().type();
    homePage.getGender().select(data[1][1]);
});

Then('validate the forms behavior', () => {
    homePage.getTwoWayDataBinding().should('have.value', name);
    homePage.getEditBox().should('have.attr', 'minlength', '2');
    homePage.getEntrepreneur().should('be.disabled');
});

And('select the shop page', () => {
    homePage.getShopTab().click();
});
