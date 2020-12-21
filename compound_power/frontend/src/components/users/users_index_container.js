import { connect } from 'react-redux';
import UsersIndex from './users_index';

import {
  fetchAllUsers
} from '../../actions/users_actions';

const mSTP = (state) => ({
  users: Object.values()
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)(UsersIndex);