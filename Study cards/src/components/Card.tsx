import React, { useState } from "react";

interface Props {
  qno: number;
  question: string;
  answer: string;
  options: ['','','',''];
  correct_option: string;
  value: boolean;
  onClick: () => void;
}

function Card({question,answer,value,onClick,qno,options,correct_option,}: Props) {
  
  const [mess, setMess] = useState<string>("");
  const [option, setOption] = useState<string>("");
  const [correction, setCorrection] = useState<string>("");

  const changeOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);
    console.log(option);
  };

  const nocurser: React.CSSProperties = {
    cursor: "default",
    height: 400,

    width: 400,
  };

  document.getElementsByName("option").forEach((o) => {
    o.addEventListener("click", () => {
      setMess("Double click to check answer");
    });
  });

  const check = () => {
    if (option === correct_option) {
      setCorrection("CORRECT ANSWER");
    } else {
      setCorrection("WRONG ANSWER");
    }
  };

  return (
    <div
      style={nocurser}
      className={"card bg-dark p-lg-3 p-sm-1 p-1 card-deck"}
      onDoubleClick={() => {
        onClick();
        setMess("");
        check();
      }}
    >
      <div className="card-body" id="card">
        <h3>
          <strong className="text-light card-title">
            {value ? correction : `Question: ${qno}`}
          </strong>
        </h3>
        <p className="text-light card-text">
          {value ? `correct option :"${correct_option}"` : question}
        </p>
        {value ? (
          <p className="text-light">{`Explanation : ${answer} `}</p>
        ) : (
          <ul className="text-light small">
            <li>
              <label className="m-2">
                <input
                  type="radio"
                  value="A"
                  name="option"
                  onChange={changeOption}
                />
                A) {options[0]}
              </label>
            </li>
            <li>
              <label className="m-2">
                <input
                  type="radio"
                  value="B"
                  name="option"
                  onChange={changeOption}
                />
                B) {options[1]}
              </label>
            </li>
            <li>
              <label className="m-2">
                <input
                  type="radio"
                  value="C"
                  name="option"
                  onChange={changeOption}
                />
                C) {options[2]}
              </label>
            </li>
            <li>
              <label className="m-2">
                <input
                  type="radio"
                  value="D"
                  name="option"
                  onChange={changeOption}
                />
                D) {options[3]}
              </label>
            </li>
          </ul>
        )}
        <p id="mess" className="text-light">
          {mess}
        </p>
      </div>
    </div>
  );
}

export default Card;
