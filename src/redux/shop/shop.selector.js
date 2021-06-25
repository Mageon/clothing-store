// A “selector” is simply a function that accepts Redux state as an argument and returns data that is derived from that state.

import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)