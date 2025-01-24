import React from "react";
import iconList from "../assets/images/icon-list.svg";

export default function SignUpBenefits() {
  const icon = <img className="benefits-img" src={iconList} alt="Icon list" />;
  return (
    <ul className="sign-up-benefits-container">
      <li>
        {icon}
        Product Discovery and building what matters
      </li>
      <li>
        {icon}
        Measuring to ensure updates are a success
      </li>
      <li>
        {icon}
        And much more!
      </li>
    </ul>
  );
}
