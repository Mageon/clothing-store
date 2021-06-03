import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Tutorial from "./pages/tuto/tuto";
import HomePage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  // -- This block help get user authenticated and to logoff user
  unsubscribeFromAuth = null;

  componentDidMount() {
    //1.- le pasamos a setCurrenUser las props para esta parte, ir a 2
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if user is authenticated, load that data to this.state.currentUser
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // load the data from the snapShot object
        userRef.onSnapshot((snapShot) => {
          //2.- En lugar de this.setState usaremos setCurrentuser que ahora tiene las props, ir a 3
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      } else {
        // 3.- aqui tambien cambiamos this.setState a setCurrentUser, but we don't need to pass it an object with a current user (currentUser: userAuth), we just need what the object we wanna updated with, and in this case is just userAuth
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  // -- end of logoff block

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tuto" component={Tutorial} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps )(App);
