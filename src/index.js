import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { fetchOrders } from './actions';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './App';
import orderApp from './reducers';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const loggerMiddleware = createLogger();

const store = createStore(
	orderApp,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

store.dispatch(fetchOrders()).then(() => 
	console.log(store.getState())
);

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  	document.getElementById('root')
);
