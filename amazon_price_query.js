describe('Amazon Product Search', function() {

    it('Visit Amazon', function() {
        cy.visit('https://www.amazon.com/')
    })

    it('Input data in search field', function() {
        cy.get('#twotabsearchtextbox')
          .type('Echo dot{enter}')
          .should('have.value', 'Echo dot')
    })

    it('Check Url', function() {
        cy.url().should('include', 'Echo+dot')
    })

    it('Click first result', function() {
        cy.get('[data-index]').contains('Echo Dot').first().click()
        /*    
        cy.contains('Echo Dot').click()
        cy.get('[class="s-main-slot s-result-list s-search-results sg-row"]').contains('Echo Dot').click()
        cy.get('[data-index]').eq(1).contains('Echo Dot').click() 
        */
    })

    it("Check if product contains price", function() {
        cy.get('#priceblock_ourprice')
    })

})