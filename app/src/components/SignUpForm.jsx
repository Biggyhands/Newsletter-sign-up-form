import React from "react";

export const SignUpForm = () => {
  return (
    <>
      <form className="sign-up-form">
        <label htmlFor="email">Email address</label>
        <input type="email" placeholder="email@company.com" />
        <button type="submit">Subscribe to monthly newslatter</button>
      </form>
    </>
  );
};
