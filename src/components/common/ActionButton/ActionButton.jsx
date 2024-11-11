import React, { useEffect } from 'react';
import * as styles from './ActionButton.module.css';
import cn from 'classnames';

// UI component
// 'subtract' - минус
// 'add' - плюс
const ActionButton = ({ children, action, type = 'add' }) => {
  return (
    <div
      className={
        type === 'subtract'
          ? cn(styles.buttonBlock, styles.buttonBlock_subtract)
          : styles.buttonBlock
      }
    >
      <button onClick={action}>{children}</button>
    </div>
  );
};

export default ActionButton;
