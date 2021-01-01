import { connect } from 'react-redux';
import RegisterForm from './register_form';
import { register } from '../../actions/auth_actions'

const mSTP = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mDTP = (dispatch) => ({
  register: (username, password, email) => dispatch(register(username, password, email))
});

export default connect(mSTP, mDTP)(RegisterForm);