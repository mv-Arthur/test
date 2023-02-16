import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import Results from "./components/Results";
import Autorization from "./components/Autorization";
import answerPicture from "./img/answer_picture.png";
function App() {
  const [pageSibling, setPageSibling] = useState(0);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([
    {
      question: "Вторая мировая война началась с нападения Германии на",
      answers: ["СССР", "Данию", "Англию", "Польшу"],
      correct: "Польшу",
    },
    {
      question: "Союзником СССР во Второй мировой войне была",
      answers: ["Италия", "Румыния", "Англия", "Испания"],
      correct: "Англия",
    },
    {
      question: "Формирование антигитлеровской коалиции началось с подписания",
      answers: [
        "Мюнхенского договора",
        "советско-германского пакта о ненападении",
        "документа о созыве Организации Объединенных Наций",
        "англо-советской декларации о взаимной помощи и поддержке",
      ],
      correct: "англо-советской декларации о взаимной помощи и поддержке",
    },
    {
      question: "Немецкий стратегический план молниеносной войны",
      answers: [
        "блицкриг",
        "холокост",
        " «странная война»",
        "движение Сопротивления",
      ],
      correct: "блицкриг",
    },
    {
      question: "Перл-Харбор — это",
      answers: [
        "место открытия второго фронта в Европе",
        "английская крепость, оказавшая упорное сопротивление немецким войскам",
        "место морского сражения, ставшего переломным в войне на Тихом океане",
        "американская военно-морская база на Гавайских островах, ставшая первым объектом японской агрессии на Тихом океане",
      ],
      correct:
        "американская военно-морская база на Гавайских островах, ставшая первым объектом японской агрессии на Тихом океане",
    },
    {
      question:
        "Коренной перелом во Второй мировой войне завершило сражение под",
      answers: ["Курском", "Дюнкерком", "Сталинградом", "Эль-Аламейном"],
      correct: "Курском",
    },
    {
      question:
        "Военный деятель, командовавший немецкими войсками во Второй мировой войне",
      answers: ["Э. Роммель", "Д. Макартур", "Б. Монтгомери", "Д. Эйзенхауер"],
      correct: "Э. Роммель",
    },
    {
      question: "Вторая мировая война закончилась",
      answers: [
        "6 июня 1944 г.",
        "25 апреля 1945 г.",
        "8 мая 1945 г.",
        "2 сентября 1945 г.",
      ],
      correct: "2 сентября 1945 г.",
    },
    {
      question: "Итог Второй мировой войны",
      answers: [
        "создание Коминтерна",
        "разгром фашизма и нацизма",
        "разделение Японии на сферы влияния",
        "ослабление позиций США на международной арене",
      ],
      correct: "разгром фашизма и нацизма",
    },
    {
      question: "Вторая мировая война закончилась",
      answers: [
        "взятием Берлина",
        "капитуляцией Японии",
        "арестом Муссолини и Гитлера",
        "«встречей на Эльбе» союзников",
      ],
      correct: "капитуляцией Японии",
    },
    {},
  ]);

  const pageSible = () => {
    if (pageSibling < questionsAndAnswers.length - 1) {
      setPageSibling(pageSibling + 1);
    }
  };

  const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);
  const [countUncorrectAnswer, setCountUncorrectAnswer] = useState(0);

  const [correctAnswer, setCorrectAnswer] = useState(false);

  const callbackForCorrectAnswer = (answer) => {
    setCorrectAnswer(answer);
  };

  const getCheckBoxes = (button) => {
    return Array.from(button.parentNode.children[0].children[1].children).map(
      (checkboxParent) => {
        return checkboxParent.children[0];
      }
    );
  };

  const next = (e) => {
    pageSible();
    const checkboxes = getCheckBoxes(e.target);
    if (correctAnswer) {
      setCountCorrectAnswer(countCorrectAnswer + 1);
    } else {
      setCountUncorrectAnswer(countUncorrectAnswer + 1);
    }
    clearCheckboxes(checkboxes); //очищаем чекбоксы
    setCorrectAnswer(false); //изменяем состояние при нажатии на next
  };

  const clearCheckboxes = (checkboxes) => {
    checkboxes.forEach((checkbox) => (checkbox.checked = false)); //очищает чекбоксы
  };
  const [validation, setValidation] = useState(false);
  if (pageSibling === questionsAndAnswers.length - 1)
    return (
      <Results
        correctAnswers={countCorrectAnswer}
        uncorrectAnswers={countUncorrectAnswer}
      />
    );

  const callbackForAutorization = (valid) => {
    setTimeout(() => {
      setValidation(valid);
    }, 1000);
  };
  return (
    <div className="App">
      {validation ? (
        <>
          <Card
            question={questionsAndAnswers[pageSibling].question}
            answers={questionsAndAnswers[pageSibling].answers}
            correct={questionsAndAnswers[pageSibling].correct}
            callbackForCorrectAnswer={callbackForCorrectAnswer}
          />
          <button className="answer__btn" onClick={next}>
            next
          </button>
          <img
            src={answerPicture}
            alt="answerPicture"
            className="answer__picture"
          />
        </>
      ) : (
        <Autorization callbackForAutorization={callbackForAutorization} />
      )}
    </div>
  );
}

export default App;
