describe('Apply Board Update User Credentials and Refresh Test', function () {
    it('Visit ApplyBoard website', function () {
        cy.visit('https://www.applyboard.com/')
    
    // Click Account
        cy.get(':nth-child(4) > .container > .collapse > #menu-navigation-header > .th-accent > a').click ()
    
    // Type in user credentials and login
        cy.get('#user_email').type("testing@applyboard.com")
        cy.get('#user_password').type("12345678")
        cy.get('[name="commit"]').click()

    // Close the modal that appears on page load
        cy.get('#filterModal .close').click()
    
    // Click Profile
        cy.get('#side-menu > li:nth-of-type(4) > a').click()
    
    // Update first name and last name, click next and refresh
        cy.get('div.card-content > div:first-child input').clear()
        cy.get('div.card-content > div:first-child input').type("First Name Update")
        cy.get('div.card-content > div:nth-of-type(3) input').clear()
        cy.get('div.card-content > div:nth-of-type(3) input').type("Last Name Update")
        cy.get('div > div:nth-of-type(3) > button').click()
        cy.reload({ timeout: 100000 });

    // Verify updated fields saved accordingly
        cy.get('div > div:first-child > div:first-child > div.\_stopLabel').click()
        cy.get('.card-content > div:first-child input')
            .should('have.value','First Name Update')
        cy.get('.card-content > div:nth-of-type(3) input')
            .should('have.value','Last Name Update')
    })
})