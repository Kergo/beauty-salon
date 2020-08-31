import React from 'react';
import styles from './order-completed.module.css';
import ProductItem from '../../components/product/product-item/product-item.component';

const OrderCompletedPage = props => {
  const { cartItems, price } = (props.location && props.location.state) || {};

  return (
    <div className={styles['container']}>
      <h1>Your Order Is Completed!</h1>
      <h1>Thank you for your purchase!</h1>
      <h4>Products you ordered:</h4>
      <div className={styles["products"]}>

      {cartItems.map(item => {
          return <ProductItem key={item.id} item={item} />
        })}
        </div>
      <h3>Amount: €{Math.round(price * 100) / 100}</h3>
      <p>Our team is working very hard to get all orders deliverd on time.</p>
      <p>Please note that delivery estimated at 3-5 working days from order date*.</p>
    </div>
  );
};

export default OrderCompletedPage;
