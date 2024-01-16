import { getIngredientsReducer, initialState } from './burgerIngredients';

import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from '../actions/burgerIngredients';

const mockIngredients = [
  {
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
  },
];

describe('auth reducer', () => {
  it('should return the initial state', () => {
    const testData = getIngredientsReducer(undefined, {});
    const expected = { ...initialState };

    expect(testData).toEqual(expected);
  });

  it('should handle GET_INGREDIENTS', () => {
    const testData = getIngredientsReducer(initialState, {
      type: GET_INGREDIENTS,
    });
    const expected = {
      ...initialState,
      ingredientsRequest: true,
      ingredientsFailed: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    const testData = getIngredientsReducer(initialState, {
      type: GET_INGREDIENTS_SUCCESS,
      ingredients: mockIngredients,
    });
    const expected = {
      ...initialState,
      ingredients: mockIngredients,
      ingredientsRequest: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle GET_INGREDIENTS_FAILED', () => {
    const testData = getIngredientsReducer(initialState, {
      type: GET_INGREDIENTS_FAILED,
    });
    const expected = {
      ...initialState,
      ingredientsFailed: true,
      ingredientsRequest: false,
    };

    expect(testData).toEqual(expected);
  });
});
