export const addItemToWishList = (wishListItems, wishItemToAdd) => {
    console.log('Add to wish list', wishItemToAdd);
    console.log('Wish list', wishListItems);
  const existingCartItem = wishListItems.find(
    cartItem => cartItem.item.id === wishItemToAdd.item.id
    );
  console.log(existingCartItem);
  

  if (existingCartItem) {
    removeItemFromWishList(wishListItems, wishItemToAdd);
  }

  return [...wishListItems, { ...wishItemToAdd, quantity: 1 }];
};

export const removeItemFromWishList = (wishListItems, wishItemToRemove) => {
  const existingCartItem = wishListItems.find(
    cartItem => cartItem.item.id === wishItemToRemove.item.id
  );
  console.log('Remove: ',existingCartItem);


  if (existingCartItem.quantity === 1) {
    return wishListItems.filter(
      cartItem => cartItem.item.id !== wishItemToRemove.item.id
    );
  }
};
