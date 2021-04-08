import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import sagas from './sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    reducers,
   
    composeWithDevTools( applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);