import { connect } from 'react-redux';
import RegisterForm from './register_form';
import { register, makeErrorMessage } from '../../actions/auth_actions'

const mSTP = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// createMessage will dispatch message to reducer for auth_alert_container.js
const mDTP = (dispatch) => {
  return {
    register: (username, password, email) => dispatch(register(username, password, email)),
    makeErrorMessage: (message) => dispatch(makeErrorMessage(message))
  }
};

export default connect(mSTP, mDTP)(RegisterForm);