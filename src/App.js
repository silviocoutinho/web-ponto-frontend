import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import store from './redux';
import { Provider } from 'react-redux';

import Header from './Header';
import Login from './screens/Login/index';
import Admin from './screens/Admin';
import Restrito from './screens/Restrito';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/restrito" component={Restrito} />
          <Route exact path="/login" component={Login} />
        </Router>
      </Provider>
    );
  }
}

export default App;
