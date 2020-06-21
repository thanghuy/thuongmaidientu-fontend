import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import AppRouter from './common/AppRouter';
import RouterAdmin from './common/RouterAdmin';
import ScrollToTop from './common/ScrollToTop';
import NotFound from './page/NotFound';
import Home from './page/Home';
import ProductContainer from './page/Product';
import Detail from './page/DetailsItem';
import Cart from './page/Cart';
import Address from './page/Address';
import OrderComfirm from './page/OrderComfirm';
import ManagerUser from './page/ManagerUser';
import Signup from './page/Signup.js';
import Payment from './page/Payment';
import HomeAdmin from './page/AdHome';
import ManageOrder from './page/AdOrder';
import AdAllProduct from './page/AdAllProduct';
import AdAddNewProduct from './page/AdNewProduct';
import AdUpdateProduct from './page/UpdateProduct';
import NewAddress from './page/NewAddress';
import Comment from './page/Comment';
import Not from './common/Empty/Empty';
import { connect } from 'react-redux';
class Routes extends Component {
    render(){
        var {userName} = this.props;        
        if(userName === null){
        return(
            <Router>
                <ScrollToTop>
                    <Switch>
                        <AppRouter key='1h' path='/' exact component={Home} />
                        <AppRouter key='2' path='/:category.:categoryId' exact component={ProductContainer} />
                        <AppRouter key='3se' path='/search' exact component={ProductContainer} />
                        <AppRouter key='3d' path='/product/:name.:id.html' exact component={Detail} />
                        <AppRouter key='4c' path='/cart' exact component={Cart} />
                        <RouterAdmin key="10" path="/admin" exact component={""}/>
                        <Route path="" exact={false} component={NotFound}/>
                    </Switch>
                </ScrollToTop>
            </Router>
        )
        }
        if(userName !== null && userName.Role === "Customer"){
            return(
                <Router>
                    <ScrollToTop>
                        <Switch>
                            <AppRouter key='1h' path='/' exact component={Home} />
                            <AppRouter key='2' path='/:category.:categoryId' exact component={ProductContainer} />
                            <AppRouter key='3se' path='/search' exact component={ProductContainer} />
                            <AppRouter key='3d' path='/product/:name.:id.html' exact component={Detail} />
                            <AppRouter key='4c' path='/cart' exact component={Cart} />
                            <AppRouter key='5a' path='/nhap-dia-chi' exact component={Address} />
                            <AppRouter key='6o' path='/xac-nhan-don-hang' exact component={OrderComfirm} />
                            <AppRouter key='7p' path='/xac-nhan-thanh-toan' exact component={Payment} />
                            <AppRouter key='8m' path='/user/:nameManager' exact component={ManagerUser} />
                            <AppRouter key='9s' path='/signup' exact component={Signup} />
                            <AppRouter key='10s' path='/new-address' exact component={NewAddress} />
                            <AppRouter key='10s' path='/comment/:OrderId/:name.:id' exact component={Comment} />
                            <RouterAdmin key="10" path="/admin" exact component={HomeAdmin}/>
                            <RouterAdmin key="11" path="/quan-ly-don-hang" exact component={ManageOrder}/>
                            <RouterAdmin key="12" path="/san-pham/all-product" exact component={AdAllProduct}/>
                            <RouterAdmin key="14" path="/quan-ly-shop" exact component={Not}/>
                            <RouterAdmin key="15" path="/san-pham/add-new-product" exact component={AdAddNewProduct}/>
                            <RouterAdmin key="16" path="/san-pham/update-product/:idProduct" exact component={AdUpdateProduct}/>
                            <Route path="" exact={false} component={NotFound}/>
                        </Switch>
                    </ScrollToTop>
                </Router>
            )
        }
        if(userName !== null && userName.Role === "Admin"){
            return(
                <Router>
                    <ScrollToTop>
                        <Switch>
                            <AppRouter key='1h' path='/' exact component={Home} />
                            <AppRouter key='2' path='/:category.:categoryId' exact component={ProductContainer} />
                            <AppRouter key='3se' path='/search' exact component={ProductContainer} />
                            <AppRouter key='3d' path='/product/:name.:id.html' exact component={Detail} />
                            <AppRouter key='4c' path='/cart' exact component={Cart} />
                            <AppRouter key='5a' path='/nhap-dia-chi' exact component={Address} />
                            <RouterAdmin key="10" path="/admin" exact component={HomeAdmin}/>
                            <RouterAdmin key="11" path="/quan-ly-don-hang" exact component={ManageOrder}/>
                            <RouterAdmin key="12" path="/san-pham/all-product" exact component={AdAllProduct}/>
                            <RouterAdmin key="14" path="/quan-ly-shop" exact component={<Not/>}/>
                            <RouterAdmin key="15" path="/san-pham/add-new-product" exact component={AdAddNewProduct}/>
                            <RouterAdmin key="16" path="/san-pham/update-product/:idProduct" exact component={AdUpdateProduct}/>
                            <Route path="" exact={false} component={NotFound}/>
                        </Switch>
                    </ScrollToTop>
                </Router>
            )
        }
    }
}
const mapStateToProps = state => {
    return {
        userName : state.userName
    }
}
export default connect(mapStateToProps,null)(Routes);