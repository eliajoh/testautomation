
describe('Smoketest to see that connection works', () => {
  it('visits the main page of formula1stats', () => {
    cy.visit('https://formula1stats.herokuapp.com/')
    
  })
})


describe('Basic Functionality/Navigation test', () => {
  it('clicks the different linked items in the menu and navigates to all the options', () => {
    cy.visit('https://formula1stats.herokuapp.com/')
    
    cy.get('#menu-items-container').contains('Seasons').click()
    cy.url().should('include', '/seasons')

    cy.get('#menu-items-container').contains('Drivers').click()
    cy.url().should('include', '/drivers')

    cy.get('#menu-items-container').contains('Constructors').click()
    cy.url().should('include', '/constructors')

    cy.get('#menu-items-container').contains('Circuits').click()
    cy.url().should('include', '/circuits')

    cy.get('#menu-items-container')
      .contains('Home').click()

  })
})


  describe('Drivertest 1', () => {
    it('clicks the link "drivers" in the menu and then picks Mika häkkinen before returning to homepage', () => {
      cy.visit('https://formula1stats.herokuapp.com/')
      
      cy.get('#menu-items-container').contains('Drivers').click()
      cy.url().should('include', '/drivers')

      cy.get('#driver-column').click()
        .contains('Häkkinen').click()
      cy.get('#driver-column')
        .should('contain', 'Häkkinen')

      cy.get('#menu-items-container')
        .contains('Home').click()

    })
  })


  describe('Driver-test 2', () => {
    it('changes the driver to Schumacher, then changes the year on the graph to 2000', () => {
      cy.visit('/drivers')
      
      cy.get('#react-select-2--value-item').click()
        .type('Schumacher{enter}')
      cy.get('#react-select-2--value-item').should('contain', 'Schumacher')

      cy.get('#year-dropdown-2').click()
        .type('2000{enter}')
      cy.get('#year-dropdown-2')
        .should('contain', '2000')

    })
  })


  describe('Driver-test 3', () => {
    it('filters the table after year 2008', () => {
      cy.visit('/drivers')
      cy.url().should('include', '/drivers')
      
      cy.get('.column-1 > input').click()
        .type('2008{enter}')
      cy.get('.column-1')
        .should('contain', '2008')
      
    })
  })


  describe('Driver-test 4', () => {
    it('clicks the link "drivers", changes the filters', () => {
      cy.visit('/drivers')
      cy.url().should('include', '/drivers')
      
      cy.get('.column-0 > input').click()
        .type('Monaco{enter}')
      cy.get('.column-0')
        .should('contain', 'Monaco')
      cy.get('.column-2 > input').click()
        .type('1{enter}')
      cy.get('.column-2')
        .should('contain', '1')
      
    })
  })


  describe('Constructor-test 1', () => {
    it('changes the competition-season, removes all teams, changes season again', () => {
      cy.visit('/constructors')
      cy.url().should('include', '/constructors')

      cy.get('.Select-value').click()
        .type('1999{enter}')
      cy.get('.Select-value').should('contain', '1999')

      cy.get('.legendtoggle').click({multiple:true})

      cy.get('g.traces:nth-child(2) > rect:nth-child(3)').click()
      
    })
  })


  describe('Seasons-test 1', () => {
    it('clicks the link "seasons", changes year to 1977, removes last entry, adds new entry', () => {
      cy.visit('https://formula1stats.herokuapp.com')
      
      cy.get('#menu-items-container').contains('Seasons').click()
      cy.url().should('include', '/seasons')
  
      cy.get('#react-select-2--value > .Select-value').click()
        .type('1977{enter}')
      cy.get('#react-select-2--value > .Select-value')
        .should('contain', '1977')
      cy.get('#react-select-3--value')
        .contains(
            'Lauda',
            {timeout: 10000}
        )
        .then(() => {
          cy.get(':nth-child(6) > .Select-value-icon').click()
          cy.get('#react-select-3--value')
            .type('Gunnar Nilsson{enter}')
      })   
    })
  })


  describe('Seasons-test 2', () => {
    it('changes season to edgecases 1950 and 2020', () => {
      cy.visit('/seasons')
      cy.url().should('include', '/seasons')
  
      cy.get('#react-select-2--value > .Select-value').click()
        .type('1950{enter}')
      cy.get('#react-select-2--value > .Select-value')
        .should('contain', '1950')
      cy.get('#react-select-3--value')
        .contains(
            'Farina',
            {timeout: 10000}
        )
        .then(() => {
          cy.get('#react-select-2--value > .Select-value').click()
            .type('2020{enter}')
          cy.get('#react-select-2--value > .Select-value').should('contain', '2020')
      })   
    })
  })


  describe('Circuit-test', () => {
    it('changes circuit by typing in Monza', () => {
      cy.visit('/circuits')
      cy.url().should('include', '/circuits')
      cy.get('.Select-value').click()
        .type('Monza{enter}')
      cy.get('.Select-value')
        .should('contain', 'Monza')
 
    })
  })