import React from "react";
import Arrow from "../Arrow/Arrow";
import styles from './Button.module.css';

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{text}</span>
      <Arrow />
    </button>
  );
};

export default Button;
