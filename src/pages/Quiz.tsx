import { removeListener } from "process";
import { useState } from "react"

export default function Quizscreen() {
  var questions = [
    {
      question: "HTML Stands For _________",
      options: [
        "Anchor Text Language",
        "HTML",
        "Case Cading Style Sheet",
        "HyperText markup language",
      ],
      correctAns: "HyperText markup language",
    },
    {
      question: "CSS Stands For _________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "JS Stands For _________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "DOM Stands For _________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "RAM Stands For _________",
      options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
      correctAns: "Random Access Memory",
    },
    {
      question: "ROM Stands For _________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ]
  const [currnentInd, setcurrentInd] = useState(0)
  const handleReset = () => {
    setcurrentInd(0);
  };
  return (


    <div className="main">
      <h1 className="text-center text-warning">Quiz App </h1>
      <p className="text-center text-danger">{currnentInd + 1} / {questions.length}Question </p>
      <p className="text-center text-primary-emphasis">{questions[currnentInd].question}</p>
      <ul className="text-center">
        {questions[currnentInd].options.map((x, i) => (
          <button className="text-primary bg-dark m-2 " key={i} onClick={() => {
            setcurrentInd(currnentInd + 1)

          }}> {x}</button>
          
        ))}
        <button onClick={handleReset}>Reset</button>
      </ul>
    </div>
  )

}


