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
  // return (
  //   <div className="services-overview">
  //     <div className="service-container">
  //       <div
  //         className="image"
  //         style={{ backgroundImage: `url(${imageUrl})` }}
  //       ></div>
  //       <div className="service-footer">
  //         <span className="name">{title}</span>
  //         <span className="description">{description}</span>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default ServicesDirectory;
