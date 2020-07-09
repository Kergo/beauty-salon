import React from 'react';

import CollectionItem from '../../components/product-item/product-item.component';

import './products-collection.styles.scss';

const ProductsCollectionPage = ({ match }) => {
    console.log(match);
  return (
    <div className="collection-page">
      <h2>ProductsCollectionPage</h2>
    </div>
  );
};

export default ProductsCollectionPage;
