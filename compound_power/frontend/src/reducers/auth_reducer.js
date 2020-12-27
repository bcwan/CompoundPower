//import { CREATE_MESSAGE } from '../actions/messages_actions';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

const authReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    default:
      return oldState;
  }
}

export default authReducer