import React, { useState } from "react";

interface Props {
  qno: number;
  question: string;
  answer: string;
  options: ['','','',''];
  correct_option: string;
  value: boolean;
  tester:boolean
  length:number
  onClick: () => void;
}

function Card({question,answer,value,onClick,qno,options,correct_option,tester,length}: Props) {
  
  const [mess, setMess] = useState<string>("");
  const [option, setOption] = useState<string>("");
  const [correction, setCorrection] = useState<string>("");
  const [marks,setMarks] = useState<number>(0);

  const changeOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);
    
  };

  const nocurser: React.CSSProperties = {
    cursor: "default",
    height: 450,

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
      if(tester && !value) setMarks(marks+1)
    } else {
      setCorrection("WRONG ANSWER");
    }
  };

  

  const showResult = ()=>{
    const messElement=document.getElementById("mess");
    if(qno>=length && tester){
      if(length===marks){messElement?.classList.add("text-success") ;setMess(`${marks+" / "+length} Excellent Great job :)`)}
        else if(length/marks<2){messElement?.classList.add("text-primary");setMess(`${marks+" / "+length} Good job !`)}
        else if(length/marks<2.5){messElement?.classList.add("text-primary");setMess(`${marks+" / "+length} Cool !`)}
      
      else {messElement?.classList.add("text-danger");setMess(`${marks+" / "+length} Prepare well next time !!!`);}
      
      

    }
  }

  return (
    <div
      style={nocurser}
      className={"card bg-dark p-lg-3 p-sm-1 p-1 card-deck"}
      onDoubleClick={() => {
        onClick();
        setMess("");
        check();
        showResult();
      }}
    >
      <div className="card-body text-light" id="card">
        <h3>
          <strong className=" card-title">
            {value ? correction : `Question: ${qno}`}
          </strong>
        </h3>
        <p className="card-text">
          {value ? `correct option :"${correct_option}"` : question}
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
        <p id="mess">
          {(tester)?(qno==1&&!value)?mess:(qno>=length)?mess:` marks = ${marks}`:mess}
        </p>
      </div>
    </div>
  );
}

export default Card;
