export const GET_MESSAGES = 'GET_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

// GET MESSAGES
export const getMessages = messages => ({
  type: GET_MESSAGES,
  messages
});

// CREATE MESSAGE
export const createMessage = message => ({
  type: CREATE_MESSAGE,
  message
});