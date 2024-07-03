import "./ThanksPage.scss";
import done from "../../assets/icons/done.png";
import { DownloadComponent } from "../../components/DownloadComponent/DownloadComponent";
import { ConfirmButton } from "../../components/ConfirmButton/ConfirmButton";
import { useDispatch, useSelector } from "react-redux";
import { cleanStore } from "../../redux/action";
import { useTranslation } from "react-i18next";

export const ThanksPage = () => {
  const dispatch = useDispatch();
  const language =  JSON.parse(localStorage.getItem("language"));
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    dispatch(cleanStore(""));
    localStorage.clear();
  };
  return (
    <div className="thanksPageContainer">
      <div>
        <span className="thanksHeader">{ t(`${language}.gratitude.header.one`)}</span>
        <span className="thanksInfo">{ t(`${language}.gratitude.header.two`)}</span>
      </div>

      <img src={done} />
      <DownloadComponent />
      <ConfirmButton active={true} goTo={"/"} handleClick={handleClick}>
      { t(`${language}.gratitude.confirmButton`)}
      </ConfirmButton>
    </div>
  );
};
