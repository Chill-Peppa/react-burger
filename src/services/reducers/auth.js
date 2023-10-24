import {
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILED,
} from '../actions/auth';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  registerRequest: false,
  registerFailed: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REGISTER: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      };
    }
    case AUTH_REGISTER_SUCCESS: {
      return {
        ...state,
        user: { ...action.user },
        ingredientsRequest: false,
      };
    }
    case AUTH_REGISTER_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
