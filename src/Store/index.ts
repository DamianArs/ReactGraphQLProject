import { rootReducer } from './rootReducer';
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';

const middlewares = [ thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)
const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)
export const store = createStore(rootReducer, composedEnhancers)