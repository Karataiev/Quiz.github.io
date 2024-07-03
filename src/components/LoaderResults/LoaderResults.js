import { useEffect, useState } from "react";
import "./LoaderResults.scss";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export const LoaderResults = () => {
  const [progress, setProgress] = useState(0);
  const language =  JSON.parse(localStorage.getItem("language"));
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const timer = setInterval(
      () => setProgress(progress < 100 ? progress + 20 : progress),
      1000
    );

    setTimeout(() => {
      clearInterval(timer);
    }, 5000);
  }, [progress]);
  return (
    <div className="loaderResultsContainer">
      <div className="spinner-box">
        <span className="progress">{`${progress}%`}</span>
        <div className="circle-border">
          <div className="circle-core"> </div>
        </div>
      </div>
      <span className="progressMessage">{t(`${language}.loading`)}</span>
    </div>
  );
};
