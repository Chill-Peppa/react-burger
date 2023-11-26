import {
  GET_ORDER_NUMBER,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER_FAILED,
} from '../actions/order';

export type TOrderState = {
  newOrderNumber: string | null;
  orderNumberRequest: boolean;
  orderNumberFailed: boolean;
};

export interface IGetOrderNumber {
  readonly type: typeof GET_ORDER_NUMBER;
}

export interface IGetOrderNumberSuccess {
  readonly type: typeof GET_ORDER_NUMBER_SUCCESS;
  readonly newOrderNumber: string;
}

export interface IGetOrderNumberFailed {
  readonly type: typeof GET_ORDER_NUMBER_FAILED;
}

export type TOrderActions =
  | IGetOrderNumber
  | IGetOrderNumberSuccess
  | IGetOrderNumberFailed;
