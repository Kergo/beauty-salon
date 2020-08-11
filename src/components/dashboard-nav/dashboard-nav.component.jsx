import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styles from './dashboard-nav.module.css';

const DashboardNav = () => {
  let history = useHistory();
  let match = useRouteMatch();

  return (
    <div className={styles['dashboard-nav-wrapper']}>
            <div className={styles['option']}
        onClick={() => {
          history.push(`${match.url}/appointments`);
        }}
      >
        Appointments
      </div>
      <div className={styles['option']}
        onClick={() => {
          history.push(`${match.url}/messages`);
        }}
      >
        Messages
      </div>
      <div className={styles['option']}
        onClick={() => {
          history.push(`${match.url}/add-product`);
        }}
      >
        Add Product
      </div>
    </div>
  );
};

export default DashboardNav;
