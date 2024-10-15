import { useEffect, useState } from "react";
import PickCard from "./PickCard";
import PickMess from "./Error/loading/PickMess";
interface Cards {
  id: number;
  qtype: string;
  question: string;
  answer: string;
  options: ["", "", "", ""];
  correctOption: string;
}

function Pick() {
  const [datas, setDatas] = useState<Cards[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [marks, setMarks] = useState<number>(0);
  const [atterning, setAtterning] = useState<boolean>(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_CARD_DETAILS}/cards`)
      .then((response) => {
        if (!response.ok) {
          setError(response.statusText);
          throw response.statusText;
        } else return response.json();
      })
      .then((data) => {
        setLoading(false);
        setDatas(data);
      })
      .catch(() => {
        setLoading(false);
      });
  });

  if (error != null) return <PickMess>{error}</PickMess>;
  if (loading) return <PickMess>Loading</PickMess>;

  return (
    <div className="container">
      <h1 className="bg-dark p-2 text-light card mt-3 ps-3 sticky-top">
        MARKS = {marks}/{datas.length}
      </h1>
      <div className="row">
        {datas.map((Cards) => (
          <div
            id={"pickID" + Cards.id.toString()}
            className="col-lg-3 col-md-4 col-sm-6 col-6 my-2"
          >
            <PickCard
              qno={Cards.id}
              question={Cards.question}
              answer={Cards.answer}
              options={Cards.options}
              correct_option={Cards.correctOption}
              setMarks={setMarks}
              marks={marks}
              setAtterning={setAtterning}
              atterning={atterning}
              parentID={"pickID" + Cards.id.toString()}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pick;
