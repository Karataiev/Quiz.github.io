import { useDispatch, useSelector } from "react-redux";
import { ConfirmButton } from "../ConfirmButton/ConfirmButton";
import { EmailBlock } from "../EmailBlock/EmailBlock";
import { QuestionContent } from "../QuestionContent/QuestionContent";
import "./EmailContent.scss";
import { addEmail } from "../../redux/action";

export const EmailContent = () => {
  const contentArr = ["Email", "Enter your email to get full access"];
  const isValid = useSelector((state) => state.isValidEmail);
  const dispatch = useDispatch();

  const handleClick = () => {
    const inputValue = document.querySelector(".emailInput");
    dispatch(addEmail(inputValue.value));
    localStorage.setItem('email', JSON.stringify(inputValue.value));
  };

  return (
    <div className="emailContentContainer">
      <QuestionContent content={contentArr} />
      <EmailBlock />
      <span className="privacyBlock">
        By continuing I agree with <a>Privacy policy</a> and{" "}
        <a>Terms of use.</a>
      </span>
      <ConfirmButton
        styleName="emailBtn"
        active={isValid}
        handleClick={handleClick}
        goTo={"/thanks"}
      >
        Next
      </ConfirmButton>
    </div>
  );
};
