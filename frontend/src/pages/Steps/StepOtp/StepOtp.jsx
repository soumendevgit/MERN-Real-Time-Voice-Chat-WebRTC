import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Shared/Button/Button';
import Card from '../../../components/Shared/Card/Card';
import LockIcon from '../../../components/Shared/LockIcon/LockIcon';
import TextInput from '../../../components/Shared/TextInput/TextInput';
import { verifyOtp } from '../../../http';
import { setAuth } from '../../../store/authSlice';
import styles from './StepOtp.module.css';

const StepOtp = () => {

  const [otp, setOtp] =useState('');
  const {phone, hash} = useSelector((state) => state.auth.otp);

  const dispatch = useDispatch()

  const submit = async () => {
    try {
      const {data} = await verifyOtp({otp, phone, hash});
      console.log(data);
      dispatch(setAuth(data))
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
    <div className={styles.cardWrapper}>
      <Card title="Enter the code we just texted you" icon={<LockIcon/>}>
      <TextInput value={otp} onChange={(e) => {setOtp(e.target.value)}} />
        <div>
          <div className={styles.actionButtonWrap}>
            <Button text="Next" onClick={submit} />
          </div>

          <p className={styles.bottomParagraph}>
            By entering your number, you're agreeing to our Terms of services and Privacy Policy. Thanks!
          </p>
        </div>
      </Card>
    </div>
    </>
    
  )
}

export default StepOtp