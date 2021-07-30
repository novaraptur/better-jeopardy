describe('Game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.intercept('GET', 'https://better-jeopardy-api.herokuapp.com/api/v1/questions', { 
      statusCode: 200,
      fixture: 'allQuestions.json'
  });

})

  it('Should see a dropdown menu to select the number of categories for a game', () => {
    cy.get('label')
    .contains('Number of Categories:')
  }); 

  it('Should be able to all dropdown options', () => {
    // cy.intercept('GET', 'https://better-jeopardy-api.herokuapp.com/api/v1/questions', { 
    //   statusCode: 200,
    //   fixture: 'allQuestions.json'
    // })
    cy.get('select')
      .select('2')
      // .select('3')
      // .select('6')
  }); 

  it('Should be able to start a game with 2 categories', () => {
    // cy.intercept('GET', 'https://better-jeopardy-api.herokuapp.com/api/v1/questions', { 
    //   statusCode: 200,
    //   fixture: 'allQuestions.json'
    // })
    cy.get('select')
      .select('2')
    cy.get('button').contains('START GAME').click()
    cy.url().should('eq', 'http://localhost:3000/game')
    cy.get('.tiles')
      .find('article')
      .should('have.length', 10)
  }); 

  it('Should be able to start a game with 3 categories', () => {
    // cy.intercept('GET', 'https://better-jeopardy-api.herokuapp.com/api/v1/questions', { 
    //   statusCode: 200,
    //   fixture: 'allQuestions.json'
    // })
    cy.get('select')
      .select('3')
    cy.get('button').contains('START GAME').click()
    cy.url().should('eq', 'http://localhost:3000/game')
    cy.get('.tiles')
      .find('article')
      .should('have.length', 15)
  }); 

  it('Should be able to start a game with 6 categories', () => {
    cy.get('select')
      .select('6')
    cy.get('button').contains('START GAME').click()
    cy.url().should('eq', 'http://localhost:3000/game')
    cy.get('.tiles') 
      .get('article').contains('$100')
    cy.get('.tiles')
      .find('article')
      .should('have.length', 30)
  }); 

  it('Should have a property formatted tile', () => {
    // cy.intercept('GET', 'https://better-jeopardy-api.herokuapp.com/api/v1/questions', { 
    //   statusCode: 200,
    //   fixture: 'allQuestions.json'
    // })
    cy.get('select')
      .select('2')
    cy.get('button').contains('START GAME').click()
    cy.get('article').then(($el) => {
      Cypress.dom.isElement($el)
      Cypress.dom.isFocusable($el)
    })
    cy.get('article')
      .contains('$100') 
  })

  it('Should have an exit game button', () => {
    // cy.intercept('GET', 'https://better-jeopardy-api.herokuapp.com/api/v1/questions', { 
    //   statusCode: 200,
    //   fixture: 'allQuestions.json'
    // })
    cy.get('select')
      .select('2')
      cy.get('button').contains('START GAME').click()
      cy.get('[data-cy=exit]').click()
  })

  it('Should have a game board with ten question links for a 2 category game', () => {
    // cy.intercept('GET', 'https://better-jeopardy-api.herokuapp.com/api/v1/questions', { 
    //   statusCode: 200,
    //   fixture: 'allQuestions.json'
    // })
      cy.get('select')
      .select('2')
      cy.get('button').contains('START GAME').click()
        .get('div > a').should(($a) => {
        expect($a).to.have.length(10)
        expect($a.eq(0)).to.contain('$100')
        expect($a.eq(1)).to.contain('$200')
        expect($a.eq(2)).to.contain('$300')
        expect($a.eq(3)).to.contain('$400')
        expect($a.eq(4)).to.contain('$500')
        expect($a.eq(5)).to.contain('$100')
        expect($a.eq(6)).to.contain('$200')
        expect($a.eq(7)).to.contain('$300')
        expect($a.eq(8)).to.contain('$400')
        expect($a.eq(9)).to.contain('$500')
      })
  })

  it('Should navigate to a question page when a question box is clicked', () => {
    //   cy.intercept('GET', 'https://better-jeopardy-api.herokuapp.com/api/v1/questions', { 
    //   statusCode: 200,
    //   fixture: 'allQuestions.json'
    // })
    cy.get('select')
      .select('2')
      cy.get('button').contains('START GAME').click()
      cy.url().should('eq', 'http://localhost:3000/game')
      cy.get('div > a').get('a').eq(1).click()
    })

 
    it('Should be able to use the back and forward buttons', () => {
      //   cy.intercept('GET', 'https://better-jeopardy-api.herokuapp.com/api/v1/questions', { 
      //   statusCode: 200,
      //   fixture: 'allQuestions.json'
      // })
      cy.get('select')
        .select('2')
        cy.get('button').contains('START GAME').click()
        cy.url().should('eq', 'http://localhost:3000/game')
        cy.get('div > a').get('a').eq(1).click()
        cy.go('back')
        cy.go('forward')
    })

    it('Should notify the user if they answered the question right or wrong', () => {
      cy.get('select')
      .select('6')
      cy.get('button').contains('START GAME').click()
      cy.url().should('eq', 'http://localhost:3000/game')
      cy.get('div > a').get('a').eq(1).click()
      // To be continued when a correct // incorrect p tag is added to the DOM
    })


  })
      


