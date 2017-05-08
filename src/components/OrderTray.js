import React from 'react';
import PropTypes from 'prop-types';
import Order from './Order';
import { css } from 'glamor';

let style = css({
	'list-style-type': 'none',
	'padding': '2rem',
	'display': 'block'
});

const OrderTray = ({ orders = [], onOrderClick }) => (
	<ul {...style} className="row">
		{ orders.map( order => 
			<Order 
				key={order.id}
				{...order}
				onClick={() => onOrderClick(order.id)}
			/>
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