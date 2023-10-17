import {
  ADD_BUN_INGREDIENT,
  ADD_MAIN_INGREDIENT,
  DELETE_MAIN_INGREDIENT,
  SORT_INGREDIENTS,
} from '../actions/burgerConstructor';

//исходное значение ингредиентов в конструкторе
const initialState = {
  bunIngredientsData: {},
  mainIngredientsData: [],
};

export const constructorReducer = (state = initialState, action) => {
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
