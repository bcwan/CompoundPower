import { USER_LOADED, USER_LOADING, AUTH_ERROR } from '../actions/auth_actions';
// AUTH_ERROR is in auth_error_reducer.js

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

const authReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case USER_LOADED:
      return {
        ...nextState,
        isAuthenticated: true,
        isLoading: false,
        user: action.user
      }
    case USER_LOADING:
      return {
        ...nextState,
        isLoading: true
      }
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...nextState,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      }
    default:
      return oldState;
  }
}

export default authReducer