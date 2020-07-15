import React, { useEffect, useState } from 'react';
import ServicesOverview from '../../components/services-overview/services-overview.component';
import { firestore } from '../../firebase/firebase.utils';

import './services.styles.scss';

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  console.log(services);
  const getProducts = async () => {
    const data = [];
    try {
      await firestore
        .collection('services')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            data.push({ id: data.length, title: doc.id, ...doc.data() });
          });
          setServices(data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="services-wrapper">
      <div className="services-page-title">
        <h1 className="title">Services</h1>
        <p className="description">
          <b>Beauty Salons The Ugly Duckling </b>will help you look great every
          day, every season and every occasion. Through our highly-qualified
          team you will achieve the vision you dreamed of. The most innovative
          face and body appliances, modern techniques, high quality products –
          rely on the long experience of the The Ugly Duckling beauty salon
          team.
        </p>
      </div>
      {services.map(service => (
        <ServicesOverview
          key={service.id}
          title={service.title}
          imageUrl={service.imageUrl}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServicesPage;
