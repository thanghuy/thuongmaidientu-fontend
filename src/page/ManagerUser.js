import React, { Component } from 'react'
import Manager from '../components/ManagerUser/Index';
export default class ManagerUser extends Component {
    render() {
        var {match} = this.props;
        return (
            <Manager match={match}/>
        )
    }
}
