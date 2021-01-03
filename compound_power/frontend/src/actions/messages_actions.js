export const CREATE_MESSAGE = 'CREATE_MESSAGE';

// CREATE MESSAGE
export const createMessage = message => {
  return {
    type: CREATE_MESSAGE,
    message
  }
};


