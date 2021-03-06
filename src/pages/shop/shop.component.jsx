import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { Route } from "react-router-dom";

import './shop.styles.scss';

// The prop match is the arguments that send Route when called from App.js (path, url, isExact and params)
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
);

export default ShopPage;