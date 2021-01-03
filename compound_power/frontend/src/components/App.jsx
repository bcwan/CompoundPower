import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HeaderContainer from './header/header_container';
import Dashboard from './users/dashboard';

// login, account recreation components and routes
import LoginFormContainer from './accounts/login_form_container';
import RegisterFormContainer from './accounts/register_form_container';
import PrivateRoute from './routes/private_route';
import { loadUser } from '../actions/auth_actions';

// alerts with authentication
import AuthAlertContainer from './accounts/auth_alert_container';

import { Provider } from 'react-redux';

import store from '../store/store';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <AuthAlertContainer />
            <HeaderContainer />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/register" component={RegisterFormContainer} />
                <Route exact path="/login" component={LoginFormContainer} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));