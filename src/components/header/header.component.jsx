import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/imgs/crown.svg";

import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        // <Link className="option" to='/signout'>{currentUser.displayName}</Link>
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <Link className="option" to="/shopkart">
        SHOP KART
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

// The connect() function connects a React component to a Redux store.
// Syntax:
  // function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
// For a full overview of connect function and mapStateToProps go to:
// https://react-redux.js.org/api/connect

export default connect(mapStateToProps)(Header);
