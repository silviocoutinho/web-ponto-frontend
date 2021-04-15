import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
const Users = props => <h1>Users Admin</h1>;

const Admin = props => {
  const path = props.match.path;
  if (!props.auth.isAuth) {
    return <Redirect to="/login" />;
  }
  if (props.auth.user.adm !== true) {
    return <Redirect to="/restrito" />;
  }
  return (
    <div>
      <div>
        <Route path={`${path}/`} exact component={Home} />
        <Route path="/restrito" component={Users} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Admin);
