import "./HateContent.scss";
import { ConfirmButton } from "../ConfirmButton/ConfirmButton";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HateListItem } from "../HateListItem/HateListItem";
import { useTranslation } from "react-i18next";

export const HateContent = () => {
  const [active, setActive] = useState(false);
  const stateHateArr = useSelector((state) => state.hateArr);
  const language = JSON.parse(localStorage.getItem("language"));
  const { t, i18n } = useTranslation();

  const hateArr = [
    t(`${language}.quiz_4.variants.one`),
    t(`${language}.quiz_4.variants.two`),
    t(`${language}.quiz_4.variants.three`),
    t(`${language}.quiz_4.variants.four`),
  ];

  useEffect(() => {
    !stateHateArr.length ? setActive(false) : setActive(true);
  }, [stateHateArr]);

  const handleClick = (e) => {
    localStorage.setItem("hateArr", JSON.stringify(stateHateArr));
  };

  return (
    <div className="hateContentContainer">
      <span className="hateQuestionContent">
        {t(`${language}.quiz_4.header`)}
      </span>

      <ul className="listOfOption">
        {hateArr.map((el) => (
          <HateListItem item={el} key={el} />
        ))}
      </ul>

      <ConfirmButton
        handleClick={handleClick}
        goTo={!active || "/quiz/5"}
        active={active}
      >
        {t(`${language}.quiz_4.confirmButton`)}
      </ConfirmButton>
    </div>
  );
};
