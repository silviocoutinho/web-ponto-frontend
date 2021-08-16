import React from 'react';
import { Route } from 'react-router-dom';

import PageNotFound from '../elements/404';

//Exibição de dados do Holerite
import EnviarHolerite from '../Holerite/EnviarHolerite';

const Rotas = props => {
  return (
    <>
      <Route
        exact
        path={`${props.path}/upload-payslip`}
        component={EnviarHolerite}
      />

      <Route path="*" exact={true} component={PageNotFound} />
    </>
  );
};

export default Rotas;
