export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const RETURN_ERRORS = 'RETURN_ERRORS'

// CREATE MESSAGE
export const createMessage = message => ({
  type: CREATE_MESSAGE,
  message
});

// RETURN ERRORS
export const returnErrors = (message, status) => ({
  type: RETURN_ERRORS,
  errors: {
    message, status
  }
});
