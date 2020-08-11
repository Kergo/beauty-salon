import React, { useContext } from 'react';
import { WishListContext } from '../../contexts/wish-list/wish-list.provider.js';
import ProductItem from '../../components/product-item/product-item.component';
import styles from './wish-list.module.css'

const WishListPage = () => {
  const { wishListItems } = useContext(WishListContext);

  return (
    <div className={styles["wish-list-wrapper"]}>
      {wishListItems.map(item => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default WishListPage;
