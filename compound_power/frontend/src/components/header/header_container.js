import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/auth_actions'

const mSTP = (state) => ({
  auth: state.auth,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Header);