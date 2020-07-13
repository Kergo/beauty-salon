import React from 'react';

import CustomButton from '../custom-button/custom-button.component'

import './product-item.styles.scss';

const ProductItem = ({ item }) => {
  const {name, imageUrl, price } = item;
  // console.log(item);
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
        <span className="price">€{price}</span>
      </div>
      <CustomButton inverted>Add to cart</CustomButton>
    </div>
  );
};

export default ProductItem;
