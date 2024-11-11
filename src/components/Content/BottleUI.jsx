import React from 'react';
import * as styles from './BottleUI.module.css';
import Bottle from './../../public/images/Bottle.png';

// UI component
const BottleUI = () => {
  return (
    <div className={styles.main}>
      <img src={Bottle} alt="Бутылка" />
    </div>
  );
};

export default BottleUI;
