import loginSelectors from '../PageSelectors/loginSelectors';

class LoginPO {


    // Actions
    UsernameCheck() {
        cy.get(loginSelectors.username).should('be.visible')
    }

    PasswordCheck() {
        cy.get(loginSelectors.password).should('be.visible')
    }

    UsernameSelect(value) {
        cy.get(loginSelectors.username).clear().type(value)
    }

    PasswordSelect(value) {
        cy.get(loginSelectors.password).clear().type(value)
    }

    clickLogin() {
        cy.get(loginSelectors.loginButton).click()
    }

    // Assertions
    verifyLoginSuccess() {
        cy.url().should('include', '/SearchHotel.php')
    }
}

export default LoginPO;