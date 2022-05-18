import React from 'react';
import styles from './Card.module.css';

const Card = ({title, icon, children}) => {

  // let Image = '';

  // if(icon === 'logo'){
  //   Image = Logo;
  // }

  return (
    <div className={styles.card}>
        <div className={styles.headingWrapper}>
          {icon}
          <h1 className={styles.heading}>{title}</h1>
        </div>

        {children}
      </div>
  )
}

export default Card