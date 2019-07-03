import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { rootReducers } from '../Reducer';
import { rootSaga } from '../Saga';

const composeEnhancers = composeWithDevTools({
  trace: true
});
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducers,composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
