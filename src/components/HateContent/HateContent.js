import "./HateContent.scss";
import { ConfirmButton } from "../ConfirmButton/ConfirmButton";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HateListItem } from "../HateListItem/HateListItem";

export const HateContent = () => {
  const [active, setActive] = useState(false);
  const stateHateArr = useSelector((state) => state.hateArr);

  const hateArr = [
    "Lack of logic",
    "A slow speed",
    "Lack of humor",
    "Way too generic ending",
  ];

  useEffect(() => {
    !stateHateArr.length ? setActive(false) : setActive(true);
  }, [stateHateArr]);

  const handleClick = (e) => {
    localStorage.setItem('hateArr', JSON.stringify(stateHateArr));
  };

  return (
    <div className="hateContentContainer">
      <span className="hateQuestionContent">
        What do you <span>hate</span> the most in a book?
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
        Next
      </ConfirmButton>
    </div>
  );
};
