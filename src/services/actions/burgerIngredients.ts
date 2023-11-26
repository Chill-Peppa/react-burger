import { api } from '../../utils/api';
import { AppDispatch, AppThunk } from '../types';

export const GET_INGREDIENTS: 'GET_INGREDIENTS' = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' =
  'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' =
  'GET_INGREDIENTS_FAILED';

//асинхронный экшен (thunk)
export const getIngredients: AppThunk = () => (dispatch: AppDispatch) => {
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
