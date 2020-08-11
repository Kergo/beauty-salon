import React from 'react';
import formatDate from '../format-date/index.js';
import styles from './profile-order-overview.module.css';

const ProfileOrderOverview = ({ order }) => {
  let date = formatDate(order.createdAt)
  
  return (
    <div className={styles['ordered']}>
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Status</th>
            <th>Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{order.id}</th>
            <th>{!order.delivered ? 'In progress' : 'completed'}</th>
            <th>{date}</th>
            <th>€{Math.round(order.totalAmount * 100) / 100}</th>
          </tr>
        </tbody>
      </table>
      {/* <h4>Order Number: {order.id}</h4>
      <h4>Total Amount: €{order.totalAmount}</h4>
      <h4>Date of order: {formated}</h4> */}
    </div>
  );
};

export default ProfileOrderOverview;
