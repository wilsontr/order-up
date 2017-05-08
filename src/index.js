import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './App';
import orderApp from './reducers';
import './index.css';
import 'bootswatch/lumen/bootstrap.css';

const loggerMiddleware = createLogger();

const store = createStore(
	orderApp,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  	document.getElementById('root')
);
