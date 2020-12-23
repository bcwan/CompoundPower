import { GET_ERRORS } from '../actions/users_actions';

const userErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case GET_ERRORS:
      // action.users.data.forEach((user) => {
      //   nextState[user.id] = user;
      // });
      return nextState;
    default:
      return oldState;
  }
}

export default userErrorsReducer;