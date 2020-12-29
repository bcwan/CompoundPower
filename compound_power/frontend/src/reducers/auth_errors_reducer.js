import { GET_AUTH_ERROR_MESSAGES, CLEAR_USER_ERRORS } from '../actions/auth_actions';

const authErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case GET_AUTH_ERROR_MESSAGES:
      return action.errors;
    case CLEAR_USER_ERRORS:
      return {};
    default:
      return oldState;
  }
}

export default authErrorsReducer;