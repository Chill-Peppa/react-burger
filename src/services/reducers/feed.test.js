import { initialState, wsReducer } from './feed';

import {
  WS_CONNECTION_FEED_START,
  WS_CONNECTION_FEED_END,
  WS_CONNECTION_FEED_SUCCESS,
  WS_CONNECTION_FEED_CLOSED,
  WS_CONNECTION_FEED_GET_ORDERS,
  WS_AUTH_START,
  WS_AUTH_CLOSED,
} from '../actions/feed';

const mockOrders = {
  success: true,
  orders: [
    {
      ingredients: ['test', 'test'],
      _id: 'test',
      status: 'test',
      number: 12345,
      createdAt: 'test',
      updatedAt: 'test',
      name: 'test',
      owner: 'test',
      __v: 12345,
    },
  ],
  total: 12345,
  totalToday: 12345,
};

const wsUrl = 'test';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    const testData = wsReducer(undefined, {});
    const expected = { ...initialState };

    expect(testData).toEqual(expected);
  });

  it('should handle WS_CONNECTION_FEED_START', () => {
    const testData = wsReducer(initialState, {
      type: WS_CONNECTION_FEED_START,
      wsUrl: wsUrl,
    });
    const expected = {
      ...initialState,
      wsConnected: true,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle WS_CONNECTION_FEED_END', () => {
    const testData = wsReducer(initialState, { type: WS_CONNECTION_FEED_END });
    const expected = {
      ...initialState,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle WS_CONNECTION_FEED_SUCCESS', () => {
    const testData = wsReducer(initialState, {
      type: WS_CONNECTION_FEED_SUCCESS,
    });
    const expected = {
      ...initialState,
      wsConnected: true,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle WS_CONNECTION_FEED_CLOSED', () => {
    const testData = wsReducer(initialState, {
      type: WS_CONNECTION_FEED_CLOSED,
    });
    const expected = {
      ...initialState,
      wsConnected: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle WS_CONNECTION_FEED_GET_ORDERS', () => {
    const testData = wsReducer(initialState, {
      type: WS_CONNECTION_FEED_GET_ORDERS,
      parsedOrders: mockOrders,
    });
    const expected = {
      ...initialState,
      orders: mockOrders.orders,
      total: mockOrders.total,
      totalToday: mockOrders.totalToday,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle WS_AUTH_START', () => {
    const testData = wsReducer(initialState, {
      type: WS_AUTH_START,
      wsUrl: wsUrl,
    });
    const expected = {
      ...initialState,
      wsConnected: true,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle WS_AUTH_CLOSED', () => {
    const testData = wsReducer(initialState, {
      type: WS_AUTH_CLOSED,
    });
    const expected = {
      ...initialState,
      wsConnected: false,
    };

    expect(testData).toEqual(expected);
  });
});
