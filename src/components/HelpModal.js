import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import Modal from 'react-modal';

const buttonClass = css({
	'width': '10rem',
	'marginRight': '1rem',
	'marginLeft': '1rem'
});

const buttonRow = css({
	'marginTop': '4rem'
});

const container = css({
	'padding': '2rem 3rem'
});

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const HelpModal = ({ isOpen, onCancel, onSubmit }) => (
	<Modal
		isOpen={isOpen}
		style={customStyles}
		contentLabel="Close the kitchen?">
		<div className="text-cnter" {...container}>
			<p>Are you sure you want to close the kitchen?</p>
			<div {...buttonRow}>
			
				<button 
					{...buttonClass}
					className="btn btn-primary" 
					onClick={e => {
						onSubmit()
					}}>OK</button>
				<button 
					{...buttonClass}
					className="btn btn-default" 
					onClick={e => {
						onCancel()
					}}>Cancel</button>			
			</div>
		</div>
				
	</Modal>
);

HelpModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onCancel: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default HelpModal;