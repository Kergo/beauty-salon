import React from 'react';
import { formatDate, formatTime } from '../format-date/index.js';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { confirmDocument } from '../../firebase/firebase.utils';
import styles from './appointment-card.module.css';
const AppointmentCard = ({ appointment }) => {
  const { name, email, phone, type, startDate, confirmed, id } = appointment;
  let date = formatDate(startDate);
  let time = formatTime(startDate);

  return (
    <div className={styles['card']}>
      <p className={styles['paragraph']}>Name: {name}</p>
      <p className={styles['paragraph']}>Phone: {phone}</p>
      <p className={styles['paragraph']}>Service: {type}</p>
      <p className={styles['paragraph']}>Date: {date}</p>
      <p className={styles['paragraph']}>Time: {time}</p>
      <p className={styles['paragraph']}>Email: {email}</p>
      {!confirmed ? (
        <CustomButton onClick={() => confirmDocument('appointments', id)}>
          Confirm
        </CustomButton>
      ) : null}
    </div>
  );
};

export default AppointmentCard;
