/*describe('Visit test', () => {
    it('visits', () => {
      cy.visit('https://formula1stats.herokuapp.com/')
  
    })
  })*/

  describe('My First Test', () => {
    it('clicks the link "seasons"', () => {
      cy.visit('https://formula1stats.herokuapp.com/')
  
      cy.contains('drivers').click()
    })
  })