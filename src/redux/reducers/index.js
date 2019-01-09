import { combineReducers } from "redux";

export const products = (state=[], action) =>{
    switch (action.type) {
        case "REPLACE_PRODUCTS":
        return action.products
        default:
            return state
    }
}

export const cart = (state=[], action) =>{
    switch (action.type) {
        case "ADD_TO_CART":
            return state.concat(action.payload)
        case "REMOVE_FROM":
            return state.cart.filter(product => product.id !== action.payload)
        default:
            return state
    }
}

export const reducers = combineReducers({
    products,
    cart
})