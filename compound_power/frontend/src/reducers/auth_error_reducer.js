import { AUTH_ERROR } from '../actions/auth_actions';

const authErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    // case AUTH_ERROR:
    //   return action.errors;
    default:
      return oldState;
  }
}

export default authErrorsReducer;