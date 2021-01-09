import { 
  GET_AUTH_ERROR_MESSAGES, 
  CLEAR_USER_ERRORS, 
  CREATE_AUTH_ERROR_MESSAGE } 
from '../actions/auth_actions';

// Reducer for Authentication Errors
const authErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case GET_AUTH_ERROR_MESSAGES:
      return action.errors;
    case CLEAR_USER_ERRORS:
      return {};
    case CREATE_AUTH_ERROR_MESSAGE:
      return action.message;
    default:
      return oldState;
  }
}

export default authErrorsReducer;