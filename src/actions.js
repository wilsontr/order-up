import _ from 'lodash';

export const ADD_CARD = 'ADD_CARD';
export const CLEAR_CARD = 'CLEAR_CARD';
export const SET_ACTIVE_STATE = 'SET_ACTIVE_STATE';

export function addCard(props) {
	return { type: 'ADD_CARD', props };
}

export function clearCard(id) {
	return { type: 'CLEAR_CARD', id };
}

export function setActiveState(newState) {
	return {type: 'SET_ACTIVE_STATE', newState};
}

export const ActiveStates = {
	UPDATING: 'UPDATING',
	STOPPED: 'STOPPED'
}