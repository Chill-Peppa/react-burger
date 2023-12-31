import {
  IWsConnectionFeedStart,
  IWsConnectionFeedEnd,
  IWsConnectionFeedSuccess,
  IWsConnectionFeedError,
  IWsConnectionFeedClosed,
  IWsConnectionFeedGetOrder,
  IWsConnectionFeedGetOrderType,
  IWsAuthStart,
  IWsAuthClosed,
} from '../types/feedTypes';

/* Получение всех заказов */
export const WS_CONNECTION_FEED_START: 'WS_CONNECTION_FEED_START' =
  'WS_CONNECTION_FEED_START';
export const WS_CONNECTION_FEED_END: 'WS_CONNECTION_FEED_END' =
  'WS_CONNECTION_FEED_END';

export const WS_CONNECTION_FEED_SUCCESS: 'WS_CONNECTION_FEED_SUCCESS' =
  'WS_CONNECTION_FEED_SUCCESS';
export const WS_CONNECTION_FEED_ERROR: 'WS_CONNECTION_FEED_ERROR' =
  'WS_CONNECTION_FEED_ERROR';
export const WS_CONNECTION_FEED_CLOSED: 'WS_CONNECTION_FEED_CLOSED' =
  'WS_CONNECTION_FEED_CLOSED';
export const WS_CONNECTION_FEED_GET_ORDERS: 'WS_CONNECTION_FEED_GET_ORDERS' =
  'WS_CONNECTION_FEED_GET_ORDERS';

/* Тут сокеты с авторизацией */
export const WS_AUTH_START: 'WS_AUTH_START' = 'WS_AUTH_START';
export const WS_AUTH_CLOSED: 'WS_AUTH_CLOSED' = 'WS_AUTH_CLOSED';

// action creators 1
export const wsConnectionFeedStart = (
  wsUrl: string,
): IWsConnectionFeedStart => {
  return { type: WS_CONNECTION_FEED_START, wsUrl };
};

export const wsConnectionFeedEnd = (): IWsConnectionFeedEnd => {
  return { type: WS_CONNECTION_FEED_END };
};

export const wsConnectionFeedSuccess = (): IWsConnectionFeedSuccess => {
  return { type: WS_CONNECTION_FEED_SUCCESS };
};

export const wsConnectionFeedError = (): IWsConnectionFeedError => {
  return { type: WS_CONNECTION_FEED_ERROR };
};

export const wsConnectionFeedClosed = (): IWsConnectionFeedClosed => {
  return { type: WS_CONNECTION_FEED_CLOSED };
};

export const wsConnectionFeedGetOrders = (
  parsedOrders: IWsConnectionFeedGetOrderType,
): IWsConnectionFeedGetOrder => {
  return { type: WS_CONNECTION_FEED_GET_ORDERS, parsedOrders };
};

// action creators 2

export const wsAuthStart = (wsUrl: string): IWsAuthStart => {
  return { type: WS_AUTH_START, wsUrl };
};

export const wsAuthClosed = (): IWsAuthClosed => {
  return { type: WS_AUTH_CLOSED };
};
