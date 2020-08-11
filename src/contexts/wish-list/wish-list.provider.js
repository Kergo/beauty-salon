import React, { createContext, useState, useEffect } from 'react';

import { addRemoveItemFromWish } from './wish-list.utils';

export const WishListContext = createContext({
  wished: false,
  toggleWished: () => {},
  wishListItems: [],
  addWishItem: () => {},
});

const WishListProvider = ({ children }) => {
  const [wished, setWished] = useState(true);
  const [wishListItems, setWishListItems] = useState(
    JSON.parse(localStorage.getItem('wishList')) || []
  );

  const addWishItem = item =>
    setWishListItems(addRemoveItemFromWish(wishListItems, item));
  const toggleWished = () => setWished(!wished);

  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishListItems));
  }, [wishListItems]);

  return (
    <WishListContext.Provider
      value={{
        wished,
        toggleWished,
        wishListItems,
        addWishItem,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListProvider;
