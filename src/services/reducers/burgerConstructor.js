import {
  ADD_BUN_INGREDIENT,
  ADD_MAIN_INGREDIENT,
  //DELETE_MAIN_INGREDIENT,
} from '../actions/burgerConstructor';

//исходное значение ингредиентов в конструкторе
const initialState = {
  bunIngredientsData: [],
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
        mainIngredientsData: action.main,
      };
    }
    default:
      return state;
  }
};
