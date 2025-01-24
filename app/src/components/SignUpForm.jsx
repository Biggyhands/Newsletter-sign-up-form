import React from "react";

export const SignUpForm = () => {
  return (
    <>
      <form className="sign-up-form">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email@company.com" />
        <button type="submit">Subscribe</button>
      </form>
    </>
  );
};
