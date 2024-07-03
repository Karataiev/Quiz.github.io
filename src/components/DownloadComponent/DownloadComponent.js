import "./DownloadComponent.scss";
import download from "../../assets/icons/download.svg";
import { CSVLink } from "react-csv";

export const DownloadComponent = () => {
  const language = JSON.parse(localStorage.getItem("language"));
  const gender = JSON.parse(localStorage.getItem("gender"));
  const age = JSON.parse(localStorage.getItem("age"));
  const hateArr = JSON.parse(localStorage.getItem("hateArr"));
  const topicsArr = JSON.parse(localStorage.getItem("topicsArr"));
  const email = JSON.parse(localStorage.getItem("email"));

  const headers = [
    { label: "order", key: "info.number" },
    { label: "title", key: "info.question" },
    { label: "type", key: "info.type" },
    { label: "answer", key: "info.answer" },
  ];

  const data = [
    {
      info: {
        number: 1,
        question: "What is your preferred language?",
        type: "single-select",
        answer: language,
      },
    },
    {
      info: {
        number: 2,
        question: "What gender do you identify with?",
        type: "single-select-image",
        answer: gender,
      },
    },
    {
      info: {
        number: 3,
        question: "What is your age?",
        type: "single-select",
        answer: age,
      },
    },
    {
      info: {
        number: 4,
        question: "What do you hate the most in a book?",
        type: "multiple-select",
        answer: hateArr,
      },
    },
    {
      info: {
        number: 5,
        question: "What are your favorite topics?",
        type: "bubble",
        answer: topicsArr,
      },
    },
    { info: { number: 6, question: "Email", type: "email", answer: email } },
  ];

  return (
    <div className="downloadComponentContainer">
      <CSVLink
        className="CSVButton"
        data={data}
        headers={headers}
        filename=""
        target="_blank"
      >
        <img src={download} />
        <span>Download my answers</span>
      </CSVLink>
    </div>
  );
};
