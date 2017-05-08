import React, { Component } from 'react';
import { connect } from 'react-redux'
import OrderTray from '../components/OrderTray';
import { fetchOrders, clearOrder } from '../actions';
import PropTypes from 'prop-types';


class App extends Component {

  constructor(props) {
    super(props);
    this.handleOrderClick = this.handleOrderClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchOrders());
  }

  handleOrderClick(orderId) {
    const { dispatch } = this.props;
    console.log('order', orderId);
    dispatch(clearOrder(orderId));
  }

  render() {
    const { orders } = this.props;
    return (
      <div className="container-fluid">
        <OrderTray 
          orders={orders} 
          onOrderClick={this.handleOrderClick}/>
      </div>
    );
  }
}

App.propTypes = {
  orders: PropTypes.array.isRequired,
  activeState: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

const getOutstandingOrders = (orders) => {
  return orders.filter(order => !order.pickedUp);
}

function mapStateToProps(state) {
  const { orders, activeState } = state;
  return {
    orders: getOutstandingOrders(orders), 
    activeState
  }
}

export default connect(mapStateToProps)(App);
