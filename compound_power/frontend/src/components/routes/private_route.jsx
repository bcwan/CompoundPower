// proxy for regular routes
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mSTP = (state) => ({
  auth: state.auth
});

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route {...rest}
      render={props => {
        return <Component {...props} />;
      }}
    />
  )
}

export default connect(mSTP)(PrivateRoute);
