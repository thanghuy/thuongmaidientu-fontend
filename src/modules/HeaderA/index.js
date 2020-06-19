import React from 'react';
import {Link} from "react-router-dom";
import * as auth from '../../common/services/AuthService';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const index = () => {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item d-none d-sm-inline-block">
                <Link to="/admin" className="nav-link">
                    Admin Book
                </Link>
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Button
                variant="outlined"
                color="primary"
                startIcon={<ExitToAppIcon />}
                onClick={() => auth.logout()}
                >
                    Đăng xuất
                </Button>
                </li>
            </ul>
            </nav>
    );
};

export default index;