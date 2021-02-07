Feature: e2e ecommerce validation

  application regression

  @Regression
  Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify Thankyou

  @Smoke
  Scenario: Filling the from to shop
    Given I open Ecommerce Page
    When I fill the form details
      |name| gender|
      |bob | Male  |
    Then validate the forms behavior
    And select the shop page
