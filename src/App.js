import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Tutorial from "./pages/tuto/tuto";
import HomePage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

// previously was a function component but we need to access to this.state, so that is why we converted it to a class component.
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  // -- This block help get user authenticated and to logoff user
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  // -- end

  render() {
    return (
      <div>
        {/* <Route path="/" component={Header} /> */}
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tuto" component={Tutorial} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
        {/* Switch renders the first match of the Route component, then renders nothing else */}
      </div>
    );
  }
}

export default App;
