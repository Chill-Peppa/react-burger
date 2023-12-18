import { combineReducers } from 'redux';
import { getIngredientsReducer } from './burgerIngredients';
import { constructorReducer } from './burgerConstructor';
import { ingredientReducer } from './ingredient';
import { orderNumberReducer } from './order';
import { authReducer } from './auth';
import { wsReducer } from './feed';
import { selectedOrderReducer } from './selectedOrder';

export const rootReducer = combineReducers({
  ingredients: getIngredientsReducer,
  addedIngredients: constructorReducer,
  ingredient: ingredientReducer,
  order: orderNumberReducer,
  user: authReducer,
  ws: wsReducer,
  selectedOrder: selectedOrderReducer,
});
