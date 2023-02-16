import React, { useEffect, useState } from "react";
import Hello from "./Hello";
import "../App.css";
import autorizationPicture from "../img/autorization_picture.png";

const Autorization = ({ callbackForAutorization }) => {
  const [autorization, setAutorization] = useState({
    login: "",
    password: "",
  });
  const [hideHello, sethideHello] = useState(false);
  useEffect(() => {
    if (
      autorization.login === "student" &&
      autorization.password === "studentPass"
    ) {
      callbackForAutorization(true);
    }
  }, [autorization.login, autorization.password, callbackForAutorization]);

  const callbackForHello = (switcher) => {
    sethideHello(switcher);
  };
  const [validator, setValidator] = useState("");
  if (!hideHello) {
    return <Hello callbackForHello={callbackForHello} />;
  }

  return (
    <div className="app__root">
      <div className="container">
        <div className="autorization__wrapper">
          <div className="autorization__text">
            <div className="autorization__headers">
              <h1 className="hello__hello">Для начала...</h1>
              <h4 className="hello__description">
                Давай - ка авторизуемся иии...
                <br /> приступим к тесту!
              </h4>
            </div>
            <div className="autorization__inputs">
              <div className="autorization__input-wrapper">
                <label className="autorization__label">логин:</label>
                <input
                  className="autorization__input"
                  type="text"
                  value={autorization.login}
                  onChange={(e) => {
                    setAutorization({ ...autorization, login: e.target.value });
                    if (e.target.value !== "student") {
                      setValidator("не узнаю тебя(");
                    } else {
                    }
                  }}
                />
                <label className="autorization__valid">{validator}</label>
              </div>
              <div className="autorization__input-wrapper">
                <label className="autorization__label">пароль:</label>
                <input
                  className="autorization__input"
                  type="password"
                  value={autorization.password}
                  onChange={(e) => {
                    setAutorization({
                      ...autorization,
                      password: e.target.value,
                    });
                    if (e.target.value !== "studentPass") {
                      setValidator("не узнаю тебя(");
                    } else {
                      setValidator("ох, это ты!), пропускаю...");
                    }
                  }}
                />
                <label className="autorization__valid">{validator}</label>
              </div>
            </div>
          </div>
          <img
            className="autorization__img"
            src={autorizationPicture}
            alt="autorizationPicture"
          />
        </div>
      </div>
    </div>
  );
};

export default Autorization;
