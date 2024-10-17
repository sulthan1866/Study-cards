import React, { useState } from "react";
import {Toast} from "bootstrap";

interface Props {
  qno: number;
  qType:string,
  question: string;
  answer: string;
  options: ["", "", "", ""];
  correct_option: string;
  setMarks: (value: React.SetStateAction<number>) => void;
  marks: number;
  setAtterning: (value: React.SetStateAction<boolean>) => void;
  atterning: boolean;
  setQAttended: (value: React.SetStateAction<number>) => void;
  qAttended: number;
  parentID: string;
}

function PickCard({
  qType,
  question,
  answer,
  qno,
  options,
  correct_option,
  setMarks,
  marks,
  setAtterning,
  atterning,
  setQAttended,
  qAttended,
  parentID,
}: Props) {
  const [mess, setMess] = useState<string>("");
  const [option, setOption] = useState<string>("");
  const [correction, setCorrection] = useState<string>("");
  const [value, setValue] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);

  const cardId = "card" + qno.toString();
  const cardEle = document.getElementById(cardId) as Node;

  const changeOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);
    event.stopPropagation();
  };

  const fullCard: React.CSSProperties = {
    cursor: "default",
    height: selected ? 450 : 400,
    width: selected ? 400 : "auto",
    position: selected ? "absolute" : "static",
  };

  const flip: React.CSSProperties = {
    transition: "transform 0.6s",
    transform: value ? "rotateY(180deg)" : "none",
  };

  const unflip: React.CSSProperties = {
    transform: value ? "rotateY(180deg)" : "none",
  };

  document.getElementsByName("option").forEach((o) => {
    o.addEventListener("click", () => {
      setMess("Double click to check answer");
    });
  });

  const check = () => {
    if (option === correct_option) {
      setCorrection("CORRECT ANSWER");
      if (!value) setMarks(marks + 1);
    } else {
      setCorrection("WRONG ANSWER");
    }
  };

  return (
    <div
      id={cardId}
      style={{ ...fullCard, ...flip }}
      className={
        "card bg-dark p-lg-3 p-sm-1 p-1 card-deck border-5 border-secondary"
      }
      onClick={() => {
        if (!atterning) {
          setSelected(true);
          setAtterning(true);
        }else if(!selected){
            const myToast = new Toast(document.getElementById('toast') as Element, {
              delay: 5000
            });
            myToast.show();
          
        }
      }}
      onDoubleClick={() => {
        if (selected && atterning) {
          setValue(true);
          setMess("");
          check();
        }
      }}
    >
      {selected && (
        <div className="card-body text-light" id="card" style={unflip}>
          <h3>
            <strong className=" card-title">
              {value ? correction : qType.toUpperCase()}
            </strong>
          </h3>
          <p className="card-text">
            {value ? `Correct Option :"${correct_option}"` : question}
          </p>
          {value ? (
            <p className="">{`Explanation : ${answer} `}</p>
          ) : (
            <ul className="small">
              <li>
                <label className="m-2">
                  <input
                    type="radio"
                    value={options[0]}
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
                    value={options[1]}
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
                    value={options[2]}
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
                    value={options[3]}
                    name="option"
                    onChange={changeOption}
                  />
                  D) {options[3]}
                </label>
              </li>
            </ul>
          )}
          <p id="mess">{mess}</p>
          {value && (
            <div className="justify-content-end row">
              <button
                onClick={() => {
                  if (selected) {
                    document.getElementById(parentID)?.removeChild(cardEle);
                    setSelected(false);
                    setAtterning(false);
                    setQAttended(qAttended + 1);
                  }
                }}
                className="col-3 btn btn-secondary"
              >
                Next
              </button>
              <div className="col-1"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PickCard;
