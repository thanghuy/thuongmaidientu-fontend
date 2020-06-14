import React, { Component } from 'react'
import Header from '../../components/Layout/header';
import Footer from '../../components/Layout/footer';
import '../../assets/css/main_styles.css';
import '../../assets/css/responsive.css';
import '../../assets/css/home.css';
export default class MainLayOut extends Component {  
  render() {
    return (
      <div className="super_container">
          <Header/>
            {this.props.children}
          <Footer/>
      </div>
    )
  }
}
