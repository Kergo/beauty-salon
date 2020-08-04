import React, { useContext, useEffect } from 'react';
import ServicesContext from '../../contexts/services/services.context';
import ServiceType from '../service-type/service-type.component';
import ServicesDirectory from '../services-directory/services-directory.component';
import Spinner from '../spinner/spinner.component';

const ServiceOverview = ({ match }) => {
  const servicesContext = useContext(ServicesContext);
  const {
    loading,
    services,
    service,
    getService,
    getServices,
  } = servicesContext;

  useEffect(() => {
    getServices();
    getService(match.params.type);
    // eslint-disable-next-line
  }, [match.params.type]);

  if (loading) {
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
        <Spinner />
      </div>
    );
  } else {
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
      </div>
    );
  }
};

export default ServiceOverview;
