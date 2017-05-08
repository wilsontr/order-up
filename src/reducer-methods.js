import { ADD_ORDER, CLEAR_ORDER, SET_ACTIVE_STATE, RECEIVE_ORDERS, SET_MODAL_OPEN, ActiveStates } from './actions.js';
import _ from 'lodash';

export function orders(state = [], action) {
	switch (action.type) {
		case ADD_ORDER:
			return [
				...state, 
				action.order
			];
		case CLEAR_ORDER: 
			return state.map((order) => {
				if ( order.id === action.id ) {
					return _.assignIn({}, order, {
						pickedUp: true
					});
				}
				return order;
			});
		case RECEIVE_ORDERS: 
			return _.concat(state, action.orders);
		default: 
			return state;
	}
}

export function activeState(state = ActiveStates.UPDATING, action) {
	switch (action.type) {
		case SET_ACTIVE_STATE:
			return action.newState;
		default: 
			return state;
	}	
}

export function modalOpen(state = false, action) {
	switch (action.type) {
		case SET_MODAL_OPEN:
			return action.modalOpen;
		default:
			return state;
	}
}

