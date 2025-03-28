export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asasf' },
        body: {
            "id": "4",
            "first": "Test",
            "lastname": "User",
            "age": 29,
            "currency": "USD",
            "country": "Belarus",
            "city": "Minks",
            "username": "admin",
            "avatar": "https://sun9-42.userapi.com/s/v1/if1/IfjACAM7kcoNjo4zBdDpOYpc-gR-AAPafa7xuG3Lpg-PVEZU8TgdfEEKtG5e1pRg1Bmp_mgn.jpg?size=200x200&quality=96&crop=412,564,1001,1001&ava=1"
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
