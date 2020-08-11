import React from 'react';
import { formatDate, formatTime } from '../format-date/index.js';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { confirmAppointmentDocument } from '../../firebase/firebase.utils';
import styles from './appointment-card.module.css';
const AppointmentCard = ({ appointment }) => {
  const { name, email, phone, type, startDate, confirmed, id } = appointment;
  let date = formatDate(startDate);
  let time = formatTime(startDate);

  return (
    <div className={styles['card']}>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Service: {type}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Email: {email}</p>
      {!confirmed ? (
        <CustomButton onClick={() => confirmAppointmentDocument(id)}>
          Confirm
        </CustomButton>
      ) : null}
    </div>
  );
};

export default AppointmentCard;
