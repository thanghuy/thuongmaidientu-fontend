import React, { Component } from 'react';
import Banner from './BannerHome';
import Charaacter from './Characteristics';
import Category from './Categories';
import BestSeller from './BestSeller';
import Product from './ProductList';
class index extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Charaacter/>
                <Category/>
                <BestSeller/>
                <Product/>
            </div>
        );
    }
}

export default index;       