import { api } from '../../utils/api';

export const GET_ORDER_NUMBER = 'GET_ORDER_NUMBER';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';

//асинхронный экшен (thunk)
export function getOrderNumber(id) {
  return function (dispatch) {
    dispatch({ type: GET_ORDER_NUMBER });

    api
      .sendOrder(id)
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type: GET_ORDER_NUMBER_SUCCESS,
            newOrderNumber: res.order.number,
          });
        }, 1000);
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_NUMBER_FAILED,
        });
      });
  };
}
