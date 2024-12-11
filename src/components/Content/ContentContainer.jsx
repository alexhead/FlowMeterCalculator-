import React, { useState } from 'react';
import ContentUI from './ContentUI';

/**
 * Container component for main logic calc app
 * @returns JSX
 */
const ContentContainer = () => {
  /**
   * Calculating
   */
  const [impulseWeight, setImpulseWeight] = useState(0.024);
  const [volume5L, setVolume5L] = useState(5.0);

  const onChangeImpulseWeight = (type = 'add') => {
    if (type === 'subtract') {
      setImpulseWeight((prev) => prev - 0.001);
    } else {
      setImpulseWeight((prev) => prev + 0.001);
    }
  };

  const onChangeVolume5L = (type = 'add') => {
    if (type === 'subtract' && volume5L > 4.851) {
      setVolume5L((prev) => prev - 0.05);
    } else if (type === 'add' && volume5L < 5.149) {
      setVolume5L((prev) => prev + 0.05);
    }
  };

  //values
  const values = {
    impulseWeight: impulseWeight.toFixed(3),
    volume5L: volume5L.toFixed(3),
    volume10L: ((volume5L / 5) * 10).toFixed(3),
    volume12L: ((volume5L / 5) * 12 + 0.3).toFixed(3),
    volume19L: ((volume5L / 5) * 19 + 0.5).toFixed(3),
    volume3L: ((volume5L / 5) * 3).toFixed(3),
  };

  // actions
  const actions = {
    onChangeImpulseWeight: onChangeImpulseWeight,
    onChangeVolume5L: onChangeVolume5L,
  };

  return <ContentUI values={values} actions={actions} />;
};

export default ContentContainer;
