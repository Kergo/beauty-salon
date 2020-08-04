import React, { useEffect, useContext } from 'react';
import ServicesDirectory from '../../components/services-directory/services-directory.component';
import ServicesContext from '../../contexts/services/services.context';
import Spinner from '../../components/spinner/spinner.component';

import './services.styles.scss';

const ServicesPage = () => {
  const servicesContext = useContext(ServicesContext);
  const { loading, services, getServices } = servicesContext;

  useEffect(() => {
    getServices();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="services-wrapper">
        <div className="services-page">
          <h1 className="services-page__title">Services</h1>
          <p className="services-page__description">
            <b>Beauty Salons The Ugly Duckling </b>will help you look great
            every day, every season and every occasion. Through our
            highly-qualified team you will achieve the vision you dreamed of.
            The most innovative face and body appliances, modern techniques,
            high quality products – rely on the long experience of the{' '}
            <b>The Ugly Duckling</b> beauty salon team.
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
  }
};

export default ServicesPage;
