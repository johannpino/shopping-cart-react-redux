import React from 'react';
import ProductList from './ProductList';

const products = [
    {
       id: '1', 
       name: 'Iphone XS Space Gray 64GB',
       price: 1000
    },
    {
       id: '2', 
       name: 'Iphone XS Space Gray 64GB',
       price: 1200
    },
    {
       id: '3', 
       name: 'Iphone XS Space Gray 512GB',
       price: 1500
    },

]

const Content = () => {
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
                        />
                            
                    )
                })
            }
        </div>
    );
};

export default Content;