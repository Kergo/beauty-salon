import React from 'react';

import ProductItem from '../product-item/product-item.component';

import './product-preview.styles.scss';

const ProductPreview = ({ title, items }) => {
  return (
    <div className="product-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, ...itemProps}) => (
            <ProductItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default ProductPreview;
