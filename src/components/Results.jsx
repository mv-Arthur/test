import React, { useState, useEffect } from "react";
import "../App.css";
import bad from "../img/bad.png";
import notBad from "../img/not_bad.png";
import well from "../img/well.png";
import excellant from "../img/excellant.png";
const Results = ({ correctAnswers, uncorrectAnswers }) => {
  const [reaction, setReaction] = useState({
    text: "",
    imgReaction: "",
  });
  useEffect(() => {
    if (correctAnswers === 0) {
      setReaction({
        text: "Ты плохо справился, подготовся получше и попробуй снова!)",
        imgReaction: bad,
      });
    }
    if (correctAnswers > 0) {
      setReaction({
        text: "Неплохо, но могло быть и лучше",
        imgReaction: notBad,
      });
    }
    if (correctAnswers > 4) {
      setReaction({
        text: "Ты хорошо справился, повтори еще пару тем и можешь всем хвалиться, какой ты умный!",
        imgReaction: well,
      });
    }
    if (correctAnswers > 7) {
      setReaction({
        text: "Ты отлично справился со своей работой, ты молодец, можешь гордится собой!) ",
        imgReaction: excellant,
      });
    }
  }, [correctAnswers]);
  return (
    <div className="results__wrapper">
      <div className="container">
        <h1 className="results__result">Тест завершен!</h1>
        <h2 className="results__correct">
          Правильных ответов: {correctAnswers}{" "}
        </h2>
        <h2 className="results__correct">
          Неправильных ответов: {uncorrectAnswers}{" "}
        </h2>
        <p className="results__reaction">{reaction.text}</p>
        <img
          className="results__img"
          src={reaction.imgReaction}
          alt="reaction"
        />
      </div>
    </div>
  );
};

export default Results;
