import React from "react";

import { DataType } from "../../store/types";

import styles from "./Item.module.scss";

type PropsType = {
  index: number;
  data: DataType;
};
const Item: React.FC<PropsType> = ({ index, data }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={`${styles.item} ${styles[`item${index}`]}`}>
        <span className={styles.description}>
          {" "}
          {data.description && data.description[0]}
        </span>
        <h2 className={styles.itemTitle}>{data.value}</h2>
        <span className={styles.description}>
          {" "}
          {data.description && data.description[1]}
        </span>
      </div>
    </div>
  );
};

export default Item;
