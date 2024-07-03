import { useDispatch, useSelector } from "react-redux";
import "./EmailPage.scss";
import { useEffect } from "react";
import { confirmLustQuiz } from "../../redux/action";
import { LoaderResults } from "../../components/LoaderResults/LoaderResults";
import { EmailContent } from "../../components/EmailContent/EmailContent";

export const EmailPage = () => {
  const stateConfirmBtn = useSelector((state) => state.confirmLustQuiz);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(confirmLustQuiz(false)), 5100);
  }, []);

  return (
    <div className="emailPageContainer">
      {!stateConfirmBtn ? <EmailContent /> : <LoaderResults />}
    </div>
  );
};
