import React from 'react';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { confirmDocument } from '../../firebase/firebase.utils';
import styles from './message-card.module.css';
const MessageCard = ({ message }) => {
  const { name, email, subject, text, confirmed, id } = message;

  return (
    <div className={styles['card']}>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Subject: {subject}</p>
      <p>Message: {text}</p>
      {!confirmed ? (
        <CustomButton onClick={() => confirmDocument('contacts', id)}>
          Confirm
        </CustomButton>
      ) : null}
    </div>
  );
};

export default MessageCard;
