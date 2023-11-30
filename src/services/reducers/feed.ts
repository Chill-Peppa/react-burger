import {
  WS_CONNECTION_FEED_START,
  WS_CONNECTION_FEED_SUCCESS,
  WS_CONNECTION_FEED_ERROR,
  WS_CONNECTION_FEED_CLOSED,
  WS_CONNECTION_FEED_GET_ORDERS,
} from '../actions/feed';

import { TWSState, TWSActions } from '../types/feedTypes';

const initialState: TWSState = {
  wsConnected: false,
  orders: [],
};

export const wsReducer = (state = initialState, action: TWSActions) => {
  switch (action.type) {
    case WS_CONNECTION_FEED_START:
      return { ...state, wsConnected: true };
    case WS_CONNECTION_FEED_SUCCESS:
      return { ...state, error: undefined, wsConnected: true };
    // case WS_CONNECTION_FEED_ERROR:
    //   return { ...state, error: action.payload, wsConnected: false };
    case WS_CONNECTION_FEED_CLOSED:
      return { ...state, error: undefined, wsConnected: false };
  }
};
