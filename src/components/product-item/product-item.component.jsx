import React from 'react';

import './product-item.styles.scss';

const ProductItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="product-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="product-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default ProductItem;
