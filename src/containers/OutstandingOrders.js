import { connect } from 'react-redux';
import { clearOrder } from '../actions';
import OrderTray from '../components/OrderTray';

const getOutstandingOrders = (orders) => {
	return orders.filter(order => !order.pickedUp);
}

const mapStateToProps = (state) => {
	return {
		cards: getOutstandingOrders(state.orders)
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderClick: (id) => {
      dispatch(clearOrder(id));
    }
  }
}

const OutstandingOrders = connect(
	mapStateToProps, 
	mapDispatchToProps, 
)(OrderTray);