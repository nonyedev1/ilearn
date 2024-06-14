import React from "react";
import Logo from "./assets/logo.png";
import Login from "./Login";
import profileIcon from "./assets/user-profile-icon.svg";
import { useState } from "react";

const Navbar = () => {
  const signUpButton = (
    <a href="#" className="bluebtn">
      sign up
    </a>
  );
  const [showSignUpButton, sethowSignUpButton] = useState(false);
  return (
    <div className="Navbar">
      <img src={Logo} className="logo-img" alt="logo" />
      <ul>
        <Login />
        {signUpButton}

        <img src={profileIcon} alt="profileicon" />
      </ul>
    </div>
  );
};
export default Navbar;
