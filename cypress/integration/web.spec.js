
    //Driver-test
  describe('Navigate from home page to driver page, change driver and navigate away and back again', () => {
    it('clicks the link "drivers" in the menu and then picks Mika häkkinen before returning to homepage', () => {
      cy.visit('https://formula1stats.herokuapp.com/')
      
      cy.get('#menu-items-container').contains('Drivers').click()
      cy.url().should('include', '/drivers')

      cy.get('#driver-column').click().contains('Häkkinen').click()
      cy.get('#driver-column').should('contain', 'Häkkinen')

      cy.get('#menu-items-container').contains('Home').click()

    })
  })

    //Driver-test 2
  describe('Change driver, then year on the driver-graph', () => {
    it('changes the driver to Schumacher, then changes the year on the graph to 2000', () => {
      cy.visit('https://formula1stats.herokuapp.com/drivers')
      
      cy.get('#react-select-2--value-item').click()
      .type('Schumacher{enter}')
      cy.get('#react-select-2--value-item').should('contain', 'Schumacher')

      cy.get('#year-dropdown-2').click().
      type('2000{enter}')
      cy.get('#year-dropdown-2').should('contain', '2000')


    })
  })

  //Driver-test 3
  describe('Filter driver-result after year', () => {
    it('filters the table after year 2008', () => {
      cy.visit('https://formula1stats.herokuapp.com/drivers')
      cy.url().should('include', '/drivers')
      
      cy.get('.column-1 > input').click()
      .type('2008{enter}')
      cy.get('.column-1 > input').should('contain', '2008')
      
    })
  })

  //Driver-test 4
  describe('Filter driver-result after year where driver did not compete', () => {
    it('clicks the link "drivers"', () => {
      cy.visit('https://formula1stats.herokuapp.com/drivers')
      cy.url().should('include', '/drivers')
      
      cy.get('.column-1 > input').click()
      .type('2000{enter}')
      cy.get('.column-1 > input').should('contain', '2000')
      
    })
  })

    //Constructor-test 1
  describe('Change year of constructors and removes as many teams as possible', () => {
    it('changes the competition-season, removes all teams, changes season again', () => {
      cy.visit('https://formula1stats.herokuapp.com/constructors')
      cy.url().should('include', '/constructors')

      cy.get('.Select-value').click()
      .type('1999{enter}')
      cy.get('.Select-value').should('contain', '1999')

      cy.get('.legendtoggle').click({multiple:true})

      cy.get('g.traces:nth-child(2) > rect:nth-child(3)').click()
      

    })
  })

  /*
    //Second Constructor-test
  describe('Remove constructors, change year and remove more constructors', () => {
    it('clicks the link "Constructors"', () => {
      cy.visit('https://formula1stats.herokuapp.com/constructors')
      
      cy.get('#menu-items-container').contains('Constructors').click()


        //klicka bort konstruktörer. byt år, klicka bort konstruktörer

      

    })
  })

    //Seasons-tests
  describe('Navigate from home page to Seasons page', () => {
    it('clicks the link "seasons"', () => {
      cy.visit('https://formula1stats.herokuapp.com/')
      
      cy.get('#menu-items-container').contains('Seasons').click()



    })
  })*/

