import React from "react";
import "../App.css";
const Answer = ({ answerText, callbackForCorrectAnswer, correct }) => {
  return (
    <div className="answer">
      <input
        className="answer__checkbox"
        type="checkbox"
        onChange={(e) => {
          Array.from(e.target.parentNode.parentNode.children).forEach(
            (inputWrapper) => {
              const input = inputWrapper.children[0];
              if (input !== e.target) {
                input.checked = false;
              }
            }
          );

          if (answerText === correct) {
            callbackForCorrectAnswer(true);
          } else {
            callbackForCorrectAnswer(false);
          }
        }}
      />
      <label className="answer__label">{answerText}</label>
    </div>
  );
};

export default Answer;
