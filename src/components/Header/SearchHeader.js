import React, { Component } from 'react';
import sreach from '../../assets/images/search.png';
import '../../assets/css/header.css';
import {withRouter } from 'react-router';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : ""
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    search = () =>{
        var {name} = this.state;
        if(name !== ""){
            var query = "/search?current=1&name="+name;
            this.props.history.push(query);
        }
    }
    render() {
        return (
            <div className="col-lg-7 col-12 order-lg-2 order-3 text-lg-left text-right">
                <div className="header_search">
                    <div className="header_search_content">
                    <div className="header_search_form_container">
                        <form action="/search" className="header_search_form clearfix">
                            <input type="hidden" className="header_search_input"
                                name="current" value="1"
                            />
                            <input type="search" className="header_search_input" placeholder="Tìm kiếm trên tahuta..."
                                name="name"
                                onChange={this.handleChange}
                            />
                            <button type="button" className="header_search_button trans_300" value="Submit"
                                onClick={this.search}
                            >
                                <img src={sreach} alt="sreach" />&ensp;Tìm kiếm
                            </button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Search);