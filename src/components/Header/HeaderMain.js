import React, { Component } from 'react';
import {Link} from "react-router-dom"; 
import Search from './SearchHeader';
import Cart from '../../containers/CartHeader';
import CallApi from '../../utils/ApiController';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import SvgIcon from '@material-ui/core/SvgIcon';
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
  var widthLogo = scroll ? "15%" : "35%";
  var activeClass1 = scroll ? "srcoll_cat_menu_container" : "cat_menu_container";
  var showLogo = scroll ? <SvgIcon style={{ fontSize: 44,color:"#0e8ce4"}}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon> : "AliBook";
  return (
        <div className={`header_main ${this.state.scroll ? 'sticky' :''}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-3 col-3 order-1">
                <div className="logo_container" style={{width : widthLogo}}>
                  <div className="logo"><Link to="/">{showLogo}</Link></div>
                </div>
                <div className={activeClass1}>
                  <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start"
                    onMouseOver={this.onMouseOver}
                  >
                      <FormatListBulletedIcon style={{ fontSize : 29,color : "#023038" }}/>
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