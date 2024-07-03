import { GenderContent } from "../../components/GenderContent/GenderContent";
import { Header } from "../../components/Header/Header";
import "./GenderPage.scss";

export const GenderPage = () => {
  const stepTwo = 2;
  return (
    <div className="genderPageContainer">
      <Header step={stepTwo} />
      <GenderContent />
    </div>
  );
};
