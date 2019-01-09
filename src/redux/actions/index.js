import axios from 'axios'
export const loadProducts = () => {

    return dispatch => {
        return axios.get('http://localhost:3001/products')
        .then(response => {
            dispatch({
                type: "REPLACE_PRODUCTS",
                products: response.data
            })
        })
    }
}

export const addToCart = payload => {
    return {
        type: "ADD_TO_CART",
        payload
    }
}

export const removeFromCart = payload => {
    return{
        type: "REMOVE_FROM_CART",
        payload
    }
}
