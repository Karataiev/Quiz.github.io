import { useEffect, useState } from "react";
import "./EmailBlock.scss";
import { useDispatch, useSelector } from "react-redux";
import { isValidEmail } from "../../redux/action";

export const EmailBlock = () => {
  const [value, setValue] = useState("");
  const [onBlur, setOnBlur] = useState(false);

  const dispatch = useDispatch();
  const isValid = useSelector((state) => state.isValidEmail);

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  useEffect(() => {
    const input = document.querySelector("input");
    const errorSpan = document.querySelector(".errorMessage");
    if (!EMAIL_REGEXP.test(value) || value.length === 0) {
      dispatch(isValidEmail(false));
    } else {
      dispatch(isValidEmail(true));
    }

    if (onBlur) {
      input.classList.add("blur");
      errorSpan.classList.add("visible");
    } else {
      input.classList.remove("blur");
      errorSpan.classList.remove("visible");
    }
  }, [value, isValid, onBlur]);

  const handleBlur = () => {
    if (!EMAIL_REGEXP.test(value) || value.length === 0) {
      setOnBlur(true);
    } else {
      setOnBlur(false);
    }
  };

  return (
    <div className="emailBlockContainer">
      <input
        placeholder="Your email"
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => handleBlur()}
        className="emailInput"
      />
      <span className="errorMessage">Invalid email</span>
    </div>
  );
};
