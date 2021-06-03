//  Middleware
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// so the middlewares that the store is expecting from redux is going to be an array that we can set ourselves as this thing called middlewares, and we make it an array and insitde is oir loger middleware
const middlewares = [logger];

// createStore: Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.
// Sytntax:
// createStore(reducer, [preloadedState], [enhancer])
  // reducer: A reducing function that returns the next state tree, given the current state tree and an action to handle.
  // preloadedState: The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your reducer can understand.
  // enhancer: The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is applyMiddleware().
// https://redux.js.org/api/createstore

// applyMiddleware.- Middleware is the suggested way to extend Redux with custom functionality. Middleware lets you wrap the store's dispatch method for fun and profit. The key feature of middleware is that it is composable.
// Syntax:
  // applyMiddleware(...middleware)
    // ...middleware (arguments): Functions that conform to the Redux middleware API. Each middleware receives Store's dispatch and getState functions as named arguments, and returns a function. That function will be given the next middleware's dispatch method, and is expected to return a function of action calling next(action) with a potentially different argument, or at a different time, or maybe not calling it at all. The last middleware in the chain will receive the real store's dispatch method as the next parameter, thus ending the chain. So, the middleware signature is ({ getState, dispatch }) => next => action.
// https://redux.js.org/api/applymiddleware

const store = createStore(rootReducer, applyMiddleware(...middlewares));
// so ...middlewares will spread in all of the methods or all of the values in middlewares array, into this function call as individual arguments.

// now we are going to export the store and pass it to the Provider in our index.js file
export default store;