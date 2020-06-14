import React from 'react';
import '../../assets/css/payment.css';
import Img from '../../assets/images/loading.png';
const loadingUpdate = (props) => {
    return (
        <div className="loading-address"style={{display : props.load}}>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <img className="logoloading" src={Img} alt="loadingupdate"/>
        </div>
    );
};

export default loadingUpdate;