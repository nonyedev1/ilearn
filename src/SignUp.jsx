import React from "react";
import ProfileIcon from "./assets/user-profile-icon.svg";
// import { useState } from "react";
const SignUp = () => {
  const profilePhotoInput = (
    <input
      type="file"
      accept="image/*"
      name="profilephoto"
      id="profilephotoinput"
    />
  );

  return (
    <div>
      <form className="signUpForm">
        <h1>Welcome To iLEARN</h1>

        <div className="profile-photo">
          {profilePhotoInput}
          <label htmlFor="profilephotoinput">
            <img
              src={ProfileIcon}
              alt="profileicon"
              title="click to add photo"
              name="profilephoto"
            />
          </label>

          <p>profile photo</p>
        </div>
        <label htmlFor="firstName"> First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="enter your first name"
          required
        />
        <label htmlFor="lastName"> Last Name</label>
        <input
          type="text"
          name="lastname"
          placeholder="enter your last name"
          required
        />
        <label htmlFor="Password"> Password</label>
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          required
        />
        <input
          type="button"
          value="Sign up"
          className="bluebtn"
          id="signupbtn"
        />
        <ul>
          <p>Already have an account?</p> <a>sign in</a>
        </ul>
      </form>
    </div>
  );
};

export default SignUp;
