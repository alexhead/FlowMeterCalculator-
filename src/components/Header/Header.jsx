import React from 'react';
import * as styles from './Header.module.css';
import logo from './../../public/images/menuButton.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>Logo</div>
      <div className={styles.header__title}>FlowMeterCalc</div>
      <div onClick={() => alert('Menu')} className={styles.header__button}>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
