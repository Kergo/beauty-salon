import React from 'react';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { confirmDocument } from '../../firebase/firebase.utils';
import styles from './our-family-card.module.css';
const OurFamilyCard = ({ registration }) => {
  const { firstName, lastName, email, phone, confirmed, id } = registration;

  return (
    <div className={styles['card']}>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      {!confirmed ? (
        <CustomButton onClick={() => confirmDocument('register-at-home', id)}>
          Confirm
        </CustomButton>
      ) : null}
    </div>
  );
};

export default OurFamilyCard;
