import React from 'react';

import ProductUpload from '../../components/product-upload/product-upload.component';

import './products.styles.scss';
import ProductsOverview from '../../components/products-overview/products-overview.component';

const ProductsPage = () => {
  return (
    <div>
      <ProductUpload />
      <ProductsOverview />
    </div>
  );
};

export default ProductsPage;
