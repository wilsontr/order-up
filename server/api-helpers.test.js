const apiHelpers = require('./api-helpers');

describe('api-helpers', () => {
	test('makeOrder', () => {
		let testOrder = apiHelpers.makeOrder(1, ['foo bar'], 30);

		it("assigns an id correctly", () => {
			expect(testOrder.id).toBe(1);
		});	

		it("assigns random names correctly", () => {
			expect(testOrder.customerName.length).toBe(7);
			expect(testOrder.courierName.length).toBe(7);
		})		

		it("initializes pickedUp to false", () => {
			expect(testOrder.pickedUp.length).toBe(false);
		})

		it("randomizes pickup ETA and customer address to non-empty values", () => {
			expect(testOrder.pickupETA.length).not.toBe(0);
			expect(testOrder.customerAddress.length).not.toBe(0);			
		})
	})

	test('getRandomName', () => {
		it("picks a random name from a list we give it", () => {
			let testName = apiHelpers.getRandomName(['name name']);
			expect(testName).toEqual('name name');
		})
	})
})
