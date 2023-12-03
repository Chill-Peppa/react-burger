// import { api } from '../../utils/api';
// import { AppDispatch, AppThunk } from '../types';
import {
  IWsConnectionFeedStart,
  IWsConnectionFeedSuccess,
  IWsConnectionFeedError,
  IWsConnectionFeedClosed,
  IWsConnectionFeedGetOrder,
  IWsConnectionFeedGetOrderType,
} from '../types/feedTypes';

export const WS_CONNECTION_FEED_START: 'WS_CONNECTION_FEED_START' =
  'WS_CONNECTION_FEED_START';
export const WS_CONNECTION_FEED_SUCCESS: 'WS_CONNECTION_FEED_SUCCESS' =
  'WS_CONNECTION_FEED_SUCCESS';
export const WS_CONNECTION_FEED_ERROR: 'WS_CONNECTION_FEED_ERROR' =
  'WS_CONNECTION_FEED_ERROR';
export const WS_CONNECTION_FEED_CLOSED: 'WS_CONNECTION_FEED_CLOSED' =
  'WS_CONNECTION_FEED_CLOSED';
export const WS_CONNECTION_FEED_GET_ORDERS: 'WS_CONNECTION_FEED_GET_ORDERS' =
  'WS_CONNECTION_FEED_GET_ORDERS';

// action creators
export const wsConnectionFeedStart = (): IWsConnectionFeedStart => {
  return { type: WS_CONNECTION_FEED_START };
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
