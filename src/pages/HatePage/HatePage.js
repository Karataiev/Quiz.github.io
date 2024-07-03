import { HateContent } from "../../components/HateContent/HateContent";
import { Header } from "../../components/Header/Header";
import "./HatePage.scss";

export const HatePage = () => {
  const stepFour = 4;
  return (
    <div className="agePageContainer">
      <Header step={stepFour} />
      <HateContent />
    </div>
  );
};
