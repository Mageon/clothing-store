import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  // Provider is the redux provider that has to be the parent of everything
  // so it allow us to get access to all of the things related to the store 
  // that we are going to  put all of the actual code we want to store on 
  // our redux state. 
  // Now we pass the store object to the Provider 
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);