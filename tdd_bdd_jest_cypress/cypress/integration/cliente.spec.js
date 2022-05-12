/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('ao acessar a home, deve conter uma lista com 10 clientes', () => {
      // https://on.cypress.io/type
      cy.get('tbody tr').should('to.have.length', 10)
      cy.get('tbody tr td').contains("Lucas 2")
      cy.get('tbody tr td').contains("Lucas 3")
      cy.get('tbody tr td').contains("Lucas 4")
      cy.get('tbody tr td').contains("Lucas 6")
      cy.get('tbody tr td').contains("Lucas 10")
        
    })
})