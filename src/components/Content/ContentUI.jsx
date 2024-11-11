import React from 'react';
import * as styles from './ContentUI.module.css';
import CalculatedValuesUI from './CalculatedValuesUI';
import InputValuesUI from './InputValuesUI';
import BottleUI from './BottleUI';

/**
 * Main UI component for styling blocks
 * @param {*} values - all values litres valve
 * @param {*} actions -  actiona for change valve and flow impulse
 * @returns
 */
const ContentUI = ({ values, actions }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__blockValues}>
        <div className={styles.main__blockValues__userValues}>
          <InputValuesUI values={values} actions={actions} />
        </div>
        <div className={styles.main__blockValues__calculateValues}>
          <CalculatedValuesUI values={values} />
        </div>
      </div>
      <div className={styles.main__bottle}>
        <BottleUI />
      </div>
    </div>
  );
};

export default ContentUI;
