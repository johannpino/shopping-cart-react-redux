import React from 'react';
import ProductList from './ProductList';

const products = [
    {
       id: '1', 
       name: 'Iphone XS Space Gray 64GB',
       price: 1000,
       img: 'https://d3tctca4ed2xlu.cloudfront.net/images/spree/images/17507/attachments/large/Apple_iPhoneXSMax_Hero.png?1538749685'
    },
    {
       id: '2', 
       name: 'Iphone XS Space Gray 64GB',
       price: 1200,
       img: 'https://d3tctca4ed2xlu.cloudfront.net/images/spree/images/17507/attachments/large/Apple_iPhoneXSMax_Hero.png?1538749685'
    },
    {
       id: '3', 
       name: 'Iphone XS Space Gray 512GB',
       price: 1500,
       img: 'https://d3tctca4ed2xlu.cloudfront.net/images/spree/images/17507/attachments/large/Apple_iPhoneXSMax_Hero.png?1538749685'
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
                            img={product.img}
                        />
                            
                    )
                })
            }
        </div>
    );
};

export default Content;