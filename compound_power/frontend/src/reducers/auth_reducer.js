import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from '../actions/auth_actions';

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
        user: action.userData
      }
    case USER_LOADING:
      return {
        ...nextState,
        isLoading: true
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.userData.token);
      return {
        ...nextState,
        ...action.userData,
        isAuthenticated: true,
        isLoading: false
      }
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
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