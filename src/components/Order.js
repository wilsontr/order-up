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
	'marginTop': '1rem',
	'marginBottom': 0,
	'fontWeight': 'bold'
});

let buttonRow = css({
	'marginTop': '1rem'
});

const Order = ({ id, customerName, customerAddress, courierName, pickupETA, onClick }) => (
	<li className="col-md-3 col-sm-4 order-card" {...orderStyle}>
		<div className="panel panel-default">
			<div className="panel-heading">Order #<span className="order-id">{id}</span></div>
			<div {...contentsStyle}>
				<label {...labelStyle}>Customer</label>
				<div className="customer-name">{customerName}</div>
				<div className="customer-address">{customerAddress}</div>
				<label {...labelStyle}>Courier</label>
				<div className="courier-name">{courierName}</div>
				<label {...labelStyle}>ETA</label>
				<div className="pickup-eta">{pickupETA}</div>
				<div className="text-center" {...buttonRow}>
					<button 
						className="btn btn-primary" 
						onClick={e => {
							onClick(id)
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
	pickupETA: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Order;