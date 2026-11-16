import LoginPO from '../../../PageObjects/loginPage';


describe('Login Page - Negative Tests', () => {

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

  it('Neg TC1 - Incorrect Username', () => {
    loginPO.UsernameCheck()
    loginPO.UsernameSelect(users.IncorrectUser.username)

    loginPO.PasswordCheck()
    loginPO.PasswordSelect(users.IncorrectUser.password)

    loginPO.clickLogin()

  })

    it('Neg TC2 - Incorrect Password', () => {
    loginPO.UsernameCheck()
    loginPO.UsernameSelect(users.IncorrectPassword.username)

    loginPO.PasswordCheck()
    loginPO.PasswordSelect(users.IncorrectPassword.password)

    loginPO.clickLogin()

  })

})
