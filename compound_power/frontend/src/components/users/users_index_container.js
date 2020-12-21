import { connect } from 'react-redux';
import UsersIndex from './users_index';

import {
  fetchAllUsers,
  deleteUser
} from '../../actions/users_actions';

const mSTP = (state) => ({
  users: Object.values(state.entities.users),
});

const mDTP = (dispatch) => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  deleteUser: (userId) => dispatch(deleteUser(userId))
});

export default connect(mSTP, mDTP)(UsersIndex);