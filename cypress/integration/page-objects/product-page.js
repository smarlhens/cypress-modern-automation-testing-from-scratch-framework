class ProductPage {
    getCheckoutButton() {
        return cy.get('#navbarResponsive .nav-link');
    }
}

export default ProductPage;
