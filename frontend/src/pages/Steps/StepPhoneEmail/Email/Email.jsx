import React, { useState } from 'react';
import Button from '../../../../components/Shared/Button/Button';
import Card from '../../../../components/Shared/Card/Card';
import EmailIcon from '../../../../components/Shared/EmailIcon/EmailIcon';
import TextInput from '../../../../components/Shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';


const Email = ({onNext}) => {


  const [email, setEmail] =useState('');
    return (
    
      <Card title="Enter your email id" icon={<EmailIcon/>}>
      <TextInput value={email} onChange={(e) => {setEmail(e.target.value)}} />
        <div>
          <div className={styles.actionButtonWrap}>
            <Button text="Next"  onClick={onNext} />
          </div>

          <p className={styles.bottomParagraph}>
            By entering your number, you're agreeing to our Terms of services and Privacy Policy. Thanks!
          </p>
        </div>
      </Card>
      )
}

export default Email