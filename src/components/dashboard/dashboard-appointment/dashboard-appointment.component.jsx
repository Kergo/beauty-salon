import React, { useState, useEffect } from 'react';

import { firestore } from '../../../firebase/firebase.utils';
import AppointmentCard from '../../appointment/appointment-card/appointment-card.component';
import styles from './dashboard-appointment.module.css';

const DashboardAppointment = () => {
  const [data, setData] = useState([]);

  let actualDate = new Date();
  let startOfDayDate = new Date(
    actualDate.getFullYear(),
    actualDate.getMonth(),
    actualDate.getDate(),
    0,
    0,
    0
  );
  let endOfDayDate = new Date(
    actualDate.getFullYear(),
    actualDate.getMonth(),
    actualDate.getDate(),
    23,
    59,
    59
  );

  const refCol = firestore
    .collection('appointments')
    .where('startDate', '>=', startOfDayDate)
    .where('startDate', '<=', endOfDayDate)
    .orderBy('startDate');
  let unsubscribe = null;
  const fetchData = async () => {
    unsubscribe = refCol.onSnapshot(querySnapShot => {
      let data = [];
      querySnapShot.forEach(doc => data.push(doc.data()));
      setData(data);
    });
  };
  useEffect(() => {
    fetchData();

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  let nothingForToday = false;
  data.forEach(appointment => {
    if (appointment.confirmed) nothingForToday = true;
  });

  if (!nothingForToday) return <h1>You Have No Appointments For Today!</h1>;

  return (
    <div>
      <h1 className={styles['title']}>Appointments For Today</h1>
      <div className={styles['wrapper']}>
        {data.map((appointment, idx) =>
          appointment.confirmed ? (
            <AppointmentCard key={idx} appointment={appointment} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default DashboardAppointment;
