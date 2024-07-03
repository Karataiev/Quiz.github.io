import "./ThanksPage.scss";
import done from "../../assets/icons/done.png";
import { DownloadComponent } from "../../components/DownloadComponent/DownloadComponent";
import { ConfirmButton } from "../../components/ConfirmButton/ConfirmButton";
import { useDispatch, useSelector } from "react-redux";
import { cleanStore } from "../../redux/action";
import { useEffect } from "react";

export const ThanksPage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cleanStore(""));
    localStorage.clear();
  };
  return (
    <div className="thanksPageContainer">
      <div>
        <span className="thanksHeader">Thank you</span>
        <span className="thanksInfo">for supporting us and passing quiz</span>
      </div>

      <img src={done} />
      <DownloadComponent />
      <ConfirmButton active={true} goTo={"/"} handleClick={handleClick}>
        Retake quiz
      </ConfirmButton>
    </div>
  );
};
