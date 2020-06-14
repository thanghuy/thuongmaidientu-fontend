import React, { Component } from 'react';
import  TopBar from '../../containers/topbar';
import  Main from '../Header/HeaderMain';
import Loading from './Loading';
import { withRouter } from "react-router";
class header extends Component {
    constructor(props){
        super(props);
        this.state = {
            width : 0,         
            isLoading: false
        }
    }
    // componentDidMount = () => this.setTimer();
    // componentDidUpdate = prevProps => {
    //   if ((this.props.location !== prevProps.location)) {
    //     this.clearTimer();
    //     this.setState({ isLoading: true },()=> this.clickBar(),() => this.setTimer());
    //   }
    // };
    // clearTimer = () => clearTimeout(this.timeout);
    // timer = () => this.setState({ isLoading: false }, () => this.clearTimer());
    // setTimer = () => (this.timeout = this.clickBar());
    // clickBar = () =>{
    //     var a = parseInt(this.state.width);
    //     var id=setInterval(() =>{
    //         if(a >= 100){
    //             clearInterval(id);
    //             this.setState({
    //                 width : 0
    //             })
    //         }
    //         else{
    //             a = a + 10;
    //             this.setState({
    //                 width : a
    //             })
    //         }
    //     },50);
    //  }
    render() {
        return (
            <div>
                {this.state.isLoading ? (<Loading width={this.state.width}/>) : (<Loading width="0"/>)}
                 <header className="header">
                    <TopBar status={this.props.status} dataUser={this.props.dataUser}/>
                    <Main/>
                </header>
            </div>
        );
    }
}

export default withRouter(header);