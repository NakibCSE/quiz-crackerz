import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";

import "./Quiz.css";

const Quiz = ({ questions }) => {
  const { question, correctAnswer, options, id } = questions;

  console.log(questions);
  const handleAnswer = (e) => {
    console.log(e);
    if (e === correctAnswer) {
      toast("Wow!! Right Answer!");
    } else {
      toast("Opps!! Wrong Answer!");
    }
  };
  const showAns = (ans) => {
    toast(`Ans: ${ans}`);
  };
  return (
    <div className="border-2 rounded-xl p-5">
      <div className="text-end text-lg">
        <label
          htmlFor="my-modal-4"
          className="btn modal-button"
          onClick={() => showAns(correctAnswer)}
        >
          <FontAwesomeIcon icon={faEye} />
        </label>
      </div>
      <ToastContainer />
      <h3 className="text-xl font-bold">Quiz:{question}</h3>

      {options.map((option) => (
        <div className="">
          <label className="cursor-pointer option-container sm:w-full md:w-full ">
            <input
              onClick={() => handleAnswer(option)}
              className="radio-accent radio"
              type="radio"
              id={id}
              name={correctAnswer}
            />
            <p className="ml-2 option">{option}</p>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
