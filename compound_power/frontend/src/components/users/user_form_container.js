import { connect } from 'react-redux';
import UserForm from './user_form';

import {
  addUser
} from '../../actions/users_actions'

const mSTP = (state) => ({

});

const mDTP = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
});

export default connect(mSTP, mDTP)(UserForm);