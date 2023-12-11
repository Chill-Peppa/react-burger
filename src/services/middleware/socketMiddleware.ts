import type { Middleware, MiddlewareAPI } from 'redux';

import type { TApplicationActions, AppDispatch, RootState } from '../types';
import { wsAuthStart } from '../actions/feed';
import {
  TWSActionsTypesStore,
  TWSActionsAuthTypeStore,
} from '../types/feedTypes';

export const socketMiddleware = (
  wsActions: TWSActionsTypesStore | TWSActionsAuthTypeStore,
): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    let wsUrl = '';
    let isConnected = false;
    let reconnectTimer = 0;

    return (next) => (action: TApplicationActions) => {
      const { dispatch } = store;
      const {
        wsConnectionStart,
        wsConnectionClosed,
        wsConnectionSuccess,
        wsConnectionError,
        wsGetOrders,
      } = wsActions;

      const { type } = action;

      if (type === wsConnectionStart) {
        wsUrl = action.wsUrl;
        isConnected = true;
        socket = new WebSocket(wsUrl);
      }

      if (socket) {
        //открытие сокета
        socket.onopen = (event) => {
          console.log('Соединение установлено');
          dispatch({ type: wsConnectionSuccess });
        };

        //ошибка с соединением сервера
        socket.onerror = (event) => {
          console.log('ошибка при соединении');
          dispatch({ type: wsConnectionError });
        };

        //получение всех заказов с сервера
        socket.onmessage = (event) => {
          const { data } = event;
          const parsedOrders = JSON.parse(data);
          if (parsedOrders.message === 'Invalid or missing token') {
            console.log('1', parsedOrders);
            reconnectTimer = window.setTimeout(() => {
              dispatch({ type: wsConnectionStart, wsUrl });
              console.log('wsConnectionStart', wsUrl);
            }, 3000);
          } else {
            console.log('Данные', parsedOrders);
            dispatch({ type: wsGetOrders, parsedOrders });
          }
        };

        //на закрытие соединения
        socket.onclose = (event) => {
          dispatch({ type: wsConnectionClosed });
          console.log(`Соединение закрыто с кодом: ${event.code}`);

          if (isConnected) {
            reconnectTimer = window.setTimeout(() => {
              dispatch(wsAuthStart(wsUrl));
            }, 3000);
          }
        };
      }

      if (type === wsConnectionClosed) {
        clearTimeout(reconnectTimer);
        socket?.close(1000, 'Close Socket');
        console.log('соединение закрыто');
        isConnected = false;
        reconnectTimer = 0;
      }

      next(action);
    };
  };
};
