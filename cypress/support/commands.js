Cypress.Commands.add("CreateAnAccount", (user, password) => {
    cy.get('.cc-btn').click()
    cy.get('span').contains('Account').click()
    cy.get("#navbarLoginButton").click()
    cy.url().should('contain','login')
    cy.get('#newCustomerLink > .primary-link').click({force:true})
    cy.get('h1').should('contain','User Registration')
    cy.get('#emailControl').click().type(user)
    cy.get('#passwordControl').click().type(password)
    cy.get('#repeatPasswordControl').click().type(password)
    cy.get('.mat-select-placeholder').click()
    cy.get('.mat-option-text').eq(11).click()
    cy.get('.mat-select-min-line').should('have.text','Your favorite movie?')
    cy.get('#securityAnswerControl').click().type('Tarzan')
    cy.get('#registerButton').click()
    cy.get('.mat-simple-snack-bar-content').should('contain.text','Registration completed successfully. You can now log in.')
    //cy.get('h1').should('have.text','Login')
})
Cypress.Commands.add("LoginAccount", (user, password) =>{

    cy.session("Successful login", ()=>{
        cy.visit("https://juice-shop.herokuapp.com/#/login")
        cy.get('.close-dialog').click()
        cy.get('#email').click().type(user)
        cy.get('#password').click().type(password)
        cy.get('#loginButton > .mat-button-wrapper').click()  
        cy.url().should('contain','search')
   })
})
Cypress.Commands.add("SelectProduct", () =>{
    cy.visit("https://juice-shop.herokuapp.com/#/search")
    cy.get(".mat-toolbar-row").should('contain.text','Your Basket')
    cy.get('.cc-btn').click()
    cy.get('#mat-select-value-1').click({force:true})
    cy.get('#mat-option-2 > .mat-option-text').click({force:true})
    cy.get(".mat-paginator-range-label").should('contain.text', '1 – 35 of 35')
    cy.get(".mat-button-wrapper").eq(19).click() 
    cy.get('.mat-simple-snack-bar-content').should('have.text', 'Placed OWASP Juice Shop Card (non-foil) into basket.')
    cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted').should('contain','1')
    cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted').click()
    cy.get('h1').should('contain.text', 'Your Basket')
})
Cypress.Commands.add("Checkout", () =>{
    cy.visit("https://juice-shop.herokuapp.com/#/basket")
    cy.get('.mat-row > .cdk-column-product').should('have.text',' OWASP Juice Shop Card (non-foil) ')
    cy.get('#checkoutButton').click({force:true})

})
Cypress.Commands.add("NewAdress", () =>{
    cy.visit("https://juice-shop.herokuapp.com/#/adress/select")
    cy.get('h1.ng-star-inserted').should('contain.text','Select an address')
    cy.get('button').eq(0).click({force:true})
    //cy.url().should('contain','/adress/create')
  
})
Cypress.Commands.add("CreateAddress", () =>{
    cy.visit("https://juice-shop.herokuapp.com/#/address/create")
    cy.get('h1').should('contain.text','Add New Address')
    cy.get('#mat-input-1').click({force:true}).type('Spain')
    cy.get('#mat-input-2').click({force:true}).type('Juan')
    cy.get('#mat-input-3').click({force:true}).type('634552123')
    cy.get('#mat-input-4').click({force:true}).type('12540')
    cy.get('#address').click({force:true}).type('Adress Random 1234')
    cy.get('#mat-input-6').click({force:true}).type('Random City')
    cy.get('#mat-input-7').click({force:true}).type('Random State')
    cy.get('#submitButton > .mat-button-wrapper').click({force:true})
})
Cypress.Commands.add("SelectAddress", () =>{
    cy.visit("https://juice-shop.herokuapp.com/#/address/select")
    cy.get('[type="radio"]').eq(0).check({force:true})
    cy.get('[type="radio"]').eq(1).check({force:true})
    cy.get('[type="radio"]').eq(0).check({force:true})
    cy.get('.mat-button-wrapper').eq(7).click({force:true})
})