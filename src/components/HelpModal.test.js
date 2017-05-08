import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import HelpModal from './HelpModal.js';

const mockFn = jest.fn();

describe('HelpModal', () => {
	var onSubmit, onCancel;
	var wrapper;

	beforeEach(() => {
		onSubmit = jest.fn();
		onCancel = jest.fn();
		wrapper = mount(<HelpModal isOpen={true} onCancel={onCancel} onSubmit={onSubmit}/>);
	});

	it('renders without crashing', () => {
		const modalDiv = wrapper.find('.modal-content');
		expect(modalDiv).toBeDefined();
		const p = wrapper.find('.modal-message');
		expect(p).toBeDefined();
	});

	test('markup', () => {
		it('renders cancel button', () => {
			const cancelButton = wrapper.find('.btn.btn-default');
			expect(cancelButton).not.toBeUndefined();
			expect(cancelButton).toHaveText('Cancel');			
		});

		it('renders submit button', () => {
			const submitButton = wrapper.find('.btn.btn-primary');
			expect(submitButton).not.toBeUndefined();
			expect(submitButton).toHaveText('Submit');			
		});		
	});

	test('events', () => {
		it('responds to cancel button', () => {
			wrapper.find('.btn.btn-default').simulate('click');
			expect(onCancel).toHaveBeenCalled();
		});
		
		it('responds to submit button', () => {
			wrapper.find('.btn.btn-primary').simulate('click');
			expect(onSubmit).toHaveBeenCalled();
		});
	})
});