import React from 'react';
import './header.css'
import ShoppingCart from './ShoppingCart'

const Header = () => {
    
    const handleOnCart = () =>{
        document.querySelector('.cart-container').classList.toggle('active')
    }
    const handleOnClose = () => {
        document.querySelector('.cart-container').classList.remove('active')
    }
    return (
        <div>
            <header>
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                        <div className="col-auto logo d-sm-none d-md-block">
                            Shopping Cart
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-2 ml-auto">
                            <div className="text-center cart" onClick={handleOnCart}>
                                Cart (3): $ 10.000 
                            </div>
                        </div>                   
                    </div>              
                </div>
            </header>
            <div className="cart-container d-flex justify-content-center align-items-center">
                <ShoppingCart handleOnClose={handleOnClose} />
            </div>
        </div>
    );
};

export default Header;