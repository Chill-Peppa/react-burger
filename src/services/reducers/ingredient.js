import { OPEN_INGREDIENT, CLOSE_INGREDIENT } from '../actions/ingredient';

//исходное значение текущего просматриваемого ингредиента
const initialState = {
  selectedIngredient: null,
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT:
      return {
        ...state,
        selectedIngredient: action.ingredient,
      };
    case CLOSE_INGREDIENT:
      return {
        ...state,
        selectedIngredient: action.ingredient,
      };
    default:
      return state;
  }
};
