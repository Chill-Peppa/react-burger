import {
  GET_SELECTED_ORDER,
  GET_SELECTED_ORDER_SUCCESS,
  GET_SELECTED_ORDER_FAILED,
} from '../actions/selectedOrder';

import {
  TSelectedOrderActions,
  TSelectedOrderState,
} from '../types/selectedOrderTypes';
import { IOrder } from '../../types/ingredientsTypes';

export const initialState: TSelectedOrderState = {
  order: {} as IOrder,
  orderNumberRequest: false,
  orderNumberFailed: false,
};

export const selectedOrderReducer = (
  state = initialState,
  action: TSelectedOrderActions,
) => {
  switch (action.type) {
    case GET_SELECTED_ORDER:
      return {
        ...state,
        orderNumberRequest: true,
        orderNumberFailed: false,
      };
    case GET_SELECTED_ORDER_SUCCESS:
      return {
        ...state,
        order: action.order,
        orderNumberRequest: false,
      };
    case GET_SELECTED_ORDER_FAILED:
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
