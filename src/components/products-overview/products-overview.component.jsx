import React from 'react';
import ProductItem from '../product-item/product-item.component';
import './products-overview.styles.scss';

const ProductsOverview = ({ products }) => {
  return (
    <div className="products-overview">
      <h2 className="title">{products.title}</h2>
      <div className="overview">
        {products.items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <ProductItem key={id} item={itemProps} />
          ))}
      </div>
    </div>
  );
};
export default ProductsOverview;
