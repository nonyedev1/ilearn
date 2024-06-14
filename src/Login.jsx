import React from "react";
import ArrowRight from "./assets/thin-long-arrow-right-icon.svg";
import { useState } from "react";

const Login = () => {
  let [loginFormOpen, setLoginFormOpen] = useState(false);
  const loginForm = (
    <form className="login-form">
      <input
        type="text"
        name="username"
        placeholder="Enter your username"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        required
      />
    </form>
  );
  return (
    <>
      {loginFormOpen ? loginForm : ""}
      <div className="login">
        <a href="#" onClick={() => setLoginFormOpen(true)}>
          login <img src={ArrowRight} alt="arrowright" id="arrowRight" />
        </a>
      </div>
    </>
  );
};

export default Login;
