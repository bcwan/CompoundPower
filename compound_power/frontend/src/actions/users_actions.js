import axios from 'axios';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER = 'GET_USER';

const getAllUsers = users => ({
  type: GET_ALL_USERS,
  users
});

const getUser = user => ({
  type: GET_USER,
  user
});

// GET USERS
export const fetchAllUsers = () => dispatch => {
  axios.get('/api/users/')
    .then(questions => {
      dispatch(getAllUsers(questions))
    })
    .catch(error => console.log(error));
}