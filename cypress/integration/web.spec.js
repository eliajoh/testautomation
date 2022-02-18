  describe('Navigate from home page to driver page', () => {
    it('clicks the link "drivers"', () => {
      cy.visit('https://formula1stats.herokuapp.com/')
      
      cy.get('#menu-items-container').contains('Drivers').click()

      cy.get('#driver-column').click().contains('Mika Häkkinen').click()

      cy.get('#menu-items-container').contains('Home').click()

      //välj en annan förare, gå tillbaka till start-sidan, se om ny förare väljs eller det är den gamla
      

    })
  })

  