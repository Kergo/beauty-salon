import React from 'react';
import formatDate from '../format-date/index.js';
import styles from './appointment-card.module.css';
const AppointmentCard = ({ appointment }) => {
  const { name, email, phone, type, startDate } = appointment;
  let date = formatDate(startDate);
  return (
    <div className={styles['card']}>
      <p>{name}</p>
      <p>{phone}</p>
      <p>{type}</p>
      <p>{date}</p>
      <p>{email}</p>
    </div>
  );
};

export default AppointmentCard;
