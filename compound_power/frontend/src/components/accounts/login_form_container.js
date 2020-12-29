import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/auth_actions'

const mSTP = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mDTP = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password))
});

export default connect(mSTP, mDTP)(LoginForm);