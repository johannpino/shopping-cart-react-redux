import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                        <div className="col-auto logo d-sm-none d-md-block">
                            Shopping Cart
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-2 ml-auto">
                            <div className="text-center cart">
                                Cart (3): $ 10.000 
                            </div>
                        </div>                   
                    </div>              
                </div>
            </header>
        </div>
    );
};

export default Header;