import React from 'react';
import InfoParagraph from '../info-paragraph/info-paragraph.component';
import CustomButton from '../custom-button/custom-button.component';
import { useHistory } from 'react-router-dom';
import styles from './info-container.module.css';

const InfoContainer = ({ info }) => {
  const { heading, infoHeader, imageUrl, paragraphs, rev, btn } = info;
  const history = useHistory();

  return (
    <div>
      <h2 className={styles['main-heading']}>{heading}</h2>
      <div
        className={
          !rev ? styles['info-container'] : styles['info-container-rev']
        }
      >
        <div className={styles['container-image']}>
          <img src={imageUrl} alt="info-pic" />
        </div>
        <div className={styles['info-inner']}>
          <h2 className={styles['info-header']}>{infoHeader}</h2>
          {paragraphs.map((p, idx) => {
            return <InfoParagraph key={idx} paragraph={p} />;
          })}
          {btn ? (
            <CustomButton onClick={() => history.replace(`/${btn.url}`)}>
              {btn.text}
            </CustomButton>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
