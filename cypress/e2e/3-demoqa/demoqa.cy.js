describe("DemoQA", () => {

it("should select an item from the list", () => {
    cy.visit("https://demoqa.com/selectable");
    cy.get("#demo-tab-grid").click();
    cy.get(".list-group-item")
        .contains("Two")
        .should("be.visible")
        .click();
    cy.get(".list-group-item")
        .contains("Four")
        .should("be.visible")
        .click();
    cy.get(".list-group-item")
        .contains("Six")
        .should("be.visible")
        .click();
    cy.get(".list-group-item")
        .contains("Eight")
        .should("be.visible")
        .click();
    cy.get(".list-group-item")
        .contains("One")
        .should("not.have.class", "active");
    cy.get(".list-group-item")
        .contains("Three")
        .should("not.have.class", "active");
    cy.get(".list-group-item")
        .contains("Five")
        .should("not.have.class", "active");
    cy.get(".list-group-item")
        .contains("Seven")
        .should("not.have.class", "active");
    cy.get(".list-group-item")
        .contains("Nine")
        .should("not.have.class", "active");
});

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
    });
});