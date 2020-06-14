import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; 
import appReducers from './reducers/index';

const store = createStore(
  appReducers
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
