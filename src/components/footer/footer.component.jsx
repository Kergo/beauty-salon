import React from 'react';
import OpeningTime from '../opening-time/opening-time.component';

import './footer.styles.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <OpeningTime />
      </div>
    </div>
  );
};

export default Footer;
