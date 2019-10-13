import React, { useState } from "react";

const QuizBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  //   setAnswer is a function to update the answer variable

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
          key={index}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuizBox;
