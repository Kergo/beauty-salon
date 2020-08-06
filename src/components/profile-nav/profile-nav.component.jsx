import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styles from './profile-nav.module.css';

const ProfileNav = () => {
  let history = useHistory();
  let match = useRouteMatch();

  return (
    <div className={styles['profile-nav-wrapper']}>
      <div className={styles['option']}
        onClick={() => {
          history.push(`${match.url}/settings`);
        }}
      >
        Settings
      </div>
      <div className={styles['option']}
        onClick={() => {
          history.push(`${match.url}/orders`);
        }}
      >
        My Orders
      </div>
    </div>
  );
};

export default ProfileNav;
