import { combineReducers } from 'redux';
import { getIngredientsReducer } from './burgerIngredients.js';
import { constructorReducer } from './burgerConstructor.js';
import { ingredientReducer } from './ingredient.js';
import { orderNumberReducer } from './order.js';
import { authReducer } from './auth.js';

export const rootReducer = combineReducers({
  ingredients: getIngredientsReducer,
  addedIngredients: constructorReducer,
  ingredient: ingredientReducer,
  order: orderNumberReducer,
  user: authReducer,
});
