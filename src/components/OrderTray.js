import React, { PropTypes } from 'react';
import Order from './Order';

const OrderTray = ({ orders, onCardClick }) => (
	<ul>
		{ orders.map( order => 
			<Order 
				key={order.id}
				{...order}
				onClick={() => onOrderClick(order.id)}
			/> //</>
		)}
	</ul>
);

Order.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		customerName: PropTypes.string.isRequired,
		customerAddress: PropTypes.string.isRequired,
		courierName: PropTypes.string.isRequired,
		pickupETA: PropTypes.string.isRequired,
		pickedUp: PropTypes.bool.isRequired
	})),
	onOrderClick: PropTypes.func.isRequired
};

export default OrderTray;