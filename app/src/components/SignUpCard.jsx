import React from "react";
import { SignUpPicture } from "./SignUpPicture";
import SignUpBenefits from "./SignUpBenefits";
import { SignUpForm } from "./SignUpForm";
export default function SignUpCard() {
  return (
    <>
      <section className="sign-up-card-container">
        <section>
          <SignUpPicture />
        </section>
        <section className="sign-up-info-container">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <SignUpBenefits />
          <SignUpForm />
        </section>
      </section>
    </>
  );
}
