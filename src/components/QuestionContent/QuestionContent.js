import "./QuestionContent.scss";

export const QuestionContent = ({ content }) => {
  return (
    <div className="questionContent">
      <span className="mainContent">{content[0]}</span>
      <span className="secondaryContent">{content[1]}</span>
    </div>
  );
};
