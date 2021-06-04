import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdown.styles.scss";

// Aqui usamos como parametro cartItems que es el objeto que extrajimos del estado con la funcion mapStateToProps (es decir mapea el state a props), y por ello lo usamos aqui
// cartitems contiene el arreglo de los items agregados al carrito
// const CartDropdown = ({ cartItems }) => (
//   <div className="cart-dropdown">
//     <div className="cart-items">
//       {
//         cartItems.map(
//           (cartItem) => (
//             <CartItem key={cartItem.id} item={cartItem} />
//           )
//         )
//       }
//     </div>
//     <CustomButton>GO TO CHECKOUT</CustomButton>
//   </div>
// );

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => history.push("/checkout")}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

// As the first argument passed in to connect, mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
// • It is called every time the store state changes.
// • It receives the entire store state, or a part, and should return an object of data this component needs

// En este caso extraemos solo la parte cartItems de la parte cart de todo el state de redux
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
//   // y qui solo regresamos cartItems, lo cual es solo lo que necesitamos de todo el estado,
//   // y lo usamos como parametro en CartDropdown function (mero arriba)
// });

// Here we are going to use our selectors, in this case our selectCartItems
// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state),
// });

// Buut now with the createStructuredSelector function:
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// Here we are using withRouter, wrapping our connect, because we need the connect items in our checkout page which is the one with we are going to use this option, so we WRAP the connect as follow:
export default withRouter(connect(mapStateToProps)(CartDropdown));
