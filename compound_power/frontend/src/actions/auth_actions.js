import axios from 'axios';

export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const GET_AUTH_ERROR_MESSAGES = 'GET_AUTH_ERROR_MESSAGES';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

const userLoading = () => ({
  type: USER_LOADING
});

const userLoaded = (userData) => ({
  type: USER_LOADED,
  userData
})

const authError = () => ({
  type: AUTH_ERROR
});

const getAuthErrorMessages = (errors) => ({
  type: GET_AUTH_ERROR_MESSAGES,
  errors
});

const clearUserErrors = () => ({
  type: CLEAR_USER_ERRORS
})

const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  userData
});

const loginFail = () => ({
  type: LOGIN_FAIL
})

// CHECK TOKEN AND LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch(userLoading());
  // Get token from state
  const token = getState().auth.token;
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  axios.get('/api/auth/user', config)
    .then(result => dispatch(userLoaded(result.data)))
    .catch(error => {
      // make a toast message for user - sent to auth_errors_reducer.js
      dispatch(getAuthErrorMessages(error.response.data));
      // changes state of auth reducer
      dispatch(authError());
  })
}

// LOGIN USER
export const login = (username, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Request Body
  const body = JSON.stringify({ username, password });

  axios.post('/api/auth/login', body, config)
    .then(result => {
      dispatch(clearUserErrors());
      dispatch(loginSuccess(result.data));
    })
    .catch(error => {
      // make a toast message for user - sent to auth_errors_reducer.js
      dispatch(getAuthErrorMessages(error.response.data));
      // changes state of auth reducer
      dispatch(loginFail());
  })
}