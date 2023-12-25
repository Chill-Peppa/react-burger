import type { Middleware, MiddlewareAPI } from 'redux';

import type { TApplicationActions, AppDispatch, RootState } from '../types';
import { wsAuthStart } from '../actions/feed';
import {
  TWSActionsTypesStore,
  TWSActionsAuthTypeStore,
} from '../types/feedTypes';
import { updateToken } from '../actions/auth';

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
          dispatch({ type: wsConnectionSuccess });
        };

        //ошибка с соединением сервера
        socket.onerror = (event) => {
          dispatch({ type: wsConnectionError });
        };

        //получение всех заказов с сервера
        socket.onmessage = (event) => {
          const { data } = event;
          console.log(JSON.parse(data));
          const parsedOrders = JSON.parse(data);
          if (parsedOrders.message === 'Invalid or missing token') {
            dispatch(updateToken());
            reconnectTimer = window.setTimeout(() => {
              dispatch({ type: wsConnectionStart, wsUrl });
            }, 3000);
          } else {
            dispatch({ type: wsGetOrders, parsedOrders });
          }
        };

        //на закрытие соединения
        socket.onclose = (event) => {
          dispatch({ type: wsConnectionClosed });

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
        isConnected = false;
        reconnectTimer = 0;
      }

      next(action);
    };
  };
};
