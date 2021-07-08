import React, { Component } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';

import PageNotFound from '../elements/404';
import ConsultaMensal from '../MarcacaoPonto/ConsultaMensal';
import ConsultaDia from '../MarcacaoPonto/ConsultaDia';

//Exibição de dados do Holerite
import ObterHolerite from '../Holerite/ObterHolerite';
import SolicitarHolerite from '../Holerite/SolicitarHolerite';

//Dados dos usuarios
import AlterarSenha from '../Usuarios/AlterarSenha';

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
        <Route
          exact
          path={`${props.path}/alterar-senha`}
          component={AlterarSenha}
        />
        <Route path="*" exact={true} component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default Rotas;
