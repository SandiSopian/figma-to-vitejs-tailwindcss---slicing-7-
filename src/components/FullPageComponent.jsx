import { useEffect } from "react";
import "fullpage.js/dist/fullpage.min.css";
import fullpage from "fullpage.js";
import "animate.css";
import MainLayout from "../layouts/MainLayout";
import QuotesFetcher from "../hooks/QuotesFetcher";
import Navbar from "./Navbar";

const FullPageComponent = () => {
  useEffect(() => {
    let fpInstance;

    if (!document.querySelector("#fullpage-wrapper")) {
      fpInstance = new fullpage("#fullpage", {
        navigation: true,
        navigationPosition: "right",
        showActiveTooltip: true,
        scrollingSpeed: 700,
        easingcss3: "ease-in-out",
      });
    }

    return () => {
      if (fpInstance && typeof fullpage.destroy === "function") {
        fullpage.destroy("all");
      }
    };
  }, []);

  return (
    <>
      {/* FullPage.js Sections */}
      <Navbar />
      <div id="fullpage">
        <div className="section flex justify-center items-center text-white text-4xl font-bold bg-green-500 animate__animated animate__fadeInUp">
          <MainLayout>
            <QuotesFetcher />
          </MainLayout>
        </div>
        <div className="section flex justify-center items-center text-white text-4xl font-bold bg-blue-500 animate__animated animate__fadeInUp">
          <MainLayout>
            <QuotesFetcher />
          </MainLayout>
        </div>
        <div className="section flex justify-center items-center text-white text-4xl font-bold bg-purple-500 animate__animated animate__fadeInUp">
          <MainLayout>
            <QuotesFetcher />
          </MainLayout>
        </div>
        <div className="section flex justify-center items-center text-white text-4xl font-bold bg-red-500 animate__animated animate__fadeInUp">
          <MainLayout>
            <QuotesFetcher />
          </MainLayout>
        </div>
        <div className="section flex justify-center items-center text-white text-4xl font-bold bg-yellow-500 animate__animated animate__fadeInUp">
          <MainLayout>
            <QuotesFetcher />
          </MainLayout>
        </div>
        <div className="section flex justify-center items-center text-white text-4xl font-bold bg-pink-500 animate__animated animate__fadeInUp">
          <MainLayout>
            <QuotesFetcher />
          </MainLayout>
        </div>
        <div className="section flex justify-center items-center text-white text-4xl font-bold bg-gray-500 animate__animated animate__fadeInUp">
          <MainLayout>
            <QuotesFetcher />
          </MainLayout>
        </div>
      </div>
    </>
  );
};

export default FullPageComponent;
