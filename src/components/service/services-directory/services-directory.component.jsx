import React from 'react';
import ServiceCard from '../service-card/service-card.component';

import './services-directory.styles.scss';

const ServicesDirectory = ({ title, imageUrl, description }) => {
  return (
      <ServiceCard
        title={title}
        imageUrl={imageUrl}
        description={description}
      />
  );
};

export default ServicesDirectory;
