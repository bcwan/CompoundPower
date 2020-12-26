import { CREATE_MESSAGE, GET_ERRORS } from '../actions/messages_actions';

const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case CREATE_MESSAGE:
      return action.message;
    case GET_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
}

export default messagesReducer;