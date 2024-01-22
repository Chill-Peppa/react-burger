import {
  GET_ORDER_NUMBER,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER_FAILED,
} from '../actions/order';

import { TOrderState, TOrderActions } from '../types/orderTypes';

//исходное значение созданного заказа
export const initialState: TOrderState = {
  newOrderNumber: null,
  orderNumberRequest: false,
  orderNumberFailed: false,
};

export const orderNumberReducer = (
  state = initialState,
  action: TOrderActions,
) => {
  switch (action.type) {
    case GET_ORDER_NUMBER:
      return {
        ...state,
        orderNumberRequest: true,
        orderNumberFailed: false,
      };
    case GET_ORDER_NUMBER_SUCCESS:
      return {
        ...state,
        newOrderNumber: action.newOrderNumber,
        orderNumberRequest: false,
      };
    case GET_ORDER_NUMBER_FAILED:
      return {
        ...state,
        orderNumberFailed: true,
        orderNumberRequest: false,
      };
    default: {
      return state;
    }
  }
};
