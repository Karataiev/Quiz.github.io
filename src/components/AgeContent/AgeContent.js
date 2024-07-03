import { Link } from "react-router-dom";
import { QuestionContent } from "../QuestionContent/QuestionContent";
import "./AgeContent.scss";
import { useDispatch, useSelector } from "react-redux";
import { chooseAge } from "../../redux/action";
import { useTranslation } from "react-i18next";

export const AgeContent = () => {
  const dispatch = useDispatch();
  const language =  JSON.parse(localStorage.getItem("language"));
  const { t, i18n } = useTranslation();

  const ageArr = [
    t(`${language}.quiz_3.variants.one`),
    t(`${language}.quiz_3.variants.two`),
    t(`${language}.quiz_3.variants.three`),
    t(`${language}.quiz_3.variants.four`),
  ];

  const handleClick = (value) => {
    dispatch(chooseAge(value));
    localStorage.setItem("age", JSON.stringify(value));
  };

  return (
    <div className="ageContentContainer">
      <span className="ageQuestionContent">{t(`${language}.quiz_3.header`)}</span>

      <ul className="listOfOption">
        {ageArr.map((el) => (
          <li key={el} onClick={() => handleClick(el)}>
            <Link to="/quiz/4" className="linkContent">
              {el}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
