import { combineReducers } from 'redux';
import { ADD_ORDER, CLEAR_ORDER, SET_ACTIVE_STATE, ActiveStates } from './actions.js';
import _ from 'lodash';


function orders(state = [], action) {
	switch (action.type) {
		case ADD_ORDER:
			return [
				...state, 
				action.props
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
		default: 
			return state;
	}
}

function activeState(state = ActiveStates.UPDATING, action) {
	switch (action.type) {
		case SET_ACTIVE_STATE:
			return action.newState;
		default: 
			return state;
	}	
}



const orderApp = combineReducers({
	orders, 
	activeState
});

export default orderApp;
