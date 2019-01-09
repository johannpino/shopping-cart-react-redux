import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

const logger = ({ getState }) => {
    return next => action => {
      console.log('will dispatch', action)
      const returnValue = next(action)
      console.log('state after dispatch', getState())
      return returnValue
    }
}

const reducer = (state, action) =>{
    switch (action.type) {
        case "REPLACE_PRODUCTS":
        return {
            ...state,
            products: action.products
        }
        case "ADD_TO_CART":
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            }
        default:
            return state
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducer, {cart: [], products:[]}, composeEnhancers(applyMiddleware(thunk)) )