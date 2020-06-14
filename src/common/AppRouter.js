import React from 'react';
import MainLayOut from './MainLayOut/LayOutWeb'
import {Route} from "react-router-dom";  
const AppRouter = ({component: Component,layout : Layout, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <MainLayOut>  
            <Component {...matchProps} />  
        </MainLayOut>  
      )} />  
    )  
  };     
export default AppRouter;