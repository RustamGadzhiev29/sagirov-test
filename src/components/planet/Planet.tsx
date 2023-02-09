import React from "react";

import mars from "../../common/assets/images/mars.png";

import styles from "./Planet.module.scss";

const Planet: React.FC = () => {
  return (
    <div className={styles.planet}>
      <img src={mars} alt="" />
    </div>
  );
};

export default Planet;
