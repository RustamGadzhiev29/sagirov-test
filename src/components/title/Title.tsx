import React from "react";

import Button from "../button/Button";

import styles from "./Title.module.scss";

const Title: React.FC = () => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.title}>
        <h1>Путешествие</h1>
        <span>на красную планету</span>
      </div>
      <Button />
    </div>
  );
};

export default Title;
