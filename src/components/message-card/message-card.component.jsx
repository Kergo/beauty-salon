import React from 'react';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { confirmDocument } from '../../firebase/firebase.utils';
import styles from './message-card.module.css';
const MessageCard = ({ message }) => {
  const { name, email, subject, text, confirmed, id } = message;

  return (
    <div className={styles['card']}>
      <p className={styles['paragraph']}>Name: {name}</p>
      <p className={styles['paragraph']}>Email: {email}</p>
      <p className={styles['paragraph']}>Subject: {subject}</p>
      <p className={styles['paragraph']}>Message: {text}</p>
      {!confirmed ? (
        <CustomButton onClick={() => confirmDocument('contacts', id)}>
          Confirm
        </CustomButton>
      ) : null}
    </div>
  );
};

export default MessageCard;
