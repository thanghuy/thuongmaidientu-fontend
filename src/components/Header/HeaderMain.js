import React, { Component } from 'react';
import {Link} from "react-router-dom"; 
import Search from './SearchHeader';
import Cart from '../../containers/CartHeader';
import CallApi from '../../utils/ApiController';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll : false,
      category : [],
      hover : false
    };
  }
  getData = () =>{
    CallApi("/category","GET",null).then(resp =>{
        this.setState({
            category : resp.data.data
        })
    })
  }
  componentDidMount() {
    this.getData();
    window.addEventListener('scroll', this.onSticky, false);
  }
  onSticky =()=>{
      var top = window.scrollY < 100;
      if(top !== true){
        this.setState({scroll : true})
      }
      else{
        this.setState({scroll : false})
      }
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.onSticky);
  }
  getCategory = ()=>{
    var {category} = this.state;
    var result = "";
    if(category !== null){
        result = category.map((category,index) =>{
            return (
                <li key={index}>
                    <Link to={`/${category.slug}.${category.categoryId}`}>{category.name}
                        <i className="fas fa-chevron-right ml-auto"></i>
                    </Link>
                </li>
            );
        })
    }
    return result;
  }
  onMouseOver = ()=>{
    this.setState({
      hover: false
    })
  }
  onMouseEnterHandler = ()=>{
    this.setState({
        hover: true
    })
  }
render(){
  var {hover,scroll} = this.state;
  var activeHover = hover ? "none" : "";
  var activeScroll = scroll ? "Tất cả danh mục" : "";
  return (
        <div className={`header_main ${this.state.scroll ? 'sticky' :''}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-3 col-3 order-1">
                <div className="logo_container">
                  <div className="logo"><Link to="/">AliBook</Link></div>
                </div>
                <div className="cat_menu_container">
                  <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start"
                    onMouseOver={this.onMouseOver}
                  >
                      <div className="cat_burger"><span></span><span></span><span></span></div>
                    <div className="cat_menu_text">{activeScroll}</div>
                  </div>
                  <ul className="cat_menu">{this.getCategory()}</ul>
                  <div className="cat_main"
                    style={{display : activeHover}} 
                    onMouseOver={this.onMouseEnterHandler}
                  />
                </div>
              </div>
              <Search/>
              <div className="col-lg-1 col-9 order-lg-3 order-2 text-lg-left text-right">
                <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                  <Cart/>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
}

export default Main;