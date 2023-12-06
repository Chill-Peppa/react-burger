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
  wsActions: TWSActionsTypesStore,
): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    let wsUrl = '';

    return (next) => (action: TApplicationActions) => {
      const { dispatch } = store;
      const { wsConnectionStart, wsConnectionClosed } = wsActions;

      const { type } = action;

      if (type === wsConnectionStart) {
        wsUrl = action.wsUrl;
        console.log(wsUrl);
        socket = new WebSocket(wsUrl);
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
          console.log('Данные', parsedOrders);
          dispatch(wsConnectionFeedGetOrders(parsedOrders));
        };

        //на закрытие соединения
        socket.onclose = (event) => {
          dispatch(wsConnectionFeedClosed());
          console.log(`Соединение закрыто с кодом -  ${event.code}`);
        };
      }

      if (type === wsConnectionClosed) {
        socket?.close(1000, 'Close Socket');
        console.log('соединение закрыто');
      }

      next(action);
    };
  };
};
