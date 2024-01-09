import { api } from '../../utils/api';
import { AppDispatch, AppThunk } from '../types';

export const GET_SELECTED_ORDER: 'GET_SELECTED_ORDER' = 'GET_SELECTED_ORDER';
export const GET_SELECTED_ORDER_SUCCESS: 'GET_SELECTED_ORDER_SUCCESS' =
  'GET_SELECTED_ORDER_SUCCESS';
export const GET_SELECTED_ORDER_FAILED: 'GET_SELECTED_ORDER_FAILED' =
  'GET_SELECTED_ORDER_FAILED';

export const getOrder: AppThunk =
  (orderNumber: string) => (dispatch: AppDispatch) => {
    dispatch({ type: GET_SELECTED_ORDER });

    api
      .getOrder(orderNumber)
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type: GET_SELECTED_ORDER_SUCCESS,
            order: res.orders[0],
          });
        }, 1000);
      })
      .catch((err) => {
        dispatch({
          type: GET_SELECTED_ORDER_FAILED,
        });
      });
  };
