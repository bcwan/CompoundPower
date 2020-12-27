// proxy for regular routes
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mSTP = (state) => ({
  auth: state.auth
});

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest}
      render={props => {
        if (auth.isLoading) {
          return <h2>Loading...</h2>;
        } else if (!auth.isAuthenticated) {
          return <Redirect to="/login" />
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );

export default connect(mSTP)(PrivateRoute);
