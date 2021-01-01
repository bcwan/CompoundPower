import { connect } from 'react-redux';
import RegisterForm from './register_form';
import { register } from '../../actions/auth_actions'
import { createMessage } from '../../actions/messages_actions'

const mSTP = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// createMessage will dispatch message to reducer for auth_alert_container.js
const mDTP = (dispatch) => ({
  register: (username, password, email) => dispatch(register(username, password, email)),
  createMessage: (message) => dispatch(createMessage(message))
});

export default connect(mSTP, mDTP)(RegisterForm);