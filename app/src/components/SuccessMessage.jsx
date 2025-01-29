import React from "react";
import successIllustration from "../assets/images/icon-success.svg";

export const SuccessMessage = ({ setIsEmailValid, validEmail }) => {
  const handleToggleState = () => {
    setIsEmailValid(null);
  };
  return (
    <section className="success-message-container">
      <section className="success-message-info-container">
        <section className="success-message-info">
          <img src={successIllustration} alt="Success Illlustration" />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to{" "}
            <span className="email-success">{validEmail}</span>. Please open it
            and click the button inside to confirm your subscription
          </p>
        </section>

        <button onClick={handleToggleState}>Dismiss message</button>
      </section>
    </section>
  );
};
