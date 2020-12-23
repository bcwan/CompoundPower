import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER = 'GET_USER';
export const REMOVE_USER = 'REMOVE_USER'
export const ADD_USER = 'ADD_USER';
export const GET_ERRORS = 'GET_ERRORS';

toast.configure();

// TOAST MESSAGES
const notifySuccess = (message) => {
  toast.success(message);
}

const notifyFailure = (message) => {
  toast.error(message);
}

const notifyDeletion = (message) => {
  toast.warning(message);
}

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
      notifySuccess('Load users!')
      dispatch(getAllUsers(users))
    })
    .catch(error => console.log(error));
}

// DELETE USER
export const deleteUser = (id) => dispatch => {
  axios.delete(`/api/users/${id}/`)
    .then(() => {
      notifyDeletion('Deleted user successfully!')
      dispatch(removeUser(id))
    })
    .catch(error => console.log(error));
}

// POST USER
export const postUser = (user) => dispatch => {
  axios.post('/api/users/', user)
    .then(user => {
      notifySuccess('Add user successfully!')
      dispatch(addUser(user))
    })
    .catch(error => {
      let errorsArr = error.response.data; 
      for (const tag in errorsArr) {
        notifyFailure(`${tag}: ${errorsArr[tag]}`);
      }
    });
}