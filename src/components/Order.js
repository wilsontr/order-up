import React, { PropTypes } from 'react';

const Order = ({ id, customerName, customerAddress, courierName, pickupETA }) => (
	<li>
		<div className="panel panel-default">
			<div className="panel-heading">Order #{id}</div>
		</div>
	</li>
);

Card.propTypes = {
	id: PropTypes.number.isRequired,
	customerName: PropTypes.string.isRequired,
	customerAddress: PropTypes.string.isRequired,
	courierName: PropTypes.string.isRequired,
	pickupETA: PropTypes.string.isRequired
	//onButtonClick: PropTypes.func.isRequired
};

export default Order;