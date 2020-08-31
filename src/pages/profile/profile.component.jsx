import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfileNav from '../../components/profile/profile-nav/profile-nav.component';
import ProfileOrders from '../../components/profile/profile-orders/profile-orders.component';
import styles from './profile.module.css';
import ProfileOverview from '../../components/profile/profile-overview/profile-overview.component';
import ProfileSettings from '../../components/profile/profile-settings/profile-settings.component';

const ProfilePage = () => {

  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper-left']}>
        <ProfileNav />
        {/* <h2>Be Part Of the Family</h2> */}
      </div>
      <div className={styles['wrapper-right']}>
        <Switch>
          <Route exact path="/profile" component={ProfileOverview} />
          <Route path="/profile/orders" component={ProfileOrders} />
          <Route path="/profile/settings" component={ProfileSettings} />
        </Switch>

      </div>
    </div>
  );
};

export default ProfilePage;
