import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Shared/Button/Button";
import Card from "../../components/Shared/Card/Card";
import Logo from "../../components/Shared/Logo/Logo";
import styles from "./Home.module.css";
const Home = () => {

  const signInLinkStyle = {
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px'
  }

  const navigate = useNavigate();

  function startRegister() {
    navigate('/authenticate')
    // console.log('Clicked');
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Coders House!!!" icon={<Logo/>}>
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks
        </p>

        <div>
          <Button onClick={startRegister} text="Lets Go"/>
        </div>

        {/* <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Here an invite text?</span>
          <Link style={signInLinkStyle} to="login">Sign In</Link>
        </div> */}
      </Card>
    </div>
  );
};

export default Home;
