import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Card.module.css';

const Card = ({title, children}) => {
  return (
    <div className={styles.card}>
        <div className={styles.headingWrapper}>
          <Logo/>
          <h1 className={styles.heading}>{title}</h1>
        </div>

        {children}
      </div>
  )
}

export default Card