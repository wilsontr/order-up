import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Order from './Order.js';


const testProps = {
	id: 1,
	customerName: 'Foo Bar',
	customerAddress: '123 5th St',
	courierName: 'Bar Foo',
	pickupETA: '12:34',
	pickedUp: false
};

describe('Order', () => {
	var onClick;
	var wrapper;

	beforeEach(() => {
		onClick = jest.fn();
		wrapper = mount(<Order onClick={onClick} {...testProps}/>);
	});

	it('renders without crashing', () => {
		expect(wrapper).toIncludeText('Order #');
	});

	test('markup', () => {
		it ('has the correct markup based on its props', () => {
			const order = wrapper.find('.customer-name');
			expect(wrapper.find('.order-id')).toHaveText(testProps.id);
			expect(wrapper.find('.customer-name')).toHaveText(testProps.customerName);
			expect(wrapper.find('.customer-address')).toHaveText(testProps.customerAddress);
			expect(wrapper.find('.courier-address')).toHaveText(testProps.courierAddress);			
			expect(wrapper.find('.pickup-eta')).toHaveText(testProps.pickupETA);			
		})
	});

	test('onClick', () => {
		it ('fires its onClick function when the button is clicked', () => {
			const button = wrapper.find('.btn.btn-primary');
			button.simulate('click');
			expect(onClick).toHaveBeenCalledWith(1);			
		})
	});
});