import React, { useContext } from 'react';

import CustomButton from '../../button/custom-button/custom-button.component';
import ProductPreviewButton from '../product-preview-button/product-preview-button.component';
import WishListButton from '../../button/wish-list-button/wish-list-button.component';
import { CartContext } from '../../../contexts/cart/cart.provider';
import { WishListContext } from '../../../contexts/wish-list/wish-list.provider';

import './product-item.styles.scss';

const ProductItem = ({ item }) => {

  const { name, imageUrl, price } = item;
  const { addItem } = useContext(CartContext);
  const { addWishItem } = useContext(WishListContext);

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
      <ProductPreviewButton item={item} />
      <WishListButton onClick={() => addWishItem(item)} />
    </div>
  );
};

export default ProductItem;
