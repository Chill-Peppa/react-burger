import {
  GET_ORDER_NUMBER,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER_FAILED,
} from '../actions/order';

//исходное значение созданного заказа
const initialState = {
  newOrderNumber: null,
  orderNumberRequest: false,
  orderNumberFailed: false,
};

export const orderNumberReducer = (state = initialState, action) => {
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
