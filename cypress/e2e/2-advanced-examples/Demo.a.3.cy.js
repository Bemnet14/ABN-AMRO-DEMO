describe('Registratie Test', () => {
    it('registreert met willekeurige naam en wachtwoord', () => {
      cy.visit('https://demowebshop.tricentis.com/register')
  
      // Genereer een willekeurige naam en wachtwoord
      //const randomName = 'TestUser' + Math.floor(Math.random() * 100000)
      //const randomEmail = 'testuser' + Math.floor(Math.random() * 100000) + '@example.com'
      const randomPassword = 'Passw0rd!123' // Willekeurig wachtwoord, pas dit indien nodig aan

      function generateRandomEmail(firstName, lastName) {
        const domain = 'example.com'; // of een ander gewenst domein
        const randomNumber = Math.floor(Math.random() * 10000); // genereer een willekeurig getal
        const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${randomNumber}@${domain}`;
        return email;
    }
    
    // Lijst van namen dn
    const namesAndEmails = [
        { firstName: 'Emma', lastName: 'Koster' },
        { firstName: 'Lars', lastName: 'Van den Berg' },
        { firstName: 'Noa', lastName: 'Meijer' },
        { firstName: 'Sem', lastName: 'Smit' },
        { firstName: 'Julia', lastName: 'Mulder' },
        { firstName: 'Finn', lastName: 'Van der Heijden' },
        { firstName: 'Tess', lastName: 'Van Leeuwen' },
        { firstName: 'Max', lastName: 'De Jong' },
        { firstName: 'Sara', lastName: 'Vos' },
        { firstName: 'Jesse', lastName: 'Bakker' }
    ];
    
    // Gebruik het in je Cypress-test
    namesAndEmails.forEach(({ firstName, lastName }) => {
        it(`Voorbeeld Cypress-test voor ${firstName} ${lastName}`, () => {
            const randomEmail = generateRandomEmail(firstName, lastName);
            cy.log(`Naam: ${firstName} ${lastName}, E-mail: ${randomEmail}`);
            

            // Voer hier je teststappen uit en gebruik randomEmail waar nodig
        });
    });
    
    
      // Vul het registratieformulier in met de willekeurige naam en wachtwoord
      cy.get('#FirstName').type(firstName)
      cy.get('#LastName').type(lastName) // Vul hier andere vereiste velden in
      cy.get('#Email').type(randomEmail) // Vul hier andere vereiste velden in
      cy.get('#Password').type(randomPassword)
      cy.get('#ConfirmPassword').type(randomPassword)
  
      // Klik op de registratieknop
      cy.get('[name="register-button"]').click()
  
      // Voer validatie uit om te controleren of registratie is gelukt
      cy.contains('Your registration completed').should('exist')
  
      cy.get('.ico-logout').click()
  
      // Voer validatie uit om te controleren of uitloggen is gelukt
      // ...
  
      // Navigeer naar de inlogpagina
      cy.visit('https://demowebshop.tricentis.com/login')
  
      // Voer inlogactie uit met de eerder geregistreerde gegevens
      cy.get('#Email').type(randomEmail)
      cy.get('#Password').type(randomPassword)
      cy.get('[value="Log in"]').click()
  
      cy.visit('https://demowebshop.tricentis.com/build-your-cheap-own-computer') // Vervang dit met de URL van het specifieke model
  
      cy.get('#add-to-cart-button-72').click() 
  
      cy.scrollTo('top');
  
  
      // Voer validatie uit om te controleren of computer is toegevoegd aan winkelwagen
      // ...
  
      // Ga naar de winkelwagen
  
      cy.visit('https://demowebshop.tricentis.com/cart')
  
      
      // Klik op "Checkout"
      cy.get('#termsofservice').check()
      cy.get('.checkout-button').click()
      cy.wait(3000);
      
      const randomCity = 'City' + Math.floor(Math.random() * 100000)
      const randomAddress1 = 'Address1' + Math.floor(Math.random() * 100000)
      const randomAddress2 = 'Address2' + Math.floor(Math.random() * 100000)
      const randomZipCode = Math.floor(Math.random() * 90000) + 10000 // Genereer een vijfcijferige postcode
      const randomPhoneNumber = Math.floor(Math.random() * 9000000000) + 1000000000 // Genereer een 10-cijferig telefoonnummer
  
      // Vul de checkout velden in met willekeurige gegevens
      // Klik om de dropdown te openen
      cy.get('#BillingNewAddress_CountryId').select('Netherlands');
  
      cy.get('#BillingNewAddress_City').type(randomCity)
      cy.get('#BillingNewAddress_Address1').type(randomAddress1)
      cy.get('#BillingNewAddress_ZipPostalCode').type(randomZipCode)
      cy.get('#BillingNewAddress_PhoneNumber').type(randomPhoneNumber)
  
  
      
      // Zoek het element op basis van de selector en klik erop
      cy.get('input[onclick="Billing.save()"]').click();
  
  
      cy.get('input[onclick="Shipping.save()"]').click();
      // Zoek het element op basis van de selector en klik erop
      cy.get('.button-1.shipping-method-next-step-button').click();
  
      cy.get('.button-1.payment-method-next-step-button').click();
  
      cy.get('.button-1.payment-info-next-step-button').click();
  
      // Scroll naar beneden
      cy.scrollTo('bottom');
      // Zoek het element op basis van de selector en klik erop
      cy.get('input[value="Confirm"]').click();
  
      cy.wait(3000);
  
      // Voer een test uit om te controleren of de tekst zichtbaar is
      // Zoeken naar het element met de selector en valideren van de tekst
     // Controleren of de tekst wordt weergegeven
      cy.contains('Your order has been successfully processed!').should('be.visible');
  
  
      
  
  
  
  
  
  
  
    })
  })
  