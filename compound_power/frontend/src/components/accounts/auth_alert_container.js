import { connect } from 'react-redux';
import AuthAlert from './auth_alert';

const mSTP = (state) => ({
  errors: state.errors.auth,
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)(AuthAlert);