import React from "react";
import styles from "../Styles/Components/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logocontainer}>
        <h2 className={styles.logo}>Logo</h2>
      </div>
      <div className={styles.navigation}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/cities">Cities</a>
          </li>
          <li>
            <a href="/areas">Areas</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
