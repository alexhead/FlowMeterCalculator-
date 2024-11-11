import React, { useState } from 'react';
import ContentUI from './ContentUI';

// Conomponent container for logic Calculator
const ContentContainer = () => {
  // user values
  const [impulseWeight, setImpulseWeight] = useState(0.024);
  const [volume5L, setVolume5L] = useState(5.0);

  const handleChangeImpulseWeight = (type = 'add') => {
    if (type === 'subtract') {
      setImpulseWeight((prev) => prev - 0.001);
    } else {
      setImpulseWeight((prev) => prev + 0.001);
    }
  };

  const handleChangeVolume5L = (type = 'add') => {
    if (type === 'subtract' && volume5L > 4.851) {
      setVolume5L((prev) => prev - 0.05);
    } else if (type === 'add' && volume5L < 5.149) {
      setVolume5L((prev) => prev + 0.05);
    }
  };

  const userValues = {
    impulseWeight: impulseWeight.toFixed(3),
    volume5L: volume5L.toFixed(3),
    handleChangeImpulseWeight: handleChangeImpulseWeight,
    handleChangeVolume5L: handleChangeVolume5L,
  };

  // calculate values

  const calculateValues = {
    volume10L: ((volume5L / 5) * 10).toFixed(3),
    volume12L: ((volume5L / 5) * 12 + 0.3).toFixed(3),
    volume19L: ((volume5L / 5) * 19 + 0.5).toFixed(3),
  };

  return (
    <ContentUI calculateValues={calculateValues} userValues={userValues} />
  );
};

export default ContentContainer;
