import React, { Component } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';

import PageNotFound from '../elements/404';
import ConsultaMensal from '../MarcacaoPonto/ConsultaMensal';
import ConsultaDia from '../MarcacaoPonto/ConsultaDia';
import ObterHolerite from '../Holerite/ObterHolerite';
import SolicitarHolerite from '../Holerite/SolicitarHolerite';

const Rotas = props => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path={`${props.path}/consulta-mensal`}
          component={ConsultaMensal}
        />
        <Route
          exact
          path={`${props.path}/consulta-dia`}
          component={ConsultaDia}
        />
        <Route
          exact
          path={`${props.path}/obter-holerite`}
          component={ObterHolerite}
        />
        <Route
          exact
          path={`${props.path}/solicitar-holerite`}
          component={SolicitarHolerite}
        />
        <Route path="*" exact={true} component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default Rotas;
