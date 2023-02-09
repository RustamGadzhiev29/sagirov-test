import React, { useEffect } from "react";

import { setDataTC } from "../../store/slice";
import { useAppSelector, useTypedDispatch } from "../../store/store";
import Item from "../item/Item";
import Title from "../title/Title";

import styles from "./Main.module.scss";

const Main: React.FC = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(setDataTC());
  }, []);

  const data = useAppSelector((state) => state.data);

  console.log(data);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title />
        <div className={styles.itemContainer}>
          {data.map((t, index) => (
            // eslint-disable-next-line react/jsx-key
            <Item index={index} data={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
