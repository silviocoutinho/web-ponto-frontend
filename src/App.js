import React, { Component } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';

import store from './redux';
import { Provider } from 'react-redux';

import Login from './screens/Login/index';
import Restrito from './screens/Restrito';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename="/index.html">
          <Route exact path="/" component={Login} />
          <Route path="/restrito" component={Restrito} />
          <Route exact path="/login" component={Login} />
        </Router>
      </Provider>
    );
  }
}

export default App;
