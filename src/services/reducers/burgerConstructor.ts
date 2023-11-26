import {
  ADD_BUN_INGREDIENT,
  ADD_MAIN_INGREDIENT,
  DELETE_MAIN_INGREDIENT,
  SORT_INGREDIENTS,
} from '../actions/burgerConstructor';
import { IIngredient } from '../../types/ingredientsTypes';

import {
  TBurgerConstructorState,
  TBurgerConstructorActions,
} from '../types/burgerConstructorTypes';

//исходное значение ингредиентов в конструкторе
const initialState: TBurgerConstructorState = {
  bunIngredientsData: {} as IIngredient,
  mainIngredientsData: [],
};

export const constructorReducer = (
  state = initialState,
  action: TBurgerConstructorActions,
) => {
  switch (action.type) {
    case ADD_BUN_INGREDIENT: {
      return {
        ...state,
        bunIngredientsData: action.bun,
      };
    }
    case ADD_MAIN_INGREDIENT: {
      return {
        ...state,
        mainIngredientsData: [...state.mainIngredientsData, action.main],
      };
    }
    case DELETE_MAIN_INGREDIENT: {
      return {
        ...state,
        mainIngredientsData: [...state.mainIngredientsData].filter(
          (item) => item.dropId !== action.id,
        ),
      };
    }
    case SORT_INGREDIENTS: {
      return {
        ...state,
        mainIngredientsData: [...action.sortMain],
      };
    }
    default:
      return state;
  }
};
