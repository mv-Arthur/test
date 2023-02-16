import React from "react";
import Answer from "./Answer";
import "../App.css";
const Card = ({ question, answers, correct, callbackForCorrectAnswer }) => {
  return (
    <div className="ans_wrap">
      <h2 className="answer__question">{question}</h2>
      <div className="answers__wrapper">
        {answers.map((answer, index) => (
          <Answer
            answerText={answer}
            key={index}
            callbackForCorrectAnswer={callbackForCorrectAnswer}
            correct={correct}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
