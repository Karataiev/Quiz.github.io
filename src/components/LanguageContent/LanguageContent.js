import { Link } from "react-router-dom";
import "./LanguageContent.scss";
import { QuestionContent } from "../QuestionContent/QuestionContent";
import { useDispatch } from "react-redux";
import { chooseLanguage } from "../../redux/action";

export const LanguageContent = () => {
  const languageArr = ["English", "French", "German", "Spanish"];
  const contentArr = ["What is your preferred language?", "Choose language"];
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(chooseLanguage(value));
    localStorage.setItem("language", JSON.stringify(value));
  };

  return (
    <div className="languageContentContainer">
      <QuestionContent content={contentArr} />

      <ul className="listOfOptions">
        {languageArr.map((el) => (
          <li className="listItem" key={el} onClick={() => handleClick(el)}>
            <Link to="/quiz/2" className="link">
              {el}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
