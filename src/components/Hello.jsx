import React from "react";
import helloPicture from "../img/hello_picture.png";
import "../App.css";
const Hello = ({ callbackForHello }) => {
  return (
    <div className="app__root">
      <div className="container">
        <div className="hello__wrapper">
          <div className="hello__text">
            <h1 className="hello__hello">Привет!</h1>
            <h4 className="hello__description">
              Рад видеть такую тягу к знаниям!
            </h4>
          </div>
          <button
            className="hello__btn"
            onClick={() => {
              callbackForHello(true);
            }}
          >
            Ближе к сути ...
          </button>
          <img className="hello__img" src={helloPicture} alt="hello_picture" />
        </div>
      </div>
    </div>
  );
};

export default Hello;
