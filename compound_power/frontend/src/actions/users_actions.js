import axios from 'axios';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER = 'GET_USER';
export const REMOVE_USER = 'REMOVE_USER'
export const ADD_USER = 'ADD_USER';

const getAllUsers = users => ({
  type: GET_ALL_USERS,
  users
});

const getUser = user => ({
  type: GET_USER,
  user
});

const postUser = user => ({
  type: ADD_USER,
  user
});

const removeUser = userId => ({
  type: REMOVE_USER,
  userId
})

// GET USERS
export const fetchAllUsers = () => dispatch => {
  axios.get('/api/users/')
    .then(users => {
      dispatch(getAllUsers(users))
    })
    .catch(error => console.log(error));
}

// DELETE USER
export const deleteUser = (id) => dispatch => {
  axios.delete(`/api/users/${id}/`)
    .then(() => {
      dispatch(removeUser(id))
    })
    .catch(error => console.log(error));
}

// POST USER
export const addUser = (user) => dispatch => {
  axios.post('/api/users/', user)
    .then(user => {
      dispatch(postUser(user))
    })
    .catch(error => console.log(error));
}