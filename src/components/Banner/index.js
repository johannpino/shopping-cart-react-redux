import React from 'react';
import banner from '../../assets/img/banner.jpg'
import './banner.css'

const Banner = () => {
    return (
        <div className="">
            <div className="h-20 w-100 bg-light banner">
                <img className="w-100" src={banner} alt="Banner Shopping Cart" />         
            </div>
            <div className="container">
                <div className="text-left m-0 pl-0 breadcrumb-banner">
                    home / Iphone / <span className="banner">Iphone XS</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;