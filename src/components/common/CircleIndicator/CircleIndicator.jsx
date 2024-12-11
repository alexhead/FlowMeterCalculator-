import React from 'react';
import * as styles from './CircleIndicator.module.css';

const CircleIndicator = (props) => {
  return (
    <div className={styles.circle}>
      <div className={styles.circle__text}>{props.children}</div>
    </div>
  );
};

export default CircleIndicator;
