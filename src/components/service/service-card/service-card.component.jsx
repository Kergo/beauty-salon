import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import './service-card.styles.scss';

const ServiceCard = ({ title, description, imageUrl }) => {
  let history = useHistory();
  let match = useRouteMatch();
  // console.log(history);
  // console.log(match);

  return (
    <div
      className="service-card"
      onClick={() => {
        if (!match.params.type) {
          history.push(`/services/${title}`);
        } else {
          history.push(`${title}`);
        }
      }}
    >
      <div className="service-card__side service-card__side--front">
        <div
          className="service-card__picture"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          &nbsp;
        </div>
        <h3 className="service-card__heading">{title}</h3>
      </div>
      <div className="service-card__side service-card__side--back">
        <div className="service-card__description-box">
          <p className="service-card__description-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
