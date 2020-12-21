import { GET_ALL_USERS, GET_USER } from '../actions/users_actions';

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users;
    case GET_USER:
      nextState[action.user.id] = action.user;
      return nextState;
    default:
      return oldState;
  }
}

export default UserReducer;