import SearchPO from '../../../PageObjects/searchPage';
import LoginPO from '../../../PageObjects/loginPage';


describe('Login Page - Positive Tests', () => {

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

    
    //     // Cookies
    //     cy.setCookie('__utma', '163644015.1616490321.1794464276.1794827300.1794833014.6');
    //     cy.setCookie('__utmc', '163644015', {
      //   domain: 'https://adactinhotelapp.com/index.php',
      //   path: '/',

      // });    
    // cy.reload()


    // cy.visit('https://adactinhotelapp.com/SearchHotel.php')
  })

  it('TC 1 - Test User Search', () => {
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
    searchPO.verifyCorrectLocation()

  })

})