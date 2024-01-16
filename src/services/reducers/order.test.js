import { initialState, orderNumberReducer } from './order';

import {
  GET_ORDER_NUMBER,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER_FAILED,
} from '../actions/order';

const number = 12345;

describe('auth reducer', () => {
  it('should return the initial state', () => {
    const testData = orderNumberReducer(undefined, {});
    const expected = { ...initialState };

    expect(testData).toEqual(expected);
  });

  it('should handle GET_ORDER_NUMBER', () => {
    const testData = orderNumberReducer(initialState, {
      type: GET_ORDER_NUMBER,
    });
    const expected = {
      ...initialState,
      orderNumberRequest: true,
      orderNumberFailed: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle GET_ORDER_NUMBER_SUCCESS', () => {
    const testData = orderNumberReducer(initialState, {
      type: GET_ORDER_NUMBER_SUCCESS,
      newOrderNumber: number,
    });
    const expected = {
      ...initialState,
      newOrderNumber: number,
      orderNumberRequest: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle GET_ORDER_NUMBER_FAILED', () => {
    const testData = orderNumberReducer(initialState, {
      type: GET_ORDER_NUMBER_FAILED,
    });
    const expected = {
      ...initialState,
      orderNumberFailed: true,
      orderNumberRequest: false,
    };

    expect(testData).toEqual(expected);
  });
});
