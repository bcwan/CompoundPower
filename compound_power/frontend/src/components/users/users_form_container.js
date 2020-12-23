import { connect } from 'react-redux';
import UsersForm from './users_form';

import {
  postUser
} from '../../actions/users_actions'

const mSTP = (state) => ({

});

const mDTP = (dispatch) => ({
  postUser: (user) => dispatch(postUser(user)),
});

export default connect(mSTP, mDTP)(UsersForm);