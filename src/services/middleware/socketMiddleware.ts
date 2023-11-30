// import type { Middleware, MiddlewareAPI } from 'redux';

// import type { TApplicationActions, AppDispatch, RootState } from '../types';

// export const socketMiddleware = (wsUrl: string): Middleware => {
//   return ((store: MiddlewareAPI<AppDispatch, RootState>) => {

//     let socket: WebSocket | null = null;
//     // let url: string | undefined = '';
//     // let token: string | undefined = undefined;

//     return next => (action: TApplicationActions) => {
//         const { dispatch, getState } = store;
//       const { type } = action;

//       if (type === 'WS_CONNECTION_START') {
//         socket = new WebSocket(wsUrl);
//     }

//     if(socket) {

//     }

//     }

//   })
// };
