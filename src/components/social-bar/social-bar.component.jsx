import React from 'react';
import styles from './social-bar.module.css';

const SocialBar = () => {
  return (
    <div className={styles['wrapper']}>
      <span className={styles['title']}>Join Us On Social</span>
      <a
        className={styles['link']}
        href="https://www.instagram.com/TheUglyDuckling"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram fa-3x"></i>
      </a>
      <a
        className={styles['link']}
        href="https://www.facebook.com/TheUglyDuckling"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-square fa-3x"></i>
      </a>
      <a
        className={styles['link']}
        href="https://www.pinterest.com/TheUglyDuckling"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-pinterest-square fa-3x"></i>
      </a>
      <a
        className={styles['link']}
        href="https://www.twitter.com/TheUglyDuckling"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter-square fa-3x"></i>
      </a>
    </div>
  );
};

export default SocialBar;
