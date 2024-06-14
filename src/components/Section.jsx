import React from "react";
import SignUp from "../SignUp";

const Section = ({ img, title }) => {
  return (
    <div className="section">
      <img src={img} className="logo-img" alt="" id="blur" />
      <p>{title}</p>
    </div>
  );
};

export default Section;
