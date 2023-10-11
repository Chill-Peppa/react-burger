import { combineReducers } from 'redux';
import { getIngredientsReducer } from './burgerIngredients.js';
import { constructorReducer } from './burgerConstructor.js';
import { ingredientReducer } from './ingredient.js';

export const rootReducer = combineReducers({
  ingredients: getIngredientsReducer,
  addedIngredients: constructorReducer,
  ingredient: ingredientReducer,
});
