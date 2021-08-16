import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ActionCreator from '../../redux/actionCreators';

import Home from './Home';
import Rotas from './elements/Rotas';

const UplodFilePayslip = props => <h1>Users Admin</h1>;

const Admin = props => {
  const { path } = props.match;
  if (!props.auth.isAuth) {
    return <Redirect to="/login" />;
  }
  if (props.auth.user.adm !== true) {
    return <Redirect to="/restrito" />;
  }

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

export default connect(mapStateToProps)(Admin);
