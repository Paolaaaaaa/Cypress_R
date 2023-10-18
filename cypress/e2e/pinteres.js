
 

describe('Testing basic Pinteres', () => {
    beforeEach(()=>{
       cy.visit('https://co.pinterest.com/')
       cy.wait(7000)
    })







     

    it('Display Sing up correctly ',()=>{


      cy.get('[data-test-id="header-about-button"] > .tBJ > .Wk9').contains('About');
      cy.get('[data-test-id="header-business-button"] > .tBJ > .Wk9').contains('Business');
      cy.get('[data-test-id="header-blog-button"] > .tBJ > .Wk9').contains('Blog')     
      cy.get('.wc1 > .oRi > .RCK').contains("Log in")
      cy.get('[data-test-id="simple-signup-button"] > .oRi > .RCK').contains('Sign up')
      cy.get('[data-test-id="simple-signup-button"] > .oRi > .RCK').click()
      cy.wait(1000)
      cy.get('[style="width: 268px; margin: 0px auto;"] > :nth-child(1)').should('be.visible')

    })


    it('Display Log in correctly ',()=>{


      cy.get('[data-test-id="header-about-button"] > .tBJ > .Wk9').contains('About');
      cy.get('[data-test-id="header-business-button"] > .tBJ > .Wk9').contains('Business');
      cy.get('[data-test-id="header-blog-button"] > .tBJ > .Wk9').contains('Blog')     
      cy.get('.wc1 > .oRi > .RCK').contains("Log in")
      cy.get('[data-test-id="simple-signup-button"] > .oRi > .RCK').contains('Sign up')
      cy.get('.wc1 > .oRi > .RCK').click()
      cy.wait(1000)
      cy.get('[style="width: 268px; margin: 0px auto;"]').should('be.visible')

    })


        it('Warning when email is not correct ',()=>{


     
      cy.get('[data-test-id="simple-signup-button"] > .oRi > .RCK').contains('Sign up')
      cy.get('.wc1 > .oRi > .RCK').click()
      cy.wait(1000)
      cy.get('[style="width: 268px; margin: 0px auto;"]').should('be.visible')

      cy.get('#email').type("a@gmail")
      cy.get('.red').click()
      cy.wait(1000)

      cy.get('.A6h').should('be.visible')

    })


    it('Warning registration without email ',()=>{


     
      cy.get('[data-test-id="simple-signup-button"] > .oRi > .RCK').contains('Sign up')
      cy.get('.wc1 > .oRi > .RCK').click()
      cy.wait(1000)
      cy.get('[style="width: 268px; margin: 0px auto;"]').should('be.visible')

      cy.get('#password').type("fdsafdsa124")
      cy.get('.red').click()
      cy.wait(1000)

      cy.get('.A6h').should('be.visible')

    })


    it('Reset password function in log in  ',()=>{


      
      cy.get('.wc1 > .oRi > .RCK').contains("Log in")
      cy.get('.wc1 > .oRi > .RCK').click()
      cy.wait(1000)
      cy.get('[style="width: 268px; margin: 0px auto;"]').should('be.visible')

      cy.get('#email').type("a@gmail")
      cy.get('.red').click()
      cy.wait(1000)

      cy.get('.A6h').should('be.visible')

      cy.get('.hjj > .tBJ > .Wk9').click()

      cy.url().should('eq', 'https://co.pinterest.com/password/reset/?ue=a@gmail')
      cy.get('.Eqh > .RCK').click()
      cy.get('.Cii').should('be.visible')


    })


    
   



    it('Display Sing up for business correctly ',()=>{

   
      cy.get('.wc1 > .oRi > .RCK').contains("Log in")
      cy.get('[data-test-id="simple-signup-button"] > .oRi > .RCK').contains('Sign up')
      cy.get('[data-test-id="simple-signup-button"] > .oRi > .RCK').click()
      cy.wait(1000)
      cy.get('[style="width: 268px; margin: 0px auto;"] > :nth-child(1)').should('be.visible')

      cy.get('.Rym > .CCY > .KS5').click()

      cy.get('[style="text-align: center; color: rgb(51, 51, 51); font-size: 16px; font-weight: normal; margin: -23px 26px 18px;"]').contains('Grow your business')
      cy.get('[data-test-id="business-email"] > .JME > .LTD > .tBJ').should('be.visible')
      cy.get('[data-test-id="business-birthdate"] > .hs0').should('be.visible')
    })

    it('Expore more should display correctly',()=>{

   
      cy.get('.wc1 > .oRi > .RCK').contains("Log in")
      cy.get('[data-test-id="simple-signup-button"] > .oRi > .RCK').contains('Sign up')
      cy.get('.wsz > .CCY > .KS5').should('be.visible')

    })






  })
   






