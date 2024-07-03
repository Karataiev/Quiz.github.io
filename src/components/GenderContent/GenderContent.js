import { QuestionContent } from "../QuestionContent/QuestionContent";
import "./GenderContent.scss";
import female from "../../assets/icons/female.png";
import male from "../../assets/icons/male.png";
import other from "../../assets/icons/other.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseGender } from "../../redux/action";
import { useTranslation } from "react-i18next";

export const GenderContent = () => {
  const language =  JSON.parse(localStorage.getItem("language"));
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const contentArr = [
    t(`${language}.quiz_2.header.one`),
    t(`${language}.quiz_2.header.two`),
  ];

  const genderArr = [
    {
      type: t(`${language}.quiz_2.variants.one`),
      icon: female,
    },
    {
      type: t(`${language}.quiz_2.variants.two`),
      icon: male,
    },
    {
      type: t(`${language}.quiz_2.variants.three`),
      icon: other,
    },
  ];

  const handleClick = (value) => {
    dispatch(chooseGender(value));
    localStorage.setItem("gender", JSON.stringify(value));
  };

  return (
    <div className="genderContentContainer">
      <QuestionContent content={contentArr} />

      <ul className="listOfOption">
        {genderArr.map((el) => (
          <li key={el.type} onClick={() => handleClick(el.type)}>
            <Link to="/quiz/3" className="linkContent">
              <img src={el.icon} alt={el.type} />
              <span>{el.type}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
