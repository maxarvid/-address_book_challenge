describe("user can create a contact", () => {
  it("test", () => {
    cy.visit("http://localhost:3001");
    cy.get("#add-contact").click();
    cy.get("#name").type("Max");
    cy.get("#email").type("max@max.max");
    cy.get("#phone").type("0705555555");
    cy.get("#company").type("free agent");
    cy.get("#twitter").type("@maxarvid");
  });
});
