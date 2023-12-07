import {
  WS_CONNECTION_FEED_START,
  WS_CONNECTION_FEED_SUCCESS,
  WS_CONNECTION_FEED_CLOSED,
  WS_CONNECTION_FEED_GET_ORDERS,
  WS_AUTH_START,
  WS_AUTH_CLOSED,
} from '../actions/feed';

import { TWSState, TWSActions, TWSAuthActions } from '../types/feedTypes';

const initialState: TWSState = {
  wsConnected: false,
  success: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const wsReducer = (
  state = initialState,
  action: TWSActions | TWSAuthActions,
) => {
  switch (action.type) {
    case WS_CONNECTION_FEED_START:
      return { ...state, wsConnected: true };
    case WS_CONNECTION_FEED_SUCCESS:
      return { ...state, wsConnected: true };
    case WS_CONNECTION_FEED_CLOSED:
      return { ...state, wsConnected: false };
    case WS_CONNECTION_FEED_GET_ORDERS:
      return { ...state, orders: [...action.parsedOrders.orders] };
    case WS_AUTH_START:
      return { ...state, wsConnected: true };
    case WS_AUTH_CLOSED:
      return { ...state, wsConnected: false };
  }
};
