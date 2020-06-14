import React, { Component } from 'react';
import bannerP from '../../assets/images/baner3.jpg';
class HomeBanner extends Component {
    render() {
        return (
            <div className="container">
                <div className="home">
                    <img src={bannerP} alt="ss" />
                </div>
            </div>
        );
    }
}

export default HomeBanner;