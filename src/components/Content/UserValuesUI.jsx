import React from 'react';
import * as styles from './UserValuesUI.module.css';
import ActionButton from '../common/ActionButton/ActionButton';

// UI component
const UserValuesUI = ({ userValues }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__impulseButtonBlock}>
        <ActionButton
          type="subtract"
          action={() => {
            userValues.handleChangeImpulseWeight('subtract');
          }}
        >
          Minus
        </ActionButton>
        <div>{userValues.impulseWeight}</div>
        <ActionButton
          type="add"
          action={() => userValues.handleChangeImpulseWeight('add')}
        >
          Plus
        </ActionButton>
      </div>
      <div className={styles.main__volumeButtonBlock}>
        <button onClick={() => userValues.handleChangeVolume5L('subtract')}>
          Minus
        </button>
        <div>{userValues.volume5L}</div>
        <button onClick={() => userValues.handleChangeVolume5L('add')}>
          Plus
        </button>
      </div>
    </div>
  );
};

export default UserValuesUI;
