import React from 'react';
import * as styles from './InputValuesUI.module.css';
import ActionButton from '../common/ActionButton/ActionButton';

// UI component
const InputValuesUI = ({ values, actions }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__impulseButtonBlock}>
        <ActionButton
          type="subtract"
          action={() => {
            actions.onChangeImpulseWeight('subtract');
          }}
        >
          Minus
        </ActionButton>
        <div>{values.impulseWeight}</div>
        <ActionButton
          type="add"
          action={() => actions.onChangeImpulseWeight('add')}
        >
          Plus
        </ActionButton>
      </div>
      <div className={styles.main__volumeButtonBlock}>
        <button onClick={() => actions.onChangeVolume5L('subtract')}>
          Minus
        </button>
        <div>{values.volume5L}</div>
        <button onClick={() => actions.onChangeVolume5L('add')}>Plus</button>
      </div>
    </div>
  );
};

export default InputValuesUI;
