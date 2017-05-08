import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import OrderTray from './OrderTray.js';

const mockOrders = [{
	id: 1,
	customerName: 'Foo Bar',
	customerAddress: '123 5th St',
	courierName: 'Bar Foo',
	pickupETA: '12:34',
	pickedUp: false
},
{
	id: 2,
	customerName: 'Foo Foo',
	customerAddress: '123 3th St',
	courierName: 'Bar Bar',
	pickupETA: '12:35',
	pickedUp: false
}];


describe('OrderTray', () => {

	beforeEach(() => {
		
	});

	it('renders without crashing', () => {
		const onOrderClick = jest.fn();
		const wrapper = mount(<OrderTray orders={[]} onOrderClick={onOrderClick}/>);
		expect(wrapper.find('.order-tray')).toBeDefined();
	});

	test('markup', () => {
		const onOrderClick = jest.fn();
		const wrapper = mount(<OrderTray orders={mockOrders} onOrderClick={onOrderClick}/>);
		expect(wrapper.find('.order-card').length).toBe(2);
	});

	test('click event', () => {
		const onOrderClick = jest.fn();
		const wrapper = mount(<OrderTray orders={mockOrders} onOrderClick={onOrderClick}/>);
		const order = wrapper.find('.order-card').at('1');
		const button = order.find('.btn');
		button.simulate('click');
		expect(onOrderClick).toHaveBeenCalledWith(2);
	});
});