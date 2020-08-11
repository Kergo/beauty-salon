import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductUpload from '../../components/product-upload/product-upload.component';
import DashboardNav from '../../components/dashboard-nav/dashboard-nav.component';
import DashboardAppointment from '../../components/dashboard-appointment/dashboard-appointment.component';
import styles from './dashboard.module.css';
import DashboardPendingForReview from '../../components/dashboard-pending-for-review/dashboard-pending-for-review.component';

const DashboardPage = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper-left']}>
        <DashboardNav />
      </div>
      <div className={styles['wrapper-right']}>
        <Switch>
          <Route
            exact
            path="/dashboard"
            component={DashboardPendingForReview}
          />
          <Route
            path="/dashboard/appointments"
            component={DashboardAppointment}
          />
          <Route path="/dashboard/add-product" component={ProductUpload} />
        </Switch>
      </div>
    </div>
  );
};

export default DashboardPage;
