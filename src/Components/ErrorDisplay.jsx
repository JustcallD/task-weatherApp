import React from "react";
import styles from "../Styles/Components/ErrorDisplay.module.css";
const ErrorDisplay = ({ error }) => {
  return (
    <div className={styles.error}>
      <div className={styles.errormsg}>{error}</div>
    </div>
  );
};

export default ErrorDisplay;
