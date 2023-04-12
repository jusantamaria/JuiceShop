describe("Making a purchase on JuiceShop website from scratch", () =>{
    before("Precondition: Create a valid Account", () =>{
        cy.visit("https://juice-shop.herokuapp.com/#/") 
        cy.get('.close-dialog').click()
        //Creating an account
        cy.CreateAnAccount("random148@gmail.com","RandomPassword")
    })
    it("Making a purchase from scratch", ()=>{
        cy.LoginAccount('random148@gmail.com','RandomPassword')
        cy.SelectProduct()
        cy.Checkout()
        cy.NewAddress()
        cy.CreateAddress()
        cy.SelectAddress()
        cy.SelectShipping()
        cy.PaymentMethod()
        cy.PlaceOrder()
    })
})