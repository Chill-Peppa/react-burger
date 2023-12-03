import { IOrder } from '../../types/ingredientsTypes';
import {
  WS_CONNECTION_FEED_START,
  WS_CONNECTION_FEED_SUCCESS,
  WS_CONNECTION_FEED_ERROR,
  WS_CONNECTION_FEED_CLOSED,
  WS_CONNECTION_FEED_GET_ORDERS,
} from '../actions/feed';

export interface IWsConnectionFeedStart {
  readonly type: typeof WS_CONNECTION_FEED_START;
}

export interface IWsConnectionFeedSuccess {
  readonly type: typeof WS_CONNECTION_FEED_SUCCESS;
}

export interface IWsConnectionFeedError {
  readonly type: typeof WS_CONNECTION_FEED_ERROR;
}

export interface IWsConnectionFeedClosed {
  readonly type: typeof WS_CONNECTION_FEED_CLOSED;
}

//получение ВСЕХ заказов
export interface IWsConnectionFeedGetOrder {
  readonly type: typeof WS_CONNECTION_FEED_GET_ORDERS;
  readonly parsedOrders: IWsConnectionFeedGetOrderType;
}

//стейт для редьюсера
export type TWSState = {
  wsConnected: boolean;
  success: boolean;
  orders: IOrder[];
  total: number;
  totalToday: number;
};

//для ВСЕХ заказов(ответ)
export interface IWsConnectionFeedGetOrderType {
  success: boolean;
  orders: IOrder[];
  total: number;
  totalToday: number;
}

export type TWSActionsTypesStore = {
  wsConnectionStart: typeof WS_CONNECTION_FEED_START;
  wsConnectionSuccess: typeof WS_CONNECTION_FEED_SUCCESS;
  wsConnectionError: typeof WS_CONNECTION_FEED_ERROR;
  wsConnectionClosed: typeof WS_CONNECTION_FEED_CLOSED;
  wsGetAllOrders: typeof WS_CONNECTION_FEED_GET_ORDERS;
};

export type TWSActions =
  | IWsConnectionFeedStart
  | IWsConnectionFeedSuccess
  | IWsConnectionFeedError
  | IWsConnectionFeedClosed
  | IWsConnectionFeedGetOrder;
