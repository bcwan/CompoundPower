import { GET_ALL_USERS, GET_USER, REMOVE_USER } from '../actions/users_actions';

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case GET_ALL_USERS:
      action.users.data.forEach((user) => {
        nextState[user.id] = user;
      });
      return nextState;
    case GET_USER:
      nextState[action.user.data.id] = action.user.data;
      return nextState;
    case REMOVE_USER:
      delete nextState[action.userId];
      return nextState;
    default:
      return oldState;
  }
}

export default UserReducer;