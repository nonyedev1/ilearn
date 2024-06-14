import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar.jsx";
import SignUp from "./SignUp.jsx";
import kids from "./assets/kids.jpg";
import learning from "./assets/learning.webp";
import onlineCourse from "./assets/online course.jpg";
import technicalSkills from "./assets/technical.jpg";
import BackgroundVideo from "./BackgroundVideo.jsx";
import Section from "./components/Section.jsx";

const App = () => {
  const navigate = useNavigate();
  const gotonewpage = () => {
    navigate("./Basiclifeskills");
  };
  return (
    <div>
      <Navbar />
      <BackgroundVideo />
      <div className="rotate">
        <div className="rotatearound">
          <div className="rotatearound2"></div>
        </div>
      </div>
      <SignUp />

      <div className="section1">
        <Section
          onClick={() => gotonewpage()}
          img={learning}
          title="basic life skills"
        />
        <Section img={onlineCourse} title="certificate courses" />
        <Section img={kids} title="for kids" />
        <Section img={technicalSkills} title="technical skills" />
      </div>
    </div>
  );
};
export default App;
