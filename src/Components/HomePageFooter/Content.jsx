import React from "react";
import styles from "./Content.module.css";

const Content = ({ head, data }) => {
  return (
    <div>
      <h4 className={styles.divhead}>{head}</h4>
      <div className={styles.info}>
        {data.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default Content;
