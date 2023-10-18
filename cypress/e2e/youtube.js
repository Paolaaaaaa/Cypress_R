
 

describe('Testing basic Intagram', () => {
    beforeEach(()=>{
       cy.visit('https://www.youtube.com')
       cy.wait(7000)
    })

    it('Test links registration and login',()=>{


      cy.get('yt-spec-touch-feedback-shape__fill').click()
      cy.get('a').click()
      cy.url().should('eq','https://github.com/login')

    })



  })
   






