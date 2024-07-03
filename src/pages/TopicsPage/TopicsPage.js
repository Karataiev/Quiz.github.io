import { Header } from "../../components/Header/Header";
import "./TopicsPage.scss";
import { TopicsContent } from "../../components/TopicsContent/TopicsContent";

export const TopicsPage = () => {
  const stepFive = 5;
  return (
    <div className="topicsPageContainer">
      <Header step={stepFive} />
      <TopicsContent />
    </div>
  );
};
