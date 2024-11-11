import React from 'react';
import * as styles from './ContentUI.module.css';
import CalculateValuesUI from './CalculateValuesUI';
import UserValuesUI from './UserValuesUI';
import BottleUI from './BottleUI';

// UI component
const ContentUI = ({ calculateValues, userValues }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__blockValues}>
        <div className={styles.main__blockValues__userValues}>
          <UserValuesUI userValues={userValues} />
        </div>
        <div className={styles.main__blockValues__calculateValues}>
          <CalculateValuesUI calculateValues={calculateValues} />
        </div>
      </div>
      <div className={styles.main__bottle}>
        <BottleUI />
      </div>
    </div>
  );
};

export default ContentUI;
