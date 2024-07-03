import { useEffect, useState } from "react";
import "./TopicsListItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { chooseTopics, removeTopics } from "../../redux/action";

export const TopicsListItem = ({ info }) => {
  const [isChecked, setIsChecked] = useState(false);
  const stateTopicsArr = useSelector((state) => state.topicsArr);
  const dispatch = useDispatch();

  useEffect(() => {
    const listItems = document.querySelectorAll("li");
    stateTopicsArr.forEach((el) => {
      listItems.forEach((li) => {
        if (li.textContent === el) {
          li.classList.add("checkedItem");
        }
      });
    });
  }, []);

  const handleClick = (e) => {
    setIsChecked(!isChecked);

    const target = e.target.closest("li");
    if (target.classList.contains("checkedItem")) {
      target.classList.remove("checkedItem");
      const index = stateTopicsArr.indexOf(target.textContent);
      const newArr = [...stateTopicsArr];
      newArr.splice(index, 1);
      dispatch(removeTopics(newArr));
    } else if (stateTopicsArr.length < 3) {
      target.classList.add("checkedItem");
      dispatch(chooseTopics(target.textContent));
    }
  };

  return (
    <li className="topicsListItem" onClick={(e) => handleClick(e)}>
      <input type="checkbox" value={isChecked} />
      <img src={info.image} />
      <span>{info.value}</span>
    </li>
  );
};
