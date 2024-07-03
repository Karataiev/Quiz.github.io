import { QuestionContent } from "../QuestionContent/QuestionContent";
import "./GenderContent.scss";
import female from "../../assets/icons/female.png";
import male from "../../assets/icons/male.png";
import other from "../../assets/icons/other.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseGender } from "../../redux/action";

export const GenderContent = () => {
  const contentArr = [
    "What gender do you identify with?",
    "Please share how do you identify yourself",
  ];

  const genderArr = [
    {
      type: "Female",
      icon: female,
    },
    {
      type: "Male",
      icon: male,
    },
    {
      type: "Other",
      icon: other,
    },
  ];

  const dispatch = useDispatch();

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
