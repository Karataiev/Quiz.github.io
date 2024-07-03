import { useEffect } from "react";
import "./HateListItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { chooseHate, removeHate } from "../../redux/action";

export const HateListItem = ({ item }) => {
  const dispatch = useDispatch();
  const stateHateArr = useSelector((state) => state.hateArr);

  const changeStyles = (target) => {
    target.classList.add("checkedParent");
    target.children[1].classList.add("checkedChild");
    target.children[1].style.backgroundColor = "#e4229b";
  };

  useEffect(() => {
    const listItems = document.querySelectorAll("li");
    stateHateArr.forEach((el) => {
      listItems.forEach((li) => {
        if (li.textContent === el) {
          changeStyles(li);
        }
      });
    });
  }, []);

  const handleClick = (e) => {
    const target = e.target.closest("li");

    if (target.classList.contains("checkedParent")) {
      target.classList.remove("checkedParent");
      target.children[1].classList.remove("checkedChild");
      target.children[1].style.backgroundColor = "#6d4376";

      const index = stateHateArr.indexOf(target.textContent);
      const newArr = [...stateHateArr];
      newArr.splice(index, 1);
      dispatch(removeHate(newArr));
    } else {
      changeStyles(target);

      dispatch(chooseHate(target.textContent));
    }
  };

  return (
    <li onClick={(e) => handleClick(e)}>
      <span>{item}</span>
      <div className="checkbox" />
    </li>
  );
};
