let profileId = ''

describe('Profile edit', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login().then((data) => {
      profileId = data.id
      cy.visit(`profile/${data.id}`)
    })
  })
  afterEach(() => {
    cy.resetProfile(profileId)
  })

  it('Profile is loaded', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'Test')
  })

  it('Update profile', () => {
    cy.updateProfile('updatedFirstName', 'updatedLastName')
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'updatedFirstName')
    cy.getByTestId('ProfileCard.lastname').should('have.value', 'updatedLastName')
  })
})