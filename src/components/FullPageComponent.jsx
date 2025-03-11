import { useEffect } from "react";
import TimeAndHealth from "./TimeAndHealth";
import "fullpage.js/dist/fullpage.min.css";
import fullpage from "fullpage.js";
import "animate.css";

const FullPageComponent = () => {
  useEffect(() => {
    new fullpage("#fullpage", {
      anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage", "sixthPage", "seventhPage", "eighthPage"],
      navigation: true,
      navigationPosition: "right",
      showActiveTooltip: true,
      sectionsColor: ["#1abc9c", "#3498db", "#9b59b6", "#e74c3c"],
      scrollingSpeed: 700,
      easingcss3: "ease-in-out",
    });
  }, []);

  return (
    <>
      {/* Menu Navigation */}
      <ul id="myMenu" className="fixed top-4 left-4 z-10 bg-white p-2 gap-2 rounded animate__animated animate__fadeInLeft">
        <li data-menuanchor="firstPage" className="active">
          <a href="#firstPage">First section</a>
        </li>
        <li data-menuanchor="secondPage">
          <a href="#secondPage">Second section</a>
        </li>
        <li data-menuanchor="thirdPage">
          <a href="#thirdPage">Third section</a>
        </li>
        <li data-menuanchor="fourthPage">
          <a href="#fourthPage">Fourth section</a>
        </li>
      </ul>

      {/* FullPage.js Sections */}
      <div id="fullpage">
        <div className="section flex justify-center items-center text-white text-4xl font-bold bg-green-500 animate__animated animate__fadeInUp">
          <h1>
            <TimeAndHealth />
          </h1>
        </div>
        <div className="section flex justify-center items-center text-white text-4xl font-bold bg-blue-500 animate__animated animate__fadeInUp">
          <h1>About</h1>
        </div>
        <div className="section flex justify-center items-center text-white text-4xl font-bold bg-purple-500 animate__animated animate__fadeInUp">
          <h1>Projects</h1>
        </div>
        <div className="section flex justify-center items-center text-white text-4xl font-bold bg-red-500 animate__animated animate__fadeInUp">
          <h1>Contact</h1>
        </div>
        <div className="section flex justify-center items-center text-white text-4xl font-bold bg-yellow-500 animate__animated animate__fadeInUp">
          <h1>Mamang</h1>
        </div>
        <div className="section flex justify-center items-center text-white text-4xl font-bold bg-pink-500 animate__animated animate__fadeInUp">
          <h1>Kekeke</h1>
        </div>
        <div className="section flex justify-center items-center text-white text-4xl font-bold bg-gray-500 animate__animated animate__fadeInUp">
          <h1>Lili</h1>
        </div>
      </div>
    </>
  );
};

export default FullPageComponent;
