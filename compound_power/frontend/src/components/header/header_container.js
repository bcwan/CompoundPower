import { connect } from 'react-redux';
import Header from './header';

const mSTP = (state) => ({
  auth: state.auth,
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)(Header);