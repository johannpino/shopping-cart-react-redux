import React from 'react';
import ProductList from './ProductList';
import { connect } from 'react-redux';

const Content = ({products}) => {
    return (
        <div>
            {
                products && products.map( product => {
                    return (
                        <ProductList 
                            id={product.id} 
                            name={product.name}
                            price={product.price}
                            key={product.id}
                            product={product}
                            img={product.img}
                        />
                            
                    )
                })
            }
        </div>
    );
};

const mapStateToPros = state => (
    {
        products: state.products
    }
)

export default connect(mapStateToPros)(Content);