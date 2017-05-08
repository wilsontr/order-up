import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import HelpButton from './HelpButton.js';

const mockFn = jest.fn();

describe('HelpButton', () => {
	var onClick;
	var wrapper;

	beforeEach(() => {
		onClick = jest.fn();
		wrapper = mount(<HelpButton onClick={onClick}/>);
	});

	it('renders without crashing', () => {
		expect(wrapper).toHaveText('Help!');
	});

	test('markup', () => {
		const button = wrapper.find('.btn.btn-danger');
		expect(button).not.toBeUndefined();
		expect(button).toHaveText('Help!');
	});

	test('onClick', () => {
		const button = wrapper.find('.btn.btn-danger');
		button.simulate('click');
		expect(onClick).toHaveBeenCalled();
	});
});