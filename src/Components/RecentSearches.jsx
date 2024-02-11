import React from "react";
import styles from "../Styles/Components/RecentSearches.module.css";
import { FiWind } from "react-icons/fi";
import { RiTempHotFill } from "react-icons/ri";

const RecentSearches = ({ recentSearches }) => {
  console.log("recentSearches", recentSearches);
  return (
    <div className={styles.recentSearches}>
      <h3 className={styles.heading}>Recent Searches</h3>
      {recentSearches.map((search, index) => (
        <div key={index} className={styles.searchItem}>
          <div className={styles.searchDetails}>
            <strong className={styles.label}>City:</strong>
            <span className={styles.value}>{search.city}</span>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.searchDetails}>
              <div className={styles.icon}>
                <FiWind />
              </div>
              <span className={styles.value}>{search.windSpeed}</span>
            </div>
            <div className={styles.searchDetails}>
              <div className={styles.icon}>
                <RiTempHotFill />
              </div>

              <span className={styles.value}>{search.temperature}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentSearches;
