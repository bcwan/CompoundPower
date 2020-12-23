import { connect } from 'react-redux';
import UsersAlert from './users_alert';

const mSTP = (state) => ({
  errors: state.errors.user,
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)(UsersAlert);