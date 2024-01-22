import { initialState, constructorReducer } from './burgerConstructor';

import {
  ADD_BUN_INGREDIENT,
  ADD_MAIN_INGREDIENT,
  DELETE_MAIN_INGREDIENT,
  SORT_INGREDIENTS,
} from '../actions/burgerConstructor';
import update from 'immutability-helper';

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
  dropId: 'test',
  index: 12345,
};

const id = 'test';
const dragIndex = 12345;
const hoverIndex = 12345;

const sortMain = update(initialState.mainIngredientsData, {
  $splice: [
    [dragIndex, 1],
    [hoverIndex, 0, initialState.mainIngredientsData[dragIndex]],
  ],
});

describe('auth reducer', () => {
  it('should return the initial state', () => {
    const testData = constructorReducer(undefined, {});
    const expected = { ...initialState };

    expect(testData).toEqual(expected);
  });

  it('should handle ADD_BUN_INGREDIENT', () => {
    const testData = constructorReducer(initialState, {
      type: ADD_BUN_INGREDIENT,
      bun: mockIngredient,
    });

    const expected = {
      ...initialState,
      bunIngredientsData: mockIngredient,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle ADD_MAIN_INGREDIENT', () => {
    const testData = constructorReducer(initialState, {
      type: ADD_MAIN_INGREDIENT,
      main: mockIngredient,
    });

    const expected = {
      ...initialState,
      mainIngredientsData: [
        ...initialState.mainIngredientsData,
        mockIngredient,
      ],
    };

    expect(testData).toEqual(expected);
  });

  it('should handle DELETE_MAIN_INGREDIENT', () => {
    const testData = constructorReducer(initialState, {
      type: DELETE_MAIN_INGREDIENT,
      id: id,
    });

    const expected = {
      ...initialState,
      mainIngredientsData: [...initialState.mainIngredientsData].filter(
        (item) => item.dropId !== id,
      ),
    };

    expect(testData).toEqual(expected);
  });

  it('should handle SORT_INGREDIENTS', () => {
    const testData = constructorReducer(initialState, {
      type: SORT_INGREDIENTS,
      sortMain: sortMain,
    });

    const expected = {
      ...initialState,
      mainIngredientsData: sortMain,
    };

    expect(testData).toEqual(expected);
  });
});
