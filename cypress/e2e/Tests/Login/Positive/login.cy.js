import LoginPO from '../../../PageObjects/loginPage';

describe('Login Page - Positive Tests', () => {

  const loginPO = new LoginPO();
  
  let users;

  before(() => {
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    cy.visit('https://adactinhotelapp.com/index.php')
  })

  it('TC 1 - Test User Login', () => {
    loginPO.UsernameCheck()
    loginPO.UsernameSelect(users.standardUser.username)

    loginPO.PasswordCheck()
    loginPO.PasswordSelect(users.standardUser.password)

    loginPO.clickLogin()
    loginPO.verifyLoginSuccess()


    //  cy.reload();

  })

})