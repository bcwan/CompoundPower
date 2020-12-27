import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './header/header';
import Dashboard from './users/dashboard';

import LoginForm from './accounts/login_form';
import RegisterForm from './accounts/register_form';
import PrivateRoute from './routes/private_route';

import { Provider } from 'react-redux';
import configureStore from '../store/store';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute exact path="/register" component={RegisterForm} />
                <PrivateRoute exact path="/login" component={LoginForm} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));