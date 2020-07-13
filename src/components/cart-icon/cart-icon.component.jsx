import React, { useContext } from 'react';

import { CartContext } from '../../contexts/cart/cart.provider';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { cartItemsCount, toggleHidden } = useContext(CartContext);
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
