// This root reducer will end up being the actual code that combines all of our other states together, Is the base reducer tha represent all of the state of our application.
// So this rootReducer will end up being the actual code that combines all of oir other states together.

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// here we will get the actual local storage object on our window browser, so this is actually telling redux-persist, "I want to use local storage as my default storage"
import storage from  'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';


// After setting the import of persisReducer and storage above, here we will need to define a new persistConfig, so this is pretty much the JSON object that represent the possible configurations tht we want for redux-persist.
const persistConfig = {
  // we need to tell it the key, so this is to tell at what point insde our reducer object do we want to start storing everything, and in this case we want to start from the root.
  key: 'root',
  // Then we want to pass storage in as storage, so thi will say the storage key goes to whatever the storage object from redux persist were tryiying to use this.
  storage,
  // And then finally we can pass in this whitelist property, which is an array containing the string names of any of the reducer that we want to store.
  // And if we see below in combineReducers we have user and cart, but user is handled by firebase authentication,  so there is no reason for us to persist that one, instead all we wanna persist is the cart
  whitelist: ['cart']
}

// Now here we need to is we have to actually call this our rootReducer, because we have to wrap this inside our new persistReducer call.
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

// Then we are going to export as the default instead is calling ths persistReducer as a function passing in both, our persistConfig as well as our rootReducer, so this is a modified version od our rootReducer, except now with persistence capabilities, because of the persisReducer function tha we got from redux-persist
export default persistReducer(persistConfig, rootReducer);