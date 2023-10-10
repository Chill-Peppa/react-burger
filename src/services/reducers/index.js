import { combineReducers } from 'redux';
import { getIngredientsReducer } from './burgerIngredients.js';

export const rootReducer = combineReducers({
  ingredients: getIngredientsReducer,
});
