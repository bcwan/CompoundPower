export const GET_MESSAGES = 'GET_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

// GET MESSAGES
const getMessages = messages => ({
  type: GET_MESSAGES,
  messages
});

// CREATE MESSAGE
const createMessage = message => ({
  type: CREATE_MESSAGE,
  message
});