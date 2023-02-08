import React from "react";

import { DataType } from "../../store/types";

import styles from "./Item.module.scss";

type PropsType = {
  index: number;
  data: DataType;
};
const Item = ({ index, data }: PropsType): React.ReactElement => {
  return (
    <div className={`${styles.item} ${styles[`item${index}`]}`}>
      <span className={styles.description}> description</span>
      <h2 className={styles.itemTitle}>{data.value}</h2>
      <span className={styles.description}> description</span>
    </div>
  );
};

export default Item;
