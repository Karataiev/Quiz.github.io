import { ConfirmButton } from "../ConfirmButton/ConfirmButton";
import { QuestionContent } from "../QuestionContent/QuestionContent";
import { TopicsListItem } from "../TopicsListItem/TopicsListItem";
import werewolf from "../../assets/icons/werewolf.svg";
import action from "../../assets/icons/action.svg";
import royalObsession from "../../assets/icons/royal-obsession.svg";
import romance from "../../assets/icons/romance.svg";
import youngAdult from "../../assets/icons/young-adult.svg";
import badBoy from "../../assets/icons/bad-boy.svg";
import billionaire from "../../assets/icons/billionaire.svg";
import "./TopicsContent.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmLustQuiz } from "../../redux/action";

export const TopicsContent = () => {
  const contentArr = [
    "What are your favorite topics?",
    "Choose up to 3 topics you like",
  ];

  const topicsArr = [
    { value: "Werewolf", image: werewolf },
    { value: "Action", image: action },
    { value: "Royal Obsession", image: royalObsession },
    { value: "Romance", image: romance },
    { value: "Young Adult", image: youngAdult },
    { value: "Bad Boy", image: badBoy },
    { value: "Billionaire", image: billionaire },
  ];

  const stateTopicsArr = useSelector((state) => state.topicsArr);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    stateTopicsArr.length < 3 ? setActive(false) : setActive(true);
    localStorage.setItem('topicsArr', JSON.stringify(stateTopicsArr));
  }, [stateTopicsArr]);

  const handleClick = () => {
    dispatch(confirmLustQuiz(true));
  };

  return (
    <>
      <div className="topicsContentContainer">
        <QuestionContent content={contentArr} />
        <ul className="topicsList">
          {topicsArr.map((el) => (
            <TopicsListItem info={el} key={el.value} />
          ))}
        </ul>
        <ConfirmButton
          styleName="topicsBtn"
          active={active}
          handleClick={handleClick}
          goTo={"/email"}
        >
          Next
        </ConfirmButton>
      </div>
    </>
  );
};
