import { IOrder } from '../../types/ingredientsTypes';
import {
  WS_CONNECTION_FEED_START,
  WS_CONNECTION_FEED_SUCCESS,
  WS_CONNECTION_FEED_ERROR,
  WS_CONNECTION_FEED_CLOSED,
  WS_CONNECTION_FEED_GET_ORDERS,
  WS_AUTH_START,
  WS_AUTH_CLOSED,
} from '../actions/feed';

export interface IWsConnectionFeedStart {
  readonly type: typeof WS_CONNECTION_FEED_START;
  readonly wsUrl: string;
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

export interface IWsAuthStart {
  readonly type: typeof WS_AUTH_START;
  readonly wsUrl: string;
}

export interface IWsAuthClosed {
  readonly type: typeof WS_AUTH_CLOSED;
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

/*-------- Для стора --------*/
export type TWSActionsTypesStore = {
  wsConnectionStart: typeof WS_CONNECTION_FEED_START;
  wsConnectionSuccess: typeof WS_CONNECTION_FEED_SUCCESS;
  wsConnectionError: typeof WS_CONNECTION_FEED_ERROR;
  wsConnectionClosed: typeof WS_CONNECTION_FEED_CLOSED;
  wsGetOrders: typeof WS_CONNECTION_FEED_GET_ORDERS;
};

export type TWSActionsAuthTypeStore = {
  wsConnectionStart: typeof WS_AUTH_START;
  wsConnectionSuccess: typeof WS_CONNECTION_FEED_SUCCESS;
  wsConnectionError: typeof WS_CONNECTION_FEED_ERROR;
  wsConnectionClosed: typeof WS_AUTH_CLOSED;
  wsGetOrders: typeof WS_CONNECTION_FEED_GET_ORDERS;
};

/*--------- Для редьюсеров ---------*/
export type TWSActions =
  | IWsConnectionFeedStart
  | IWsConnectionFeedSuccess
  | IWsConnectionFeedError
  | IWsConnectionFeedClosed
  | IWsConnectionFeedGetOrder;

export type TWSAuthActions =
  | IWsAuthStart
  | IWsConnectionFeedSuccess
  | IWsConnectionFeedError
  | IWsAuthClosed;
