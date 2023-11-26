import { combineReducers } from 'redux';
import { getIngredientsReducer } from './burgerIngredients';
import { constructorReducer } from './burgerConstructor';
import { ingredientReducer } from './ingredient';
import { orderNumberReducer } from './order';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  ingredients: getIngredientsReducer,
  addedIngredients: constructorReducer,
  ingredient: ingredientReducer,
  order: orderNumberReducer,
  user: authReducer,
});
