import '@4tw/cypress-drag-drop';

describe('service is available', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('span').contains('Личный кабинет').click();
    cy.get('input').first().type('www.nastya97@yandex.ru');
    cy.get('input').last().type('nastyanastya19977');
    cy.get('button').contains('Войти').click();
    cy.get('span').contains('Конструктор').click();

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

    cy.get('[class^=button]').contains('Оформить заказ').click();
    cy.wait('@postOrder');
    cy.get('[class^=order-details_orderDetails__]')
      .contains('идентификатор заказа')
      .should('exist');
    cy.get('[class^=modal_close__9WVfX]').click();
  });
});
