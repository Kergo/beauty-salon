import React, { createContext, useState, useEffect } from 'react';

import {
  addItemToWishList,
  removeItemFromWishList,
} from './wish-list.utils';

export const WishListContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  wishListItems: [],
  addWishItem: () => {},
  removeWishItem: () => {},
});

const WishListProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [wishListItems, setWishListItems] = useState(
    JSON.parse(localStorage.getItem('wishList')) || []
  );

  const addWishItem = item => setWishListItems(addItemToWishList(wishListItems, item));
  const removeWishItem = item => setWishListItems(removeItemFromWishList(wishListItems, item));
  const toggleHidden = () => setHidden(!hidden);

  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishListItems));
  }, [wishListItems]);

  return (
    <WishListContext.Provider
      value={{
        hidden,
        toggleHidden,
        wishListItems,
        addWishItem,
        removeWishItem,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListProvider;
