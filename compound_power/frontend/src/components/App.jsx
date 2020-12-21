import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './header/header';
import Dashboard from './users/dashboard';

import { Provider } from 'react-redux';
import configureStore from '../store/store';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Fragment>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));