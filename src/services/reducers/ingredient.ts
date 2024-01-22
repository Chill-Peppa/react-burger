import { OPEN_INGREDIENT, CLOSE_INGREDIENT } from '../actions/ingredient';
import { TIngredientState, TIngredientActions } from '../types/ingredientTypes';

//исходное значение текущего просматриваемого ингредиента
export const initialState: TIngredientState = {
  selectedIngredient: null,
};

export const ingredientReducer = (
  state = initialState,
  action: TIngredientActions,
) => {
  switch (action.type) {
    case OPEN_INGREDIENT:
      return {
        ...state,
        selectedIngredient: action.ingredient,
      };
    case CLOSE_INGREDIENT:
      return {
        ...state,
        selectedIngredient: action.selectedIngredient,
      };
    default:
      return state;
  }
};
