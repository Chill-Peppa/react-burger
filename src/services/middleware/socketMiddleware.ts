import type { Middleware, MiddlewareAPI } from 'redux';

import type { TApplicationActions, AppDispatch, RootState } from '../types';
import { TWSActionsTypesStore } from '../types/feedTypes';

export const socketMiddleware = (
  wsUrl: string,
  wsActions: TWSActionsTypesStore,
): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TApplicationActions) => {
      const { dispatch, getState } = store;
      const { wsConnectionStart } = wsActions;

      const { type } = action;

      if (type === wsConnectionStart) {
        socket = new WebSocket(wsUrl + '/all');
      }

      if (socket) {
      }
    };
  };
};
