import { connect } from 'react-redux';
import PrivateRoute from './private_route'

const mSTP = (state) => ({
  auth: state.auth
});

export default connect(mSTP, mDTP)(PrivateRoute);