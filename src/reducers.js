import { combineReducers } from 'redux';
import { orders, activeState, modalOpen } from './reducer-methods';

const orderApp = combineReducers({
	orders, 
	activeState,
	modalOpen
});

export default orderApp;
