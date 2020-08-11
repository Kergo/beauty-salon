import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase/firebase.utils';
import AppointmentCard from '../appointment-card/appointment-card.component';
import styles from './dashboard-pending-for-review.module.css';
const DashboardPendingForReview = () => {
  const [data, setData] = useState([]);

  const refCol = firestore.collection('appointments').orderBy('createdAt');
  let unsubscribe = null;
  const fetchData = async () => {
    unsubscribe = refCol.onSnapshot(querySnapShot => {
      let data = [];
      querySnapShot.forEach(doc => data.push({ ...doc.data(), id: doc.id }));
      setData(data);
    });
  };
  useEffect(() => {
    fetchData();

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 className={styles['title']}>Pendings Appointments For Review</h1>
      <div className={styles['wrapper']}>
        {data.map((appointment, idx) =>
          !appointment.confirmed ? (
            <AppointmentCard key={idx} appointment={appointment} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default DashboardPendingForReview;
