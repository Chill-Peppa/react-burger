import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import { socketMiddleware } from './middleware/socketMiddleware';
import thunk from 'redux-thunk';
import { wsUrl } from '../utils/constants';
import {
  WS_CONNECTION_FEED_START,
  WS_CONNECTION_FEED_SUCCESS,
  WS_CONNECTION_FEED_ERROR,
  WS_CONNECTION_FEED_CLOSED,
  WS_CONNECTION_FEED_GET_ORDERS,
} from './actions/feed';
import { TWSActionsTypesStore } from './types/feedTypes';

export const wsActions: TWSActionsTypesStore = {
  wsConnectionStart: WS_CONNECTION_FEED_START,
  wsConnectionSuccess: WS_CONNECTION_FEED_SUCCESS,
  wsConnectionError: WS_CONNECTION_FEED_ERROR,
  wsConnectionClosed: WS_CONNECTION_FEED_CLOSED,
  wsGetAllOrders: WS_CONNECTION_FEED_GET_ORDERS,
};

//Для знакомства кода с расширением Redux Devtools
const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions)),
);

export const store = createStore(rootReducer, enhancer);
