import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "../../assets/imgs/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
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

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
//   }
// );

// Now we use the selector that count our items and use the state as argument
// const mapStateToProps = (state) => ({
//   itemCount: selectCartItemsCount(state)
//   }
// );

// Now with the createStructuredSelector function:
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

// As the second argument passed in to connect, mapDispatchToProps is used for dispatching actions to the store.
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
