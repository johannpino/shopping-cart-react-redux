import {createStore} from 'redux'

const reducer = (state, action) =>{
    switch (action.type) {
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

export default createStore(reducer, {cart: []}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )