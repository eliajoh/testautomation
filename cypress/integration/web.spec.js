  
    //Driver-test
  describe('Navigate from home page to driver page, change driver and navigate away and back again', () => {
    it('clicks the link "drivers"', () => {
      cy.visit('https://formula1stats.herokuapp.com/')
      
      cy.get('#menu-items-container').contains('Drivers').click()

      cy.get('#driver-column').click().contains('Häkkinen').click()

      cy.get('#menu-items-container').contains('Home').click()

    })
  })

    //Driver-test

  describe('Change driver, then year on the driver-graph', () => {
    it('clicks the link "drivers"', () => {
      cy.visit('https://formula1stats.herokuapp.com/drivers')
      
      cy.get('#menu-items-container').contains('Drivers').click()

      cy.get('#driver-column').click().contains('Hailwood').click()

      cy.get('#year-dropdown-2').click().contains('1972').click()
      cy.get('#year-dropdown-2').click().contains('1965').click()


    })
  })

    //Constructor-test
  describe('Change year of constructors and navigate away and back', () => {
    it('clicks the link "Constructors"', () => {
      cy.visit('https://formula1stats.herokuapp.com/constructors')
      
      cy.get('#constructor-year-column').click().contains('2016').click()

      cy.get('#constructor-year-column').click().contains('2018').click()

      cy.get('#menu-items-container').contains('Home').click()

      cy.get('#menu-items-container').contains('Constructors').click()

      cy.get('#constructor-year-column').click().contains('2015').click()

    })
  })

    //Second Constructor-test
  describe('Remove constructors, change year and remove more constructors', () => {
    it('clicks the link "Constructors"', () => {
      cy.visit('https://formula1stats.herokuapp.com/constructors')
      
      cy.get('#menu-items-container').contains('Constructors').click()


        //klicka bort konstruktörer. byt år, klicka bort konstruktörer

      

    })
  })


    //Seasons-tests
/*
  describe('Navigate from home page to Seasons page', () => {
    it('clicks the link "seasons"', () => {
      cy.visit('https://formula1stats.herokuapp.com/')
      
      cy.get('#menu-items-container').contains('Seasons').click()



    })
  })*/

