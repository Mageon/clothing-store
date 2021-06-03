import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

import CartItem from "../cart-item/cart-item.component";

// Aqui usamos como parametro cartItems que es el objeto que extrajimos del estado con la funcion mapStateToProps (es decir mapea el state a props), y por ello lo usamos aqui
// cartitems contiene el arreglo de los items agregados al carrito
const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(
          (cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          )
        )
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

// As the first argument passed in to connect, mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
// • It is called every time the store state changes.
// • It receives the entire store state, or a part, and should return an object of data this component needs

// En este caso extraemos solo la parte cartItems de la parte cart de todo el state de redux
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
  // y qui solo regresamos cartItems, lo cual es solo lo que necesitamos de todo el estado,
  // y lo usamos como parametro en CartDropdown function (mero arriba)
});

export default connect(mapStateToProps)(CartDropdown);
