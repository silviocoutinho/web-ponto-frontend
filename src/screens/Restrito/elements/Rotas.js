import React, { Component } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';

import PageNotFound from '../elements/404';
import ConsultaMensal from '../MarcacaoPonto/ConsultaMensal';

const Rotas = props => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path={`${props.path}/consulta-mensal`}
          component={ConsultaMensal}
        />
        <Route path="*" exact={true} component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default Rotas;
