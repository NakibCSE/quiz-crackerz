import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./Quizes.css";
const Quizes = () => {
  const quizes = useLoaderData();
  return (
    <div className="quiz-container mx-auto mt-5">
      <h2 className="text-center text-3xl">
        Hunting your ans with
        <span className="text-rose-600 font-bold"> {quizes.data.name}</span>
      </h2>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {quizes.data.questions.map((questions) => (
          <Quiz questions={questions} key={questions.id}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Quizes;
