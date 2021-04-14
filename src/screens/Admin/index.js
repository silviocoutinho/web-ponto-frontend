import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = props => <h1>Home Admin</h1>;
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
      <h1>Admin</h1>
      <h3>{JSON.stringify(props.auth)}</h3>
      <p>
        <Link to="/admin">Admin</Link>
        <Link to="/restrito">Restrito</Link>
      </p>
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
