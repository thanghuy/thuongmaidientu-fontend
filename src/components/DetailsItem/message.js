import React, { Component } from 'react';
import * as Message from '../../constant/message';
class message extends Component {
    render() {
        return (
            <div className="message-add-cart">
                <div className="circle-alert">
                    <i className="fas fa-check-circle"></i>
                </div>
                <div className="alert-add-cart">{Message.AddCart}</div>
            </div>
        );
    }
}

export default message;