import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

let helpClass = css({
	'marginTop': '1rem'
});

const HelpButton = ({ onClick }) => (
	<div className="text-center" {...helpClass}>
		
		<button 
			className="btn btn-danger" 
			onClick={e => {
				onClick()
			}}>Help!</button>
				
	</div>
);

HelpButton.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default HelpButton;