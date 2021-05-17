import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Tutorial from "./pages/tuto/tuto";
import HomePage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if user is authenticated, load that data to this.state.currentUser
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // load the data from the snapShot object
        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot.id, snapShot.data())
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              // this one has been add in order to display log when setState trigered
              // displayin the snapshot of currentUser info
              // console.log(this.state);
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
  //     createUserProfileDocument(user);
  //     // this.setState({ currentUser: user });
  //     // console.log(user);
  //   });
  // }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  // -- end

  render() {
    return (
      <div>
        {/* <Route path="/" component={Header} /> */}
        <Header currentUser={this.state.currentUser} />
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
