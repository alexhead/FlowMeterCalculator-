import React from 'react';
import CircleIndicator from '../common/CircleIndicator/CircleIndicator';
import * as styles from './CalculatedValuesUI.module.css';

/**
 * UI component for display calculated values
 * @param {*} values - all values litres valve
 * @returns
 */
const CalculatedValuesUI = ({ values }) => {
  return (
    <div className={styles.main}>
      <CircleIndicator>{values.volume5L}</CircleIndicator>
      <CircleIndicator>{values.volume10L}</CircleIndicator>
      <CircleIndicator>{values.volume12L}</CircleIndicator>
      <CircleIndicator>{values.volume19L}</CircleIndicator>
      <CircleIndicator>{values.volume3L}</CircleIndicator>
    </div>
  );
};

export default CalculatedValuesUI;
