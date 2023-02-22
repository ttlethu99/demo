class Checkout {
  getEmail() {
    return cy.get("#checkout_shipping_address_email");
  }
  getFirstname() {
    return cy.get("#checkout_shipping_address_first_name");
  }
  enterEmail(email) {
    this.getEmail().clear().type(email);
  }
  getMessageEmail() {
    return this.getEmail().parents(".s-input-wrapper").find(".field-message");
  }
  verifyMessageEmail(message) {
    this.getMessageEmail().should("have.text", message, { setTimeout: 2000 });
  }
  enterFirtname(name) {
    return this.getFirstname().clear().type(name);
  }
}
export default Checkout;
