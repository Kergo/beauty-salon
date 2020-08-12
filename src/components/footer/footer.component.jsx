import React from 'react';
import OpeningTime from '../opening-time/opening-time.component';

import ContactDetails from '../contact-details/contact-details.component';
import './footer.styles.scss';
import SocialBar from '../social-bar/social-bar.component';

const Footer = () => {
  return (
    <div className="footer">
        <SocialBar />
      <div className="footer-wrapper">
        <OpeningTime />
        <div>
        <img src="https://firebasestorage.googleapis.com/v0/b/beauty-salon-8a9d4.appspot.com/o/images%2Fuglyducklinn.png?alt=media&token=2cb9bc79-1316-4cbc-9df3-7cda8504f6a6" alt="ugly-duckling"/>
        </div>
        <div className="footer-contact-container">
        <ContactDetails />
        </div>
      </div>
      <div className='footer-all-rights'>
        <span>Copyright 2020 The Ugly Duckling. All rights reserved.</span> <span>Created by <b>Sergey Kamenov</b></span>
      </div>
    </div>
  );
};

export default Footer;
