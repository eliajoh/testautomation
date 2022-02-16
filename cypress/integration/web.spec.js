  describe('Navigate from home page to driver page', () => {
    it('clicks the link "drivers"', () => {
      cy.visit('https://formula1stats.herokuapp.com/')
      
      cy.get('#menu-items-container').contains('Drivers').click()
    })
  })