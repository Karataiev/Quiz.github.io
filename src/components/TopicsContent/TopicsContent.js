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
import { useTranslation } from "react-i18next";

export const TopicsContent = () => {
  const stateTopicsArr = useSelector((state) => state.topicsArr);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const language =  JSON.parse(localStorage.getItem("language"));
  const { t, i18n } = useTranslation();

  const contentArr = [
    t(`${language}.quiz_5.header.one`),
    t(`${language}.quiz_5.header.two`),
  ];

  const topicsArr = [
    { value: t(`${language}.quiz_5.variants.one`), image: werewolf },
    { value: t(`${language}.quiz_5.variants.two`), image: action },
    { value: t(`${language}.quiz_5.variants.three`), image: royalObsession },
    { value: t(`${language}.quiz_5.variants.four`), image: romance },
    { value: t(`${language}.quiz_5.variants.five`), image: youngAdult },
    { value: t(`${language}.quiz_5.variants.six`), image: badBoy },
    { value: t(`${language}.quiz_5.variants.seven`), image: billionaire },
  ];

  useEffect(() => {
    stateTopicsArr.length < 3 ? setActive(false) : setActive(true);
    localStorage.setItem("topicsArr", JSON.stringify(stateTopicsArr));
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
         { t(`${language}.quiz_5.confirmButton`)}
        </ConfirmButton>
      </div>
    </>
  );
};
