describe("Making a purchase on JuiceShop website from scratch", () =>{
    before("Precondition: Create a valid Account", () =>{
        cy.visit("https://juice-shop.herokuapp.com/#/") 
        cy.get('.close-dialog').click()
        //Creating an account
        cy.CreateAnAccount("random97@gmail.com","RandomPassword")
    })
    it("Successful login", ()=>{
        cy.LoginAccount('random97@gmail.com','RandomPassword')
        cy.SelectProduct()
        cy.Checkout()
        cy.NewAdress()
        cy.CreateAddress()
        cy.SelectAddress()
    })
})