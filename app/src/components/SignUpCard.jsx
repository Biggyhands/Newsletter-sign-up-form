import React from "react";
import { SignUpPicture } from "./SignUpPicture";
import SignUpBenefits from "./SignUpBenefits";
import { SignUpForm } from "./SignUpForm";
export default function SignUpCard({
  setIsEmailValid,
  isEmailValid,
  setValidEmail,
}) {
  return (
    <>
      <section className="sign-up-card-container">
        <SignUpPicture />
        <section className="sign-up-info-container">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <SignUpBenefits />
          <SignUpForm
            setIsEmailValid={setIsEmailValid}
            isEmailValid={isEmailValid}
            setValidEmail={setValidEmail}
          />
        </section>
      </section>
    </>
  );
}
