import React from 'react';
import './main.css'
import LeftBar from './LeftBar';
import Content from './Content';

const Main = () => {
    return (
       <div className="container">
            <div className="row  mt-3">
                <div className="col-12 col-md-3 left-bar main ">
                    <LeftBar />       
                </div>
                <div className="col main-content">
                    <Content />
                </div>         
            </div>
        </div>
    );
};

export default Main;