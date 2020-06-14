import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
            <div className="barLoading">
                <div id="myBar" className="Progress-Bar" style={{width :`${this.props.width}%`}}></div>
            </div>
        );
    }
}

export default Loading;