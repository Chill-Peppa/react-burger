import {
  GET_SELECTED_ORDER,
  GET_SELECTED_ORDER_SUCCESS,
  GET_SELECTED_ORDER_FAILED,
} from '../actions/selectedOrder';

import { IOrder } from '../../types/ingredientsTypes';

export type TSelectedOrderState = {
  order: IOrder;
  orderNumberRequest: boolean;
  orderNumberFailed: boolean;
};

export interface IGetSelectedOrderNumber {
  readonly type: typeof GET_SELECTED_ORDER;
}

export interface IGetSelectedOrderNumberSuccess {
  readonly type: typeof GET_SELECTED_ORDER_SUCCESS;
  readonly order: IOrder;
}

export interface IGetSelectedOrderNumberFailed {
  readonly type: typeof GET_SELECTED_ORDER_FAILED;
}

export type TSelectedOrderActions =
  | IGetSelectedOrderNumber
  | IGetSelectedOrderNumberSuccess
  | IGetSelectedOrderNumberFailed;
