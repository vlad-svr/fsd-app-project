import {selectByTestId} from '../../helpers/selectByTestId';

describe('Routing', () => {
  describe('Authorized', () => {
    it('Passing to the main page', () => {
      cy.visit('/')
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('Passing to the profile page', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('Page doesn\'t exist', () => {
      cy.visit('/fdgfgdfd')
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
  })

  describe('Not authorized', () => {
    beforeEach(() => {
      cy.login('test', '123')
    })

    it('Passing to the main page', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })

    it('Passing to the articles page', () => {
      cy.visit('/articles')
      cy.get(selectByTestId('ArticlesPage')).should('exist')
    })
  })
})
