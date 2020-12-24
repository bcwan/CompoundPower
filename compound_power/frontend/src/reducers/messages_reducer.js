import { GET_MESSAGES, CREATE_MESSAGE } from '../actions/messages_actions';

const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case GET_MESSAGES:
      return nextState;
    case CREATE_MESSAGE:
      return nextState;
    default:
      return oldState;
  }
}

export default messagesReducer;