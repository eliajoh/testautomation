/*
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
      cy.get('.column-1').should('contain', '2008')
      
    })
  })

  //Driver-test 4
  describe('Filter driver-result after year where driver did not compete', () => {
    it('clicks the link "drivers"', () => {
      cy.visit('https://formula1stats.herokuapp.com/drivers')
      cy.url().should('include', '/drivers')
      
      cy.get('.column-0 > input').click()
      .type('Monaco{enter}')
      cy.get('.column-0').should('contain', 'Monaco')
      //every filter split into multiple tests, then one test which tests all the functions
      cy.get('.column-2 > input').click()
      .type('1{enter}')
      cy.get('.column-2').should('contain', '1')
      
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

  
    //Seasons-tests
  describe('Navigate from home page to Seasons page', () => {
    it('clicks the link "seasons", changes year to 1977, removes last entry, adds new entry', () => {
      cy.visit('https://formula1stats.herokuapp.com/')
      
      cy.get('#menu-items-container').contains('Seasons').click()
      cy.url().should('include', '/seasons')
      cy.get('#react-select-2--value > .Select-value').click()
      .type('1977{enter}')
      cy.get('#react-select-2--value > .Select-value').should('contain', '1977')
      cy.wait(4000)
      cy.get(':nth-child(6) > .Select-value-icon').click()
      cy.get('#react-select-3--value')
      .type('Gunnar Nilsson{enter}')

    })
  })
*/
  //Seasons-test 2
  describe('Change season to edgecases', () => {
    it('changes season to edgecases 1950 and 2020', () => {
      cy.visit('https://formula1stats.herokuapp.com/seasons')
      cy.url().should('include', '/seasons')

      cy.get('#react-select-2--value > .Select-value').click()
      .type('1950{enter}')
      cy.get('#react-select-2--value > .Select-value').should('contain', '1950')
      cy.wait(8000)
      
      cy.get('#react-select-2--value > .Select-value').click()
      .type('2020{enter}')
      cy.get('#react-select-2--value > .Select-value').should('contain', '2020')

    })
  })

