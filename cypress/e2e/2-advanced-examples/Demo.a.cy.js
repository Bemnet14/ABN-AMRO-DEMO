describe('Registratie Test 2', () => {
    it('registreert met willekeurige naam en wachtwoord', () => {
      cy.visit('https://demowebshop.tricentis.com/register')
  
      // Genereer een willekeurige naam en wachtwoord
      const randomName = 'TestUser' + Math.floor(Math.random() * 100000)
      const randomEmail = 'testuser' + Math.floor(Math.random() * 100000) + '@example.com'
      const randomPassword = 'Passw0rd!123' // Willekeurig wachtwoord, pas dit indien nodig aan
      
  
      // Vul het registratieformulier in met de willekeurige naam en wachtwoord
      cy.get('#FirstName').type(randomName)
      cy.get('#LastName').type('Doe') // Vul hier andere vereiste velden in
      cy.get('#Email').type(randomEmail) // Vul hier andere vereiste velden in
      cy.get('#Password').type(randomPassword)
      cy.get('#ConfirmPassword').type(randomPassword)

      Cypress.env('randomName', randomName);
      Cypress.env('randomEmail', randomEmail);
  
      // Klik op de registratieknop ok
      cy.get('[name="register-button"]').click()
  
      // Voer validatie uit om te controleren of registratie is gelukt
      cy.contains('Your registration completed').should('exist')
  
      cy.get('.ico-logout').click()
    })
})
