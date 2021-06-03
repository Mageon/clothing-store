import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/imgs/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

// With React Redux, your components never access the store directly - connect does it for you. React Redux gives you two ways to let components dispatch actions:

// • By default, a connected component receives props.dispatch and can dispatch actions itself.
// • connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.

// Defining mapDispatchToProps as a function gives you the most flexibility in customizing the functions your component receives, and how they dispatch actions. You gain access to dispatch and ownProps. You may use this chance to write customized functions to be called by your connected components.

// The mapDispatchToProps function will be called with dispatch as the first argument. You will normally make use of this by returning new functions that call dispatch() inside themselves, and either pass in a plain action object directly or pass in the result of an action creator.

// Syntax:
/*
  const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      plainAction: () => dispatch({ type: 'someString' }),
      plainAction2: () => dispatch( someDispatchActionFunction() ),
    }
  }

  // For more info visit https://react-redux.js.org/using-react-redux/connect-mapdispatch
*/


const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  // so here is = as toggleCartHidden: () => dispatch({type: 'TOGGLE_CART_HIDDEN'}),
});

// As the second argument passed in to connect, mapDispatchToProps is used for dispatching actions to the store.
export default connect(null, mapDispatchToProps)(CartIcon);
