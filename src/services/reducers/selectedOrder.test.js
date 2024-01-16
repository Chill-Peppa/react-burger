import { initialState, selectedOrderReducer } from './selectedOrder';

import {
  GET_SELECTED_ORDER,
  GET_SELECTED_ORDER_SUCCESS,
  GET_SELECTED_ORDER_FAILED,
} from '../actions/selectedOrder';

const selectedOrder = {
  ingredients: ['test1', 'test2'],
  _id: 'test',
  status: 'test',
  number: 123213,
  createdAt: 'test',
  updatedAt: 'test',
  name: 'test',
  owner: 'test',
  __v: 12234123,
};

describe('auth reducer', () => {
  it('should return the initial state', () => {
    const testData = selectedOrderReducer(undefined, {});
    const expected = { ...initialState };

    expect(testData).toEqual(expected);
  });

  it('should handle  GET_SELECTED_ORDER', () => {
    const testData = selectedOrderReducer(initialState, {
      type: GET_SELECTED_ORDER,
    });
    const expected = {
      ...initialState,
      orderNumberRequest: true,
      orderNumberFailed: false,
    };

    expect(testData).toEqual(expected);
  });

  it('GET_SELECTED_ORDER_SUCCESS', () => {
    const testData = selectedOrderReducer(initialState, {
      type: GET_SELECTED_ORDER_SUCCESS,
      order: selectedOrder,
    });
    const expected = {
      ...initialState,
      order: selectedOrder,
      orderNumberRequest: false,
    };

    expect(testData).toEqual(expected);
  });

  it('GET_SELECTED_ORDER_FAILED', () => {
    const testData = selectedOrderReducer(initialState, {
      type: GET_SELECTED_ORDER_FAILED,
    });
    const expected = {
      ...initialState,
      orderNumberFailed: true,
      orderNumberRequest: false,
    };

    expect(testData).toEqual(expected);
  });
});
