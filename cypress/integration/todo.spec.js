/// <reference types="cypress" />

import Checkout from "../support/pageObject/Checkout"

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  const checkout = new Checkout()
  beforeEach(() => {
    cy.visit('/e69266bfc5e2414c8b0e3e925ccdcde3')
    cy.wait(12000)
  })

  it('displays two todo items by default', () => {
    cy.fixture("email").then(email=>{
      email.forEach(element => {
        checkout.enterEmail(element);
        checkout.enterFirtname("Test")
        checkout.verifyMessageEmail("Please enter a valid email.")
        
      });
      
    })
   
  })

})
