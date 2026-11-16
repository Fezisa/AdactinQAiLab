import searchSelectors from '../PageSelectors/searchSelectors';



class SearchPO {


    // Actions
    LocationListCheck() {
        cy.get(searchSelectors.locationlist).should('be.visible')
    }

    selectLocationList() {
        cy.get(searchSelectors.locationlist).select('Sydney')
    }     

    clickSearch() {
        cy.get(searchSelectors.searchbtn).click()
    }

    

    // Assertions
    verifySearchSuccess() {
        cy.url().should('include', '/SelectHotel.php')
    }

     verifyCorrectLocation() {
        cy.get(searchSelectors.tableLocation).should('have.value', 'Sydney');
    }

         verifyLocationError() {
        cy.get(searchSelectors.locationError).should('have.text', 'Please Select a Location');
    }
}

export default SearchPO;