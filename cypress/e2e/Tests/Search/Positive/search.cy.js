import SearchPO from '../../../PageObjects/searchPage';


describe('Login Page - Positive Tests', () => {

  const searchPO = new SearchPO();

    let users;

  before(() => {
    cy.fixture('users').then((data) => {
      users = data;
    });
  });


  beforeEach(() => {
    cy.login(users.standardUser.username, users.standardUser.password);
    cy.visit('https://adactinhotelapp.com/SearchHotel.php');  
  });


  it('TC 1 - Test Search by Location', () => {

    //
    searchPO.LocationListCheck()
    searchPO.selectLocationList()

    searchPO.clickSearch()
    
    searchPO.verifySearchSuccess()
    searchPO.verifyCorrectLocation()

  })

})