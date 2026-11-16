import SearchPO from '../../../PageObjects/searchPage';
import LoginPO from '../../../PageObjects/loginPage';


describe('Login Page - Negative Tests', () => {

  const searchPO = new SearchPO();
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

  it('Neg TC1 - Blank Location Selected', () => {
    loginPO.UsernameCheck()
    loginPO.UsernameSelect(users.standardUser.username)

    loginPO.PasswordCheck()
    loginPO.PasswordSelect(users.standardUser.password)

    loginPO.clickLogin()
    loginPO.verifyLoginSuccess()


    //
    searchPO.LocationListCheck()
    searchPO.selectLocationList()

    searchPO.clickSearch()
    
    searchPO.verifySearchSuccess()
    // searchPO.verifyLocationError()

  })

})