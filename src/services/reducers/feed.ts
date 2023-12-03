import {
  WS_CONNECTION_FEED_START,
  WS_CONNECTION_FEED_SUCCESS,
  WS_CONNECTION_FEED_CLOSED,
  WS_CONNECTION_FEED_GET_ORDERS,
} from '../actions/feed';

import { TWSState, TWSActions } from '../types/feedTypes';

const initialState: TWSState = {
  wsConnected: false,
  success: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const wsReducer = (state = initialState, action: TWSActions) => {
  switch (action.type) {
    case WS_CONNECTION_FEED_START:
      return { ...state, wsConnected: true };
    case WS_CONNECTION_FEED_SUCCESS:
      return { ...state, wsConnected: true };
    case WS_CONNECTION_FEED_CLOSED:
      return { ...state, wsConnected: false };
    case WS_CONNECTION_FEED_GET_ORDERS:
      return { ...state, orders: [...action.parsedOrders.orders] };
  }
};
