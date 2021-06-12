import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from "./redux/store";
import App from "./App";

import "./index.css";

ReactDOM.render(
  // Provider is the redux provider that has to be the parent of everything
  // so it allow us to get access to all of the things related to the store 
  // that we are going to  put all of the actual code we want to store on 
  // our redux state. 
  // Now we pass the store object to the Provider 
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);