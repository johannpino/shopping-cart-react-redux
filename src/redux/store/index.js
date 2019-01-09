import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { reducers } from '../reducers';

const logger = ({ getState }) => {
    return next => action => {
      console.log('will dispatch', action)
      const returnValue = next(action)
      console.log('state after dispatch', getState())
      return returnValue
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducers, composeEnhancers(applyMiddleware(logger,thunk)) )