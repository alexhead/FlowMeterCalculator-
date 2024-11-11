import React from 'react';

// UI component
const CalculateValuesUI = ({ calculateValues }) => {
  return (
    <div>
      <div>{calculateValues.volume10L}</div>
      <div>{calculateValues.volume12L}</div>
      <div>{calculateValues.volume19L}</div>
    </div>
  );
};

export default CalculateValuesUI;
