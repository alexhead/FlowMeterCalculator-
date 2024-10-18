import React from "react";
import * as styles from "./App.module.css";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

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
      <Content />
      </div>
      <div className={styles.main__footer}>
      <Footer />
      </div>
    </div>
  );
};


export default App;
