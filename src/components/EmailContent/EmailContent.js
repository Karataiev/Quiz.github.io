import { useDispatch, useSelector } from "react-redux";
import { ConfirmButton } from "../ConfirmButton/ConfirmButton";
import { EmailBlock } from "../EmailBlock/EmailBlock";
import { QuestionContent } from "../QuestionContent/QuestionContent";
import "./EmailContent.scss";
import { addEmail } from "../../redux/action";
import { useTranslation } from "react-i18next";

export const EmailContent = () => {
  const isValid = useSelector((state) => state.isValidEmail);
  const dispatch = useDispatch();
  const language =  JSON.parse(localStorage.getItem("language"));
  const { t, i18n } = useTranslation();
  const contentArr = [
    t(`${language}.email.header.one`),
    t(`${language}.email.header.two`),
  ];

  const handleClick = () => {
    const inputValue = document.querySelector(".emailInput");
    dispatch(addEmail(inputValue.value));
    localStorage.setItem("email", JSON.stringify(inputValue.value));
  };

  return (
    <div className="emailContentContainer">
      <QuestionContent content={contentArr} />
      <EmailBlock />
    <span className="privacyBlock">{ t(`${language}.email.policy`)}
        {/* By continuing I agree with <a>Privacy policy</a> and
        <a>Terms of use.</a> */}
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
