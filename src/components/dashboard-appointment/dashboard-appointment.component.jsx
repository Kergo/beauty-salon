import React, { useState, useEffect } from 'react';

import { firestore } from '../../firebase/firebase.utils';
import AppointmentCard from '../appointment-card/appointment-card.component';

const DashboardAppointment = () => {
  const [data, setData] = useState([]);

  const refCol = firestore.collection('appointments');
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
  }, []);

  return (
    <div>
      {data.map((appointment, idx) => (
        <AppointmentCard key={idx} appointment={appointment} />
      ))}
    </div>
  );
};

export default DashboardAppointment;
