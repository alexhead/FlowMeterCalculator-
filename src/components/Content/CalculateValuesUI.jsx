import React from 'react';

// UI component
const CalculateValuesUI = ({ values }) => {
  return (
    <div>
      <div>{values.volume10L}</div>
      <div>{values.volume12L}</div>
      <div>{values.volume19L}</div>
    </div>
  );
};

export default CalculateValuesUI;
