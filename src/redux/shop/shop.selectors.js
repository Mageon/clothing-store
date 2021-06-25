// A “selector” is simply a function that accepts Redux state as an argument and returns data that is derived from that state.

import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   jackets: 2,
//   sneakers: 3,
//   womens: 4,
//   mens: 5
// };

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// Returns an array of items from the collections object
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  // Object.keys, return the keys of an object as an array
  collections => Object.keys(collections).map( key => collections[key])
)

// find collection.id matching the url parameter of our collection id map
export const selectCollection = collectionUrlParam => 
createSelector(
  [selectCollections],
  collections =>
    // collections.find(
    //   collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    // )
    collections[collectionUrlParam]
);