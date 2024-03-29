import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from '../actions/burgerIngredients';

import {
  TBurgerIngredientsState,
  TBurgerIngredientsActions,
} from '../types/burgerIngredientsTypes';

//исходное значение всех ингредиентов
export const initialState: TBurgerIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

//редьюсер
export const getIngredientsReducer = (
  state = initialState,
  action: TBurgerIngredientsActions,
) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        // Запрос начал выполняться
        ingredientsRequest: true,
        // Сбрасываем статус наличия ошибок от предыдущего запроса
        // на случай, если он был и завершился с ошибкой
        ingredientsFailed: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        // Запрос выполнился успешно, помещаем полученные данные в хранилище
        ingredients: action.ingredients,
        // Запрос закончил своё выполнение
        ingredientsRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        // Запрос выполнился с ошибкой,
        // выставляем соответсвующие значения в хранилище
        ingredientsFailed: true,
        // Запрос закончил своё выполнение
        ingredientsRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
