  
  //Driver-test
  describe('Navigate from home page to driver page', () => {
    it('clicks the link "drivers"', () => {
      cy.visit('https://formula1stats.herokuapp.com/')
      
      cy.get('#menu-items-container').contains('Drivers').click()

      cy.get('#driver-column').click().contains('Mika Häkkinen').click()

      cy.get('#menu-items-container').contains('Home').click()

      //välj en annan förare, gå tillbaka till start-sidan, se om ny förare väljs eller det är den gamla
      

    })
  })

//Constructor-test
  describe('Navigate from home page to Constructors page', () => {
    it('clicks the link "Constructors"', () => {
      cy.visit('https://formula1stats.herokuapp.com/constructors')
      
      cy.get('#constructor-year-column').click().contains('2016').click()

      cy.get('#constructor-year-column').click().contains('2018').click()

      cy.get('#menu-items-container').contains('Home').click()

      cy.get('#menu-items-container').contains('Constructors').click()

      cy.get('#constructor-year-column').click().contains('2015').click()


        //byt år ett par gånger, gå till annan sida, gå dit igen och byt år igen

    })
  })