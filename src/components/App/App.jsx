import React from 'react';
import * as styles from './App.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContentContainer from '../Content/ContentContainer';

/**
 * Main component of the application.
 * @returns JSX.Element
 */

const App = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__header}>
        <Header />
      </div>
      <div className={styles.main__content}>
        <ContentContainer />
      </div>
      <div className={styles.main__footer}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
