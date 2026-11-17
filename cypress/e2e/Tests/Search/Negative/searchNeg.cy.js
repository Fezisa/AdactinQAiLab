import SearchPO from '../../../PageObjects/searchPage';


describe('Login Page - Negative Tests', () => {

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

  it('Neg TC1 - Test Search with blank location selected', () => {

    //
    searchPO.LocationListCheck()
    searchPO.selectLocationList()

    searchPO.clickSearch()
    
    searchPO.verifySearchSuccess()
    // searchPO.verifyLocationError()

  })

})