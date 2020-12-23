import { GET_ERRORS } from '../actions/users_actions';

const userErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case GET_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
}

export default userErrorsReducer;