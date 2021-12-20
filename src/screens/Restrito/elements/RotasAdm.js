import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageNotFound from '../elements/404';

//Exibição de dados do Holerite
import EnviarHolerite from '../Holerite/EnviarHolerite';
import EnviarHoleriteFerias from '../Holerite/EnviarHoleriteFerias';
import EnviarHoleriteLicencaPremio from '../Holerite/EnviarHoleriteLicencaPremio'; //
import GerenciarCertificados from '../Cursos/GerenciamentoDeCertificados';

const RotasAdm = props => {
  return (
    <>
      <Switch>
        <Route
          exact
          path={`${props.path}/upload-payslip`}
          component={EnviarHolerite}
        />
        <Route
          exact
          path={`${props.path}/upload-vacation-payslip`}
          component={EnviarHoleriteFerias}
        />
        <Route
          exact
          path={`${props.path}/upload-others-payslip`}
          component={EnviarHoleriteLicencaPremio}
        />
        <Route
          exact
          path={`${props.path}/manager-certificates`}
          component={GerenciarCertificados}
        />
        <Route path="*" exact={true} component={PageNotFound} />
      </Switch>
    </>
  );
};

export default RotasAdm;
