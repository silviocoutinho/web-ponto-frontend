import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ActionCreator from '../../redux/actionCreators';

import Home from './Home';
import Rotas from './elements/Rotas';

const Restrito = props => {
  if (!props.auth.isAuth) {
    return <Redirect to="/login" />;
  }
  const { path } = props.match;

  return (
    <div>
      <Switch>
        <Route
          exact
          path={`${path}/`}
          component={() => <Home match={path} />}
        />
        <Rotas path={path} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    validateToken: () => dispatch(ActionCreator.validateTokenRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restrito);
