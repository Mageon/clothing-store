// Selectors are used to improve performance and to avoid to re-render items that had no changed from state.

import { createSelector } from "reselect";

// There are two types of selectors
// • The inputSelector that does not use createSelector
// • The outuptSelector that uses inputSelector and createSelector to build themselves

// inputSelector: Is a functino that usually takes this naming structure of selectsSomething (in this case is selectCart, because is our cart folder and reducers), = a function that gets the whole state and just returns a slice of it, and in this case we just want the cart part from the whole state object

const selectCart = (state) => state.cart;

// now we are going to use the inputSelector to build the createSelector that follows the name structure as before but is = to a createSelector function that takes two arguments:

export const selectCartItems = createSelector(
  // • The first argument is a collection so an array of inputSelectors.
  [selectCart],
  // • And the second argument is going to be a function that will return the value we want out of the selector, and this function takes the paremeters  of each output of the inputSelectors in the array, but in order of those selectors were written, in this case cart.
  // And we will return cart.cartItems (because we want the items from the cart object)
  (cart) => cart.cartItems
);

// And because we make this selectCartItems selector with createSelector gfunction i is now a memorize selector, it means it will be used and rendered when invoked if it's action modify something in our app, otherwise it will remain intact.

// Now let's make a new selector so it returns the count of our items:

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  // Notice here we copied the same reduce function from the function that was used to count our items in the cart-icon.component file
  // Syntax: reduce((accumulator, currentValue, index, array) => { ... }, initialValue)
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
