import { Link } from "react-router-dom";
import { QuestionContent } from "../QuestionContent/QuestionContent";
import "./AgeContent.scss";
import { useDispatch } from "react-redux";
import { chooseAge } from "../../redux/action";

export const AgeContent = () => {
  const ageArr = ["18-29 years", "30-39 years", "40-49 years", "50+"];

  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(chooseAge(value));
    localStorage.setItem('age', JSON.stringify(value));
  };

  return (
    <div className="ageContentContainer">
      <span className="ageQuestionContent">What is your age?</span>

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
