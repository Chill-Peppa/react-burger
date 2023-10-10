import Api from '../../utils/api';
import { BASE_URL } from '../../utils/constants';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

const api = new Api({
  url: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//асинхронный экшен (thunk)
export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS,
    });

    // Запрашиваем данные у сервера
    api
      .getIngredientsInfo()
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            ingredients: res.data,
          });
        }, 1000);
      })
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      });
  };
}
