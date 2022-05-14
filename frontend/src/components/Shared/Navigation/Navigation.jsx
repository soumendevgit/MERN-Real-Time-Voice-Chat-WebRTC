import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import styles from './Navigation.module.css'
const Navigation = () => {

  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: '22px',
    display: "flex",
    alignItems: "center"
  }

  const logoText = {
    marginLeft: '10px'
  }

  return (
    <nav className={`container ${styles.navbar}`}>
      <Link style={brandStyle} to="/">
        <img src={logo} alt='logo' />
        <span style={logoText}>Coders House</span>
      </Link>
    </nav>
  )
}

export default Navigation