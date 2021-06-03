import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

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
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if user is authenticated, load that data to this.state.currentUser
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // load the data from the snapShot object
        userRef.onSnapshot((snapShot) => {
          //2.- En lugar de this.setState usaremos setCurrentuser que ahora tiene las props, ir a 3
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
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
          {/* <Route path="/signin" component={SignInAndSignUpPage} /> */}
          {/*
            Here insisde of our Route, we are going to add exact, then remove the component property and add render (which is the same as the render above), it's a javascript invocation that determines what component to return in the same place our component would be, instaead it'll be some javascript.

            // And here we will say it'll be a function that will determine based off of this.props.currentUser, and if it's present we will render to where we want to render to, and if not then we will render our SignInAndSignUpPage, and that's all there is to it.

            // Now if we go and try to go to signin page 
              -- Ifg we are signed in.- It will redirect us to home ('/') 
              -- If not it'll shows us the signin page, and once we sign in, it will redirect us to home ('/).
          */}
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />

        </Switch>
      </div>
    );
  }
}

// Here we are going to destructure our userReducer and what we will return is our currentUser prop which is = to user.currentUser, and now we're able to pass mapStateToProps to our connect...
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// Here instead of null we are able to pass our mapStateToProps, so that we have access to this.prop.currentUser
export default connect(mapStateToProps, mapDispatchToProps)(App);
