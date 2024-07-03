import { AgeContent } from "../../components/AgeContent/AgeContent";
import { Header } from "../../components/Header/Header";
import "./AgePage.scss";

export const AgePage = () => {
  const stepThree = 3;
  return (
    <div className="agePageContainer">
      <Header step={stepThree} />
      <AgeContent />
    </div>
  );
};
