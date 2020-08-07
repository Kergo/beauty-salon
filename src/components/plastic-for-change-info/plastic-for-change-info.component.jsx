import React from 'react';
import PlasticForChangeParagraph from '../plastic-for-change-paragraph/plastic-for-change-paragraph.component';
import styles from './plastic-for-change-info.module.css';

const PlasticForChangeInfo = ({ info }) => {
  const { heading, infoHeader, imageUrl, paragraphs, rev } = info;
    
  return (
    <div>
      <h2 className={styles["main-heading"]}>{heading}</h2>
      <div className={rev ? styles["info-container"] : styles["info-container-rev"]}>
        <div className={styles["container-image"]}>
          <img src={imageUrl} alt="info-pic" />
        </div>
        <div className={styles["info-inner"]}>
          <h2 className={styles["info-header"]}>{infoHeader}</h2>
          {paragraphs.map((p, idx) => {              
              return <PlasticForChangeParagraph key={idx} paragraph={p} />
          })}
        </div>
      </div>
    </div>
  );
};

export default PlasticForChangeInfo;
