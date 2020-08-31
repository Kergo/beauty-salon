import React, { useState, useEffect } from 'react';
import { firestore } from '../../../firebase/firebase.utils';
import OurFamilyCard from '../../our-family-card/our-family-card.component';
import styles from './dashboard-our-family.module.css';

const DashboardOurFamily = () => {
  const [data, setData] = useState([]);

  const refCol = firestore
    .collection('register-at-home')
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

  let nothingForToday = false;
  data.forEach(registration => {
    if (!registration.confirmed) nothingForToday = true;
  });

  if (!nothingForToday) return <h1>You Have No Registrations For Today!</h1>;

  return (
    <div>
      <h1 className={styles['title']}>Registrations For Today</h1>
      <div className={styles['wrapper']}>
        {data.map((registration, idx) =>
          !registration.confirmed ? (
            <OurFamilyCard key={idx} registration={registration} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default DashboardOurFamily;
