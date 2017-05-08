import _ from 'lodash';
import fetch from 'isomorphic-fetch';	

export const SET_MODAL_OPEN = 'SET_MODAL_OPEN';
export function setModalOpen(modalOpen) {
	return { type: 'SET_MODAL_OPEN', modalOpen };
}

export const ADD_ORDER = 'ADD_ORDER';
export function addOrder(order) {
	return { type: 'ADD_ORDER', order };
}

export const CLEAR_ORDER = 'CLEAR_ORDER';
export function clearOrder(id) {
	return { type: 'CLEAR_ORDER', id };
}

export const SET_ACTIVE_STATE = 'SET_ACTIVE_STATE';
export function setActiveState(newState) {
	return {type: 'SET_ACTIVE_STATE', newState};
}

export const REQUEST_SINGLE_ORDER = 'REQUEST_SINGLE_ORDER';
function requestSingleOrder() {
	return {
		type: REQUEST_SINGLE_ORDER
	}
}

export const REQUEST_ORDERS = 'REQUEST_ORDERS';
function requestOrders() {
	return {
		type: REQUEST_ORDERS
	}
}

export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
function receiveOrders(json) {
	if ( !json.length ) {
		throw new Error ("No valid data in response JSON");
	}

	let orders = json;
	return {
		type: RECEIVE_ORDERS,
		orders: orders
	}
}

export function fetchOrders() {
	return function (dispatch) { 
		dispatch(requestOrders());
		return fetch('http://localhost:3001/api/orders')
			.then(response => response.json())
			.then(json => {
				dispatch(receiveOrders(json))
			})
			.catch(err => console.error("Error loading orders!", err));

	}
}

export function fetchSingleOrder() {
	return function (dispatch) { 
		dispatch(requestSingleOrder());
		return fetch('http://localhost:3001/api/single-order')
			.then(response => response.json())
			.then(json => {
				dispatch(addOrder(json))
			})
			.catch(err => console.error("Error loading order!", err));

	}
}


export const ActiveStates = {
	UPDATING: 'UPDATING',
	STOPPED: 'STOPPED'
}
