export const addRemoveItemFromWish = (wishItems, item) => {
  const existingCartItem = wishItems.find(
    wishItem => wishItem.id === item.id
  );

  if (existingCartItem) {
    return wishItems.filter(wishItem => wishItem.id !== item.id);
  }

  return [...wishItems, { ...item }];
};
