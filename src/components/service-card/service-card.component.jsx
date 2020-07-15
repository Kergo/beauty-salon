import React from 'react';
import { withRouter } from 'react-router-dom';

import './service-card.styles.scss';

const ServiceCard = ({ history, match, title, description, imageUrl }) => {
    console.log(history)
    console.log(match);
    
  return (
    <div
      className="service-card"
      onClick={() => history.push(`${match.url}/${title}`)}
    >
      <div className="service-card__side service-card__side--front">
        <div className="service-card__picture" style={{
            backgroundImage: `url(${imageUrl})`
        }}>&nbsp;</div>
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

export default withRouter(ServiceCard);
