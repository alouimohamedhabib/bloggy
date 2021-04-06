import { applyMiddleware, combineReducers, createStore } from 'redux'
//import thunkMiddleware from 'redux-thunk'

//import monitorReducersEnhancer from './enhancers/monitorReducers'
//import loggerMiddleware from './middleware/logger'
import * as rootReducer from './reducers'

export default function configureStore(preloadedState) {
/**
   const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = compose(...enhancers)
 */
const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  const store = createStore(combineReducers({...rootReducer}), devTool)

  return store
}

