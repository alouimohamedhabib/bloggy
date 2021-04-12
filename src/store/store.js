import { applyMiddleware, combineReducers, createStore, compose } from 'redux'

import createSagaMiddleware from 'redux-saga'

import * as rootReducer from './reducers'
import rootSaga from './sagas/rootSaga';

export default function configureStore(preloadedState) {




  const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  const sagaMiddleware = createSagaMiddleware();
  
  const store = createStore(combineReducers(rootReducer), compose(applyMiddleware(sagaMiddleware), devTool));
  sagaMiddleware.run(rootSaga);
  return store
}

