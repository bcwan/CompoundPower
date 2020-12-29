import { connect } from 'react-redux';
import Header from './header';

const mSTP = (state) => ({
  errors: state.errors.auth,
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)(Header);