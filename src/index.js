import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import orderApp from './reducers';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

let store = createStore(orderApp);

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  	document.getElementById('root')
);
