import React from 'react';

import './services-overview.styles.scss';

const ServicesOverview = ({ title, imageUrl, description }) => {
  return (
    <div className="services-overview">
      <div className="service-container">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="service-footer">
          <span className="name">{title}</span>
          <span className="description">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
