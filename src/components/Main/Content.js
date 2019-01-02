import React from 'react';
import iphoneXs64 from '../../assets/img/apple-iphone-xs-grey-02.png'

const Content = () => {
    return (
        <div>
            <div className="product-main col col-md-4 text-center">
                <img src={iphoneXs64} alt={iphoneXs64}/>
                <div className="">
                    <h5>Iphone XS Space Gray 64GB</h5>
                    <p> $999.990 </p>
                    <button className="btn btn-link"> Agregar </button>
                </div>
            </div>
            <div className="product-main col col-md-4 text-center">
                <img src={iphoneXs64} alt={iphoneXs64}/>
                <div className="">
                    <h5>Iphone XS Space Gray 256GB</h5>
                    <p> $ 1.149.990 </p>
                    <button className="btn btn-link"> Agregar </button>
                </div>
            </div>
            <div className="product-main col col-md-4 text-center">
                <img src={iphoneXs64} alt={iphoneXs64}/>
                <div className="">
                    <h5>Iphone XS Space Gray 512GB</h5>
                    <p> $ 1.349.990 </p>
                    <button className="btn btn-link"> Agregar </button>
                </div>
            </div>
        </div>
    );
};

export default Content;