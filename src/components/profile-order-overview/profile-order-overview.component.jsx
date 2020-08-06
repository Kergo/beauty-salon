import React from 'react';
import styles from './profile-order-overview.module.css';

const ProfileOrderOverview = ({ order }) => {

  let timestamp = order.createdAt;
  let myDate = timestamp.toDate().getDate();
  let myMonth = timestamp.toDate().getMonth();
  let myYear = timestamp.toDate().getFullYear();
  let formated = `${myDate}-${myMonth}-${myYear}`;

  return (
    <div className={styles['ordered']}>
      <h4>Order Number: {order.id}</h4>
      <h4>Date of order: {formated}</h4>
    </div>
  );
};

export default ProfileOrderOverview;
