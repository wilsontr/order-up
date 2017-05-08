import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import orderApp from '../reducers';

const store = createStore(
	orderApp,
	applyMiddleware(
		thunkMiddleware,
	)
);


describe('App', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<App store={store}/>);
	});

});