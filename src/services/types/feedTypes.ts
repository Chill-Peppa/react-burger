import { IIngredient } from '../../types/ingredientsTypes';
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

//на получение надо отдельно делать. сделаю потом.

export type TWSState = {
  wsConnected: false;
  orders: IIngredient[];

  //error?: Event;
};

export type TWSActions =
  | IWsConnectionFeedStart
  | IWsConnectionFeedSuccess
  | IWsConnectionFeedError
  | IWsConnectionFeedClosed;
