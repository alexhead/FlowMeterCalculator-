import React from 'react';
import * as styles from './Header.module.css';
import button from './../../public/images/menuButton.png';
import title from './../../public/images/Title.png';
import logo from './../../public/images/Logo.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.header__title}>
        <h2>Калькулятор для настройки налива</h2>
      </div>
      <div onClick={() => alert('Menu')} className={styles.header__button}>
        <img src={button} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
