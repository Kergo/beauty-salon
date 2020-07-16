import React, { useContext, useEffect } from 'react';
import ServicesContext from '../../contexts/services/services.context';
import { firestore } from '../../firebase/firebase.utils';
import ServiceType from '../service-type/service-type.component';
import ServicesDirectory from '../services-directory/services-directory.component';

const ServiceOverview = ({ match }) => {
  //   console.log(match.params.type);
  //   console.log(theOne);

  const servicesContext = useContext(ServicesContext);
  const { services, service, getService, getServices } = servicesContext;

  service.map(type => {
    console.log(type);
  });
  useEffect(() => {
      getServices()
    getService(match.params.type);
    // eslint-disable-next-line
  }, [match.params.type]);
  return (
    <div>
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
      {service.map(type => (
        <ServiceType key={type[0]} title={type[0]} details={type[1]} />
      ))}
      Overview
    </div>
  );
};

export default ServiceOverview;
