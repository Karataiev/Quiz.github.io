import { Link } from "react-router-dom";
import "./ConfirmButton.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { confirmLustQuiz } from "../../redux/action";

export const ConfirmButton = ({
  children,
  goTo,
  active,
  styleName,
  handleClick,
}) => {
  useEffect(() => {
    const btn = document.querySelector(".confirmButton");
    if (!active) {
      btn.classList.add("disabled");
    } else {
      btn.classList.remove("disabled");
    }
  }, [active]);

  return (
    <button
      className={`confirmButton ${styleName}`}
      onClick={(e) => handleClick(e)}
    >
      <Link to={goTo} className="linkBtn">
        {children}
      </Link>
    </button>
  );
};
