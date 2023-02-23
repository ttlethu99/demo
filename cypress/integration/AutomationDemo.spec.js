/// <reference types="cypress" />

import Checkout from "../support/pageObject/Checkout";
import Automation01 from "../../Automation01"

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

describe('Test demo automation', () => {
  const checkout = new Checkout();
  //test 02
  it('(CommonTC_G_12) Verify Email textbox when input into invalid value', () => {
    cy.visit('/e69266bfc5e2414c8b0e3e925ccdcde3')
    cy.wait(12000)
    cy.fixture("email").then(email=>{
      email.forEach(element => {
        checkout.enterEmail(element);
        // checkout.enterFirtname("Test")
        checkout.verifyMessageEmail("Please enter a valid email.")
      });
    })
  })
  it('check automation test 01',()=>{
    const automation01 = new Automation01();
    //input number and verify
    cy.log(automation01.verifyNumber(7));
  })

})
