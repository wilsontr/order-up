import React, { Component } from 'react';
import { connect } from 'react-redux'
import OrderTray from './components/OrderTray';
import { fetchOrders } from './actions';
import PropTypes from 'prop-types';


class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchOrders());
  }

  render() {
    const { orders } = this.props;
    return (
      <div className="container-fluid">
        <OrderTray orders={orders}/>
      </div>
    );
  }
}

App.propTypes = {
  orders: PropTypes.array.isRequired,
  activeState: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { orders, activeState } = state;
  return {
    orders, 
    activeState
  }
}

export default connect(mapStateToProps)(App);
