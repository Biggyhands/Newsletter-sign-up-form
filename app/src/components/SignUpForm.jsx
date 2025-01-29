import React, { useState } from "react";

export const SignUpForm = ({
  setIsEmailValid,
  isEmailValid,
  setValidEmail,
}) => {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsEmailValid(true);
      setValidEmail(email);
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email address{" "}
          <span
            className={
              isEmailValid === false ? "error-state" : "error-span-display"
            }
          >
            Valid Email required
          </span>
        </label>

        <input
          className={
            isEmailValid === false
              ? "input-form error-input-state"
              : "input-form"
          }
          type="email"
          placeholder="email@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
    </>
  );
};
