import React from 'react';
import * as styles from './BottleUI.module.css';
import Bottle from './../../public/images/Bottle.png';

/**
 * UI component for display current water level (graphical)
 * @param {*} values - all values litres valve
 * @returns
 */
const BottleUI = () => {
  return (
    <div className={styles.main}>
      <img src={Bottle} alt="Бутылка" />
    </div>
  );
};

export default BottleUI;
