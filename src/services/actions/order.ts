import { api } from '../../utils/api';
import { AppDispatch, AppThunk } from '../types';

export const GET_ORDER_NUMBER: 'GET_ORDER_NUMBER' = 'GET_ORDER_NUMBER';
export const GET_ORDER_NUMBER_SUCCESS: 'GET_ORDER_NUMBER_SUCCESS' =
  'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED: 'GET_ORDER_NUMBER_FAILED' =
  'GET_ORDER_NUMBER_FAILED';

//асинхронный экшен (thunk)
export const getOrderNumber: AppThunk =
  (id: string[]) => (dispatch: AppDispatch) => {
    dispatch({ type: GET_ORDER_NUMBER });

    api
      .sendOrder(id)
      .then((res) => {
        dispatch({
          type: GET_ORDER_NUMBER_SUCCESS,
          newOrderNumber: res.order.number,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_NUMBER_FAILED,
        });
      });
  };
