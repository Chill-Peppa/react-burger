import { combineReducers } from 'redux';
import { getIngredientsReducer } from './burgerIngredients.ts';
import { constructorReducer } from './burgerConstructor.ts';
import { ingredientReducer } from './ingredient.ts';
import { orderNumberReducer } from './order.ts';
import { authReducer } from './auth.js';

export const rootReducer = combineReducers({
  ingredients: getIngredientsReducer,
  addedIngredients: constructorReducer,
  ingredient: ingredientReducer,
  order: orderNumberReducer,
  user: authReducer,
});
