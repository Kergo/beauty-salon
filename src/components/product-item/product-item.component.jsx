import React, { useContext } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { CartContext } from '../../contexts/cart/cart.provider';

import './product-item.styles.scss';

const ProductItem = ({ item }) => {
  const { name, imageUrl, price } = item;
  const { addItem } = useContext(CartContext);
  // console.log(item)
  return (
    <div className="product-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl}), url('https://i.ya-webdesign.com/images/blank-price-tag-png-3.png')`,
        }}
      />
      <div className="product-footer">
        <span className="name">{name}</span>
        <span className="price">€{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default ProductItem;
