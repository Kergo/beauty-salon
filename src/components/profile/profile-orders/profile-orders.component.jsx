/* eslint-disable array-callback-return */
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CurrentUserContext from '../../../contexts/current-user/current-user.context';
import CustomButton from '../../button/custom-button/custom-button.component';
import ProfileOrderOverview from '../profile-order-overview/profile-order-overview.component';
import styles from './profile-orders.module.css';

const ProfileOrders = () => {
  const [orders, setOrders] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setOrders(currentUser.purchasedProducts);
  }, [currentUser]);
  let history = useHistory();

  if (orders && orders.length) {
    return (
      <div className={styles['wrapper']}>
        <h1 className={styles['title']}>Orders</h1>
        {orders.map(order => {
          return <ProfileOrderOverview key={order.id} order={order} />;
        })}
      </div>
    );
  } else {
    return (
      <div className={styles['wrapper-no-orders']}>
        <h1 className={styles['no-orders']}>Ah so pity you haven't order anything by us yet...</h1>
        <h3 className={styles['no-orders-h3']}>Don't wait and check out our exclusive collection</h3>
        <CustomButton
          onClick={() => {
            history.push(`/products`);
          }}
        >
          Shop now
        </CustomButton>
      </div>
    );
  }
};

export default ProfileOrders;
