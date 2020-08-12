import React from 'react';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { confirmDocument } from '../../firebase/firebase.utils';
import styles from './our-family-card.module.css';
const OurFamilyCard = ({ registration }) => {
  const { firstName, lastName, email, phone, confirmed, id } = registration;

  return (
    <div className={styles['card']}>
      <p className={styles['paragraph']}>First Name: {firstName}</p>
      <p className={styles['paragraph']}>Last Name: {lastName}</p>
      <p className={styles['paragraph']}>Email: {email}</p>
      <p className={styles['paragraph']}>Phone: {phone}</p>
      {!confirmed ? (
        <CustomButton onClick={() => confirmDocument('register-at-home', id)}>
          Confirm
        </CustomButton>
      ) : null}
    </div>
  );
};

export default OurFamilyCard;
