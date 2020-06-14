import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Pagination extends Component {
    render() {
        return (
            <div className="shop_page_nav">
                <div className="page_prev d-flex flex-column align-items-center justify-content-center">
                    <i className="fas fa-chevron-left" />
                </div>
                <ul className="page_nav d-flex flex-row">
                    <li>
                    <Link className="active-page" to="/sach-tam-ly?current=3&pageSize=1&name=book">1</Link>
                    </li>
                    <li className="active-page">
                    <Link to="/">2</Link>
                    </li>
                    <li>
                    <Link to="/">3</Link>
                    </li>
                    <li>
                    <Link to="/">...</Link>
                    </li>
                    <li>
                    <Link to="/">21</Link>
                    </li>
                </ul>
                <div className="page_next d-flex flex-column align-items-center justify-content-center">
                    <i className="fas fa-chevron-right" />
                </div>
            </div>
        );
    }
}
export default Pagination;