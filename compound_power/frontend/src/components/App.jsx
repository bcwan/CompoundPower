import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './header/header';
import Dashboard from './users/dashboard';

import LoginForm from './accounts/login_form';
import RegisterForm from './accounts/register_form';
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
            <Header />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/register" component={RegisterForm} />
                <Route exact path="/login" component={LoginForm} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));