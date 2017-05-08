import React, { Component } from 'react';
import { connect } from 'react-redux'
import OrderTray from '../components/OrderTray';
import HelpButton from '../components/HelpButton';
import HelpModal from '../components/HelpModal';
import { fetchOrders, clearOrder, fetchSingleOrder, setModalOpen, setActiveState, ActiveStates } from '../actions';
import PropTypes from 'prop-types';

const ORDER_INTERVAL = 15000;

class App extends Component {

  constructor(props) {
    super(props);
    this.handleOrderClick = this.handleOrderClick.bind(this);
    this.handleInterval = this.handleInterval.bind(this);
    this.handleHelpClick = this.handleHelpClick.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
    this.handleModalCancel = this.handleModalCancel.bind(this);
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
    dispatch(clearOrder(orderId));
  }

  handleHelpClick() {
    const { dispatch } = this.props;
    dispatch(setModalOpen(true));
  }

  handleModalCancel() {
    const { dispatch } = this.props;
    dispatch(setModalOpen(false));    
  }

  handleModalSubmit() {
    const { dispatch } = this.props;
    dispatch(setActiveState(ActiveStates.STOPPED));   
    dispatch(setModalOpen(false));   
  }

  handleInterval() {
    const { dispatch } = this.props;
    if ( this.props.activeState === ActiveStates.UPDATING ) {
      dispatch(fetchSingleOrder());  
    }
  }

  render() {
    const { orders, modalOpen } = this.props;
    return (
      <div className="container-fluid">
        <HelpButton onClick={this.handleHelpClick}/>
        <OrderTray 
          orders={orders} 
          onOrderClick={this.handleOrderClick}/>
        <HelpModal 
          onSubmit={this.handleModalSubmit}
          onCancel={this.handleModalCancel}
          isOpen={modalOpen}/>
      </div>
    );
  }
}

App.propTypes = {
  orders: PropTypes.array.isRequired,
  activeState: PropTypes.string.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

const getOutstandingOrders = (orders) => {
  return orders.filter(order => !order.pickedUp);
}

function mapStateToProps(state) {
  const { orders, activeState, modalOpen } = state;
  return {
    orders: getOutstandingOrders(orders), 
    activeState,
    modalOpen
  }
}

export default connect(mapStateToProps)(App);
