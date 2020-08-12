import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './form-submited.module.css';
import ContactDetails from '../contact-details/contact-details.component';

const FormSubmited = () => {
  let history = useHistory();

  useEffect(() => {
    console.log('useEffect');

    let timer = setInterval(() => {
      history.push('/');
    }, 5000);
    return () => clearInterval(timer);
    //eslint-disable-next-line
  }, []);
  return (
    <div className={styles['wrapper']}>
      <h1 className={styles['title']}>
        Thank you for using our online form services!
      </h1>
      <h2>We will contact you as soon as possible to confirm your request.</h2>
      <h3>If you have any questions please don't hasitate to contact us.</h3>
      <div className={styles['contact-wrapper']}>
        <ContactDetails />
      </div>
    </div>
  );
};

export default FormSubmited;
