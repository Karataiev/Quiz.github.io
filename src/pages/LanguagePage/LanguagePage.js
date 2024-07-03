import { Header } from "../../components/Header/Header";
import { LanguageContent } from "../../components/LanguageContent/LanguageContent";
import "./LanguagePage.scss";

export const LanguagePage = () => {
  const stepOne = 1;
  return (
    <div className="languagePageContainer">
      <Header step={stepOne} />
      <LanguageContent />
    </div>
  );
};
