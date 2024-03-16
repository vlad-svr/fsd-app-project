describe('User gets to the articles list page', () => {
  beforeEach(() => {
    cy.login().then(data => {
      cy.visit('articles')
    })
  })

  it('Rendered', () => {
    cy.getByTestId('ArticlesList').should('exist')
    cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 3)
  })

  it('Rendered with stubs', () => {
    cy.intercept('GET', '**/articles?*', {fixture: 'articles.json'})
    cy.getByTestId('ArticlesList').should('exist')
    cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 3)
  })
})