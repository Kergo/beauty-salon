import React, { useEffect, useContext } from 'react';
import ServicesDirectory from '../../components/services-directory/services-directory.component';
import ServicesContext from '../../contexts/services/services.context';

import './services.styles.scss';

const ServicesPage = () => {
  const servicesContext = useContext(ServicesContext);
  const { services, getServices } = servicesContext;  

  useEffect(() => {
    getServices();
    // eslint-disable-next-line
  }, []);

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
      <div className="services-container">
        {services.map(service => (
          <ServicesDirectory
            key={service.id}
            title={service.title}
            imageUrl={service.imageUrl}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
