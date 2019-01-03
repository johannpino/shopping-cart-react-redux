import React from 'react';
import iphoneXs64 from '../../assets/img/apple-iphone-xs-grey-02.png'
import {addToCart} from '../../redux/actions'
import { connect } from 'react-redux';

const ProductList = ({id,name,price, product, onAddToCart}) => {

    const handleAddToCart = (product) => {
        onAddToCart(product)
    }

    return (
        <div className="product-main col col-md-4 text-center">
            <img src={iphoneXs64} alt={iphoneXs64}/>
            <div className="">
                <h5>{name}</h5>
                <p>USD ${price} </p>
                <button className="btn btn-link" onClick={() => handleAddToCart(product)}> Agregar </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => (
    {
        onAddToCart: payload => dispatch(addToCart(payload))
    }
)

export default connect(null, mapDispatchToProps)(ProductList);