import { useEffect, useState } from "react";
import "./LoaderResults.scss";

export const LoaderResults = () => {
  const [progress, setProgress] = useState(0);

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
      <span className="progressMessage">Finding collections for you...</span>
    </div>
  );
};
