import {orders, activeState, modalOpen} from './reducer-methods';

describe('orders reducers', () => {
	test('ADD_ORDER', () => {
		it("should append the passed order to the existing state array", () => {
			let testOutput = orders(['abc'], {type: 'ADD_ORDER', order: 'def'});
			expect(testOutput).toEqual(['abc', 'def']);
		});
	})

	test('CLEAR_ORDER', () => {
		it("should pass a copy of the input state without the id specified", () => {
			let testOutput = orders([{id: 1, name: 'abc'}, {id: 2, name: 'def'}], {type: 'CLEAR_ORDER', id: '2'});
			expect(testOutput).toEqual([{id: 1, name: 'abc'}]);
		});
	})

	test('RECEIVE_ORDERS', () => {
		it("should append the input array to the state array", () => {
			let testOutput = orders(['a', 'b', 'c'], {type: 'RECEIVE_ORDERS', orders: ['1', '2', '3']});
			expect(testOutput).toEqual(['a', 'b', 'c', '1', '2', '3']);
		});
	})

});