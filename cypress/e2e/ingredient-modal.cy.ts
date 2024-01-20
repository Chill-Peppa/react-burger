describe('service is available', () => {
  /* Приложение запускается на localhost */
  it('should be available on localhost:3000', () => {
    cy.visit('/');
    cy.get('h1').contains('Соберите бургер');
  });

  /* открытие и закрытие модалки ингредиента */
  it('should be open and close ingredient modal', () => {
    cy.visit('http://localhost:3000');
    cy.get('[class^=ingredient-card_card__]')
      .contains('Краторная булка N-200i')
      .click();
    cy.get('[class^=modal_container__m7HCT]')
      .contains('Краторная булка N-200i')
      .should('exist');
    cy.get('[data-testid=close]').as('close').click();
  });
});
