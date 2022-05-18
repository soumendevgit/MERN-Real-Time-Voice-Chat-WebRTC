import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../../components/Shared/Button/Button";
import Card from "../../../../components/Shared/Card/Card";
// import Button from "../../components/Shared/Button/Button";
// import Card from "../../components/Shared/Card/Card";
import PhoneIcon from "../../../../components/Shared/PhoneIcon/PhoneIcon";
import TextInput from "../../../../components/Shared/TextInput/TextInput";
import { sendOtp } from "../../../../http";
import { setOtp } from "../../../../store/authSlice";
import styles from "../StepPhoneEmail.module.css";

const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  async function submit() {
    // server request
    try {
      const {data} = await sendOtp({ phone: phoneNumber });
      dispatch(setOtp({phone:data.phone, hash: data.hash}))
      onNext()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card title="Enter your phone number" icon={<PhoneIcon />}>
      <TextInput
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Next" onClick={submit} />
        </div>

        <p className={styles.bottomParagraph}>
          By entering your number, you're agreeing to our Terms of services and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Phone;
