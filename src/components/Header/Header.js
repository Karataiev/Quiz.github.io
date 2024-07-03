import { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export const Header = ({ step }) => {
  const handleProgress = () => {
    const progress = document.querySelector(".progress");
    const progressBar = document.querySelector(".progressBar");
    const progressWidth = (progressBar.offsetWidth / 5) * step;
    progress.style.width = `${progressWidth}px`;
  };

  useEffect(() => {
    handleProgress();
  }, [step]);

  const handleBack = () => {
    if (step === 2) {
      return "/";
    } else {
      return `/quiz/${step - 1}`;
    }
  };

  return (
    <div className="headerContainer">
      <div className="stepsBlock">
        {step === 1 || <Link to={handleBack()} className="backBtn" />}
        <div className="steps">
          <span className="currentStep">{step}</span>
          <span>/5</span>
        </div>
      </div>

      <div className="progressBar">
        <div className="progress" />
      </div>
    </div>
  );
};
