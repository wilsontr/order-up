import React, { Component } from 'react';
import { connect } from 'react-redux'
import OrderTray from '../components/OrderTray';
import { fetchOrders, clearOrder, fetchSingleOrder } from '../actions';
import PropTypes from 'prop-types';

const ORDER_INTERVAL = 15000;

class App extends Component {

  constructor(props) {
    super(props);
    this.handleOrderClick = this.handleOrderClick.bind(this);
    this.handleInterval = this.handleInterval.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchOrders());
    this.startTimer();
  }

  startTimer() {
    window.setInterval(this.handleInterval, ORDER_INTERVAL);
  }

  handleOrderClick(orderId) {
    const { dispatch } = this.props;
    console.log('order', orderId);
    dispatch(clearOrder(orderId));
  }

  handleInterval() {
    const { dispatch } = this.props;
    console.log('interval');
    dispatch(fetchSingleOrder());
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
