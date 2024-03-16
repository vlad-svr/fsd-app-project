let currentArticleId = ''
describe('User gets to the article details page', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then(data => {
      currentArticleId = data.id
      cy.visit(`articles/${currentArticleId}`)
    })
  })
  afterEach(() => {
    cy.login()
    cy.removeArticle(currentArticleId)
  })

  it('Rendered', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
  })

  it('Render list of recommendations', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist')
  })

  it('Send a comment', () => {
    const commentTest = 'Comment test text'
    cy.getByTestId('ArticleDetails.Info').should('exist')
    cy.getByTestId('AddCommentForm').should('exist')
    cy.getByTestId('AddCommentForm').scrollIntoView()
    cy.addComment('Comment test text')
    cy.getByTestId('CommentCard.Content').should('have.length', 1)
    cy.getByTestId('CommentCard.Paragraph').should('have.text', commentTest)
  })

  it('Rate the article 4', () => {
    cy.intercept('GET', '**/articles/*', {fixture: 'article-details.json'})
    cy.getByTestId('ArticleDetails.Info').should('exist')
    cy.getByTestId('RatingCard').should('exist')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(4, 'feedback')
    cy.get('[data-selected=true]').should('have.length', 4)
    cy.get('[data-selected=false]').should('have.length', 1)
  })
})