// This root reducer will end up being the actual code that combines all of our other states together, Is the base reducer tha represent all of the state of our application.
// So this rootReducer will end up being the actual code that combines all of oir other states together.

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});