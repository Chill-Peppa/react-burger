import { initialState, ingredientReducer } from './ingredient';

import { OPEN_INGREDIENT, CLOSE_INGREDIENT } from '../actions/ingredient';

const mockIngredient = {
  _id: 'test',
  name: 'test',
  type: 'test',
  proteins: 12345,
  fat: 12345,
  carbohydrates: 12345,
  calories: 12345,
  price: 12345,
  image: 'test',
  image_mobile: 'test',
  image_large: 'test',
  __v: 12345,
};

describe('auth reducer', () => {
  it('should return the initial state', () => {
    const testData = ingredientReducer(undefined, {});
    const expected = { ...initialState };

    expect(testData).toEqual(expected);
  });

  it('should handle OPEN_INGREDIENT', () => {
    const testData = ingredientReducer(initialState, {
      type: OPEN_INGREDIENT,
      ingredient: mockIngredient,
    });
    const expected = {
      ...initialState,
      selectedIngredient: mockIngredient,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle CLOSE_INGREDIENT', () => {
    const testData = ingredientReducer(initialState, {
      type: CLOSE_INGREDIENT,
      selectedIngredient: mockIngredient,
    });
    const expected = {
      ...initialState,
      selectedIngredient: mockIngredient,
    };

    expect(testData).toEqual(expected);
  });
});
