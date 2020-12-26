import { CREATE_MESSAGE } from '../actions/messages_actions';

const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case CREATE_MESSAGE:
      return action.message;
    default:
      return oldState;
  }
}

export default messagesReducer;