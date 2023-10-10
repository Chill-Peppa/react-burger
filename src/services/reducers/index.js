import { combineReducers } from 'redux';
import { getIngredientsReducer } from './burgerIngredients.js';
import { constructorReducer } from './burgerConstructor.js';

export const rootReducer = combineReducers({
  ingredients: getIngredientsReducer,
  addedIngredients: constructorReducer,
});
