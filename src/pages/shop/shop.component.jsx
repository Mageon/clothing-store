import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import './shop.styles.scss';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {/* {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))} */}
    <CollectionsOverview/>
  </div>
);
  
// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections
// });

// export default connect(mapStateToProps)(ShopPage);

export default ShopPage;
