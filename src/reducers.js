import { combineReducers } from 'redux';
import { ADD_CARD, CLEAR_CARD, SET_ACTIVE_STATE, ActiveStates } from './actions.js';
import _ from 'lodash';


function orders(state = [], action) {
	switch (action.type) {
		case ADD_CARD:
			return [
				...state, 
				action.props
			];
		case CLEAR_CARD: 
			return state.map((card) => {
				if ( card.id === action.id ) {
					return _.assignIn({}, card, {
						pickedUp: true
					});
				}
				return card;
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
