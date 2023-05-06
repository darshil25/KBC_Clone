import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "What color are bananas when they are ripe?",
      answers: [
        {
          text: "Red",
          correct: false,
        },
        {
          text: "Blue",
          correct: false,
        },
        {
          text: "Yellow",
          correct: true,
        },
        {
          text: "Green",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is the name of the largest ocean on Earth?",
      answers: [
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Pacific Ocean",
          correct: true,
        },
        {
          text: "Arctic Ocean",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which planet is closest to the Sun?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Mercury",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: "Michelangelo",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the capital of India?",
      answers: [
        {
          text: "Mumbai",
          correct: false,
        },
        {
          text: "Kolkata",
          correct: false,
        },
        {
          text: "New Delhi",
          correct: true,
        },
        {
          text: "Chennai",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the name of the world's tallest mountain?",
      answers: [
        {
          text: "Mount Kilimanjaro",
          correct: false,
        },
        {
          text: "Mount Everest",
          correct: true,
        },
        {
          text: "Mount Denali",
          correct: false,
        },
        {
          text: "Mount McKinley",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which famous scientist is known for his theory of relativity?",
      answers: [
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: true,
        },
        {
          text: "Galileo Galilei",
          correct: false,
        },
        {
          text: "Charles Darwin",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the smallest country in the world by land area?",
      answers: [
        {
          text: "Vatican City",
          correct: true,
        },
        {
          text: "Monaco",
          correct: false,
        },
        {
          text: "San Marino",
          correct: false,
        },
        {
          text: "Liechtenstein",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which planet is closest to the Sun?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Mercury",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which planet is closest to the Sun?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Mercury",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Which planet is closest to the Sun?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Mercury",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "Which planet is closest to the Sun?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Mercury",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Which planet is closest to the Sun?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Mercury",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Which planet is closest to the Sun?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Mercury",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Which planet is closest to the Sun?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Mercury",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 1000" },
        { id: 2, amount: "₹ 2000" },
        { id: 3, amount: "₹ 3000" },
        { id: 4, amount: "₹ 5000" },
        { id: 5, amount: "₹ 1,000" },
        { id: 6, amount: "₹ 20,000" },
        { id: 7, amount: "₹ 40,000" },
        { id: 8, amount: "₹ 80,000" },
        { id: 9, amount: "₹ 1,60,000" },
        { id: 10, amount: "₹ 3,20,000" },
        { id: 11, amount: "₹ 6,40,000" },
        { id: 12, amount: "₹ 12,50,000" },
        { id: 13, amount: "₹ 25,00,000" },
        { id: 14, amount: "₹ 50,00,000" },
        { id: 15, amount: "₹ 1,00,00,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
