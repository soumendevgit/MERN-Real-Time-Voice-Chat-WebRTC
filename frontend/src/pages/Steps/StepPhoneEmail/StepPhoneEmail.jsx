import React from "react";
import Button from "../../../components/Shared/Button/Button";

const StepPhoneEmail = ({onNext}) => {
  return (
    <div>
      <div>StepPhoneEmail</div>
      <Button onClick={onNext} text="Next"  />
    </div>
  );
};

export default StepPhoneEmail;
