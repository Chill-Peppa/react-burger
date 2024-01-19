import '@4tw/cypress-drag-drop';

describe('service is available', () => {
  beforeEach(() => {
    let email = 'test@test.ru';
    let password = 'test12345';
    cy.visit('http://localhost:3000');

    /* Тут перехватываются запросы с мокнутыми данными */
    cy.get('[data-test="email-input"]').type(`${email}`);
    cy.get('[data-test="password-input"]').type(`${password}{enter}`);
    cy.intercept('POST', 'auth/login', { fixture: 'user.json' }).as(
      'postLogin',
    );
    cy.intercept('POST', 'api/orders', { fixture: 'order.json' }).as(
      'postOrder',
    );

    cy.setCookie('refreshToken', 'test-refreshToken');
    cy.setCookie('accessToken', 'test-accessToken');
  });

  afterEach(() => {
    cy.clearCookies();
  });

  /* dnd */
  it('should be work d-n-d', () => {
    cy.get('[class^=ingredient-card_card__]').as('draggableCard');
    cy.get('[class^=burger-constructor_ingredientContainer__]').as(
      'droppableContainer',
    );

    cy.get('@draggableCard')
      .contains('Флюоресцентная булка R2-D3')
      .drag('@droppableContainer');
    cy.get('@draggableCard')
      .contains('Соус Spicy-X')
      .drag('@droppableContainer');
  });

  /* модалка с заказом */
  it('should be open and close modal order', () => {
    cy.get('[class^=ingredient-card_card__]').as('draggableCard');
    cy.get('[class^=burger-constructor_ingredientContainer__]').as(
      'droppableContainer',
    );

    cy.get('@draggableCard')
      .contains('Флюоресцентная булка R2-D3')
      .drag('@droppableContainer');
    cy.get('@draggableCard')
      .contains('Соус Spicy-X')
      .drag('@droppableContainer');

    cy.get('[class^=button').contains('Оформить заказ').click();
  });
});
