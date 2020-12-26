import axios from 'axios';

// TOAST FOR CUSTOMIZED MESSAGES
import { createMessage, returnErrors } from '../actions/messages_actions';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER = 'GET_USER';
export const REMOVE_USER = 'REMOVE_USER'
export const ADD_USER = 'ADD_USER';
export const GET_ERRORS = 'GET_ERRORS';

// ACTIONS
const getAllUsers = users => ({
  type: GET_ALL_USERS,
  users
});

const getUser = user => ({
  type: GET_USER,
  user
});

const addUser = user => ({
  type: ADD_USER,
  user
});

const removeUser = userId => ({
  type: REMOVE_USER,
  userId
})

// 
const getErrors = (errors) => ({
  type: GET_ERRORS,
  errors
})

// GET USERS
export const fetchAllUsers = () => dispatch => {
  axios.get('/api/users/')
    .then(users => {
      dispatch(createMessage({ loadUsers: 'Loaded all users!' }))
      dispatch(getAllUsers(users))
    })
    .catch(error => {
      let errorsArr = error.response.data;
      dispatch(getErrors(errorsArr)); 
    });
}

// DELETE USER
export const deleteUser = (id) => dispatch => {
  axios.delete(`/api/users/${id}/`)
    .then(() => {
      dispatch(createMessage({ deleteUser: 'Deleted user successfully!'}))
      dispatch(removeUser(id))
    })
    .catch(error => {
      let errorsArr = error.response.data;
      dispatch(getErrors(errorsArr)); 
    });
}

// POST USER
export const postUser = (user) => dispatch => {
  axios.post('/api/users/', user)
    .then(user => {
      dispatch(createMessage({ addUser: 'Added user successfully!'}))
      dispatch(addUser(user))
    })
    .catch(error => {
      let errorsArr = error.response.data;
      dispatch(getErrors(errorsArr)); 
    });
}