import React, { useState, useEffect } from "react";
import signUpIllustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import signUpIllustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";

export const SignUpPicture = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 842);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <img
        src={
          isMobileView ? signUpIllustrationMobile : signUpIllustrationDesktop
        }
        alt="Sign Up Illustration"
      />
    </>
  );
};
