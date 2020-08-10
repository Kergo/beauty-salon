import React from 'react';
import styles from './appointment-completed.module.css';
import ContactDetails from '../contact-details/contact-details.component';

const AppointmentCompleted = () => {
  return (
    <div className={styles['wrapper']}>
      <h1>Thank you for using our online appointment services!</h1>
      <h2>
        We will contact you as soon as possible to confirm your appointment.
      </h2>
      <h3>
        As a courtesy, we ask for 24 hours notice on all cancelled appointments.
      </h3>
      <h4>If you have any questions please don't hasitate to contact us.</h4>
      <div className={styles["contact-wrapper"]}>
        <ContactDetails />
      </div>
    </div>
  );
};

export default AppointmentCompleted;
