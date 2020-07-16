import React from 'react';

const ServiceItem = ({ name, price }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default ServiceItem;
