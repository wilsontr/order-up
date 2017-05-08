import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

let orderStyle = css({
	'display': 'block'
});

let contentsStyle = css({
	'padding': '1.5rem'
});

let labelStyle = css({
	'margin-top': '1rem',
	'margin-bottom': 0,
	'font-weight': 'bold'
});

let buttonRow = css({
	'margin-top': '1rem'
});

const Order = ({ id, customerName, customerAddress, courierName, pickupETA, onButtonClick }) => (
	<li className="col-md-3 col-sm-4" {...orderStyle}>
		<div className="panel panel-default">
			<div className="panel-heading">Order #{id}</div>
			<div {...contentsStyle}>
				<label {...labelStyle}>Customer</label>
				<div>{customerName}</div>
				<div>{customerAddress}</div>
				<label {...labelStyle}>Courier</label>
				<div>{courierName}</div>
				<label {...labelStyle}>ETA</label>
				<div>{pickupETA}</div>
				<div className="text-center" {...buttonRow}>
					<button 
						className="btn btn-primary" 
						onClick={e => {
							onButtonClick(id)
						}}>
							Picked Up
					</button>
				</div>				
			</div>
		</div>
	</li>
);

Order.propTypes = {
	id: PropTypes.number.isRequired,
	customerName: PropTypes.string.isRequired,
	customerAddress: PropTypes.string.isRequired,
	courierName: PropTypes.string.isRequired,
	pickupETA: PropTypes.string.isRequired
	//onButtonClick: PropTypes.func.isRequired
};

export default Order;