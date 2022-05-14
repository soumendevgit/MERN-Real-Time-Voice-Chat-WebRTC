import React from 'react';
import arrow from "../../../assets/images/arrow-forward.png";
import styles from './Arrow.module.css';
const Arrow = () => {
  return (
    <span className={styles.arrowWrap}><img className={styles.arrow} src={arrow} alt="logo" /></span>
  )
}

export default Arrow