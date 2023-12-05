import type { Middleware, MiddlewareAPI } from 'redux';

import type { TApplicationActions, AppDispatch, RootState } from '../types';
import {
  wsConnectionFeedSuccess,
  wsConnectionFeedError,
  wsConnectionFeedGetOrders,
  wsConnectionFeedClosed,
} from '../actions/feed';
import { TWSActionsTypesStore } from '../types/feedTypes';

export const socketMiddleware = (
  wsUrl: string,
  wsActions: TWSActionsTypesStore,
): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TApplicationActions) => {
      const { dispatch, getState } = store;
      const { wsConnectionStart, wsConnectionClosed } = wsActions;

      const { type } = action;

      if (type === wsConnectionStart) {
        socket = new WebSocket(wsUrl + '/all');
      }

      if (socket) {
        //открытие сокета
        socket.onopen = (event) => {
          console.log('Соединение установлено');
          dispatch(wsConnectionFeedSuccess());
        };

        //ошибка с соединением сервера
        socket.onerror = (event) => {
          console.log('ошибка при соединении');
          dispatch(wsConnectionFeedError());
        };

        //получение всех заказов с сервера
        socket.onmessage = (event) => {
          const { data } = event;
          const parsedOrders = JSON.parse(data);
          console.log(parsedOrders);
          dispatch(wsConnectionFeedGetOrders(parsedOrders));
        };

        //на закрытие соединения
        socket.onclose = (event) => {
          dispatch(wsConnectionFeedClosed());
          console.log('соединение закрыто');
        };
      }

      if (type === wsConnectionClosed) {
        socket?.close(1000, 'Close Socket');
        // dispatch(wsConnectionFeedClosed());
        console.log('соединение закрыто');
      }
      next(action);
    };
  };
};
