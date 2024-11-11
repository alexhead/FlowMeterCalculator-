import React from 'react';

/**
 * UI component for display calculated values
 * @param {*} values - all values litres valve
 * @returns
 */
const CalculatedValuesUI = ({ values }) => {
  return (
    <div>
      <div>{values.volume10L}</div>
      <div>{values.volume12L}</div>
      <div>{values.volume19L}</div>
    </div>
  );
};

export default CalculatedValuesUI;
