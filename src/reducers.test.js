import {orders, activeState, modalOpen, ActiveStates} from './reducer-methods';

describe('orders reducers', () => {
	test('ADD_ORDER', () => {
		it('should append the passed order to the existing state array', () => {
			let testOutput = orders(['abc'], {type: 'ADD_ORDER', order: 'def'});
			expect(testOutput).toEqual(['abc', 'def']);
		});
	})

	test('CLEAR_ORDER', () => {
		it('should pass a copy of the input state without the id specified', () => {
			let testOutput = orders([{id: 1, name: 'abc'}, {id: 2, name: 'def'}], {type: 'CLEAR_ORDER', id: '2'});
			expect(testOutput).toEqual([{id: 1, name: 'abc'}]);
		});
	})

	test('RECEIVE_ORDERS', () => {
		it('should append the input array to the state array', () => {
			let testOutput = orders(['a', 'b', 'c'], {type: 'RECEIVE_ORDERS', orders: ['1', '2', '3']});
			expect(testOutput).toEqual(['a', 'b', 'c', '1', '2', '3']);
		});
	})

	test('default case', () => {
		it('should pass the state through', () => {
			let testOutput = orders(['A'], {type: 'XYZ', orders: ['B']});
			expect(testOutput).toEqual(['A']);
		});
	})

});

describe('activeState reducers', () => {
	test('SET_ACTIVE_STATE', () => {
		it('should return the newState property of the action passed', () => {
			let testOutput = activeState(ActiveStates.UPDATING, {type: 'SET_ACTIVE_STATE', newState: ActiveStates.STOPPED});
			expect(testOutput).toEqual(ActiveStates.STOPPED);
		})
	})

	test('default case', () => {
		it('should pass the state through', () => {
			let testOutput = activeState(ActiveStates.STOPPED, {type: 'ABC', newState: ActiveStates.UPDATING});
			expect(testOutput).toEqual(ActiveStates.STOPPED);
		});
	})	
});

describe('modalOpen reducers', () => {
	test('SET_MODAL_OPEN', () => {
		it('should return the modalOpen property of the action passed', () => {
			let testOutput = modalOpen(true, {type: 'SET_MODAL_OPEN', newState: false});
			expect(testOutput).toEqual(false);
		})
	})

	test('default case', () => {
		it('should pass the state through', () => {
			let testOutput = activeState(false, {type: '123', modalOpen: true});
			expect(testOutput).toEqual(false);
		});
	})	
});