/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import styles from "./Button.module.scss";

const Button = (): React.ReactElement => {
  return (
    <div className={styles.buttonLine}>
      <div className={styles.buttonBlock}>
        <a href="" className={styles.button}>
          {" "}
          Начать путешествие{" "}
        </a>
      </div>
      <div className={styles.diagonal} />
      <div className={styles.line} />
    </div>
  );
};

export default Button;
