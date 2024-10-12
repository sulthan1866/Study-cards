import { useEffect, useState } from "react";
import PickCard from "./PickCard";
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

  useEffect(() => {
    fetch(`${import.meta.env.VITE_CARD_DETAILS}/cards`)
      .then((response) => {
        if (!response.ok) throw response.statusText;
        else return response.json();
      })
      .then((data) => {
        setLoading(false);
        setDatas(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  });

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading</h1>;

  return (
    <div className="container">
      <h1 className="bg-dark p-2 text-light">curr marks = {marks}</h1>
      <div className="row">
        {datas.map((Cards) => (
          <div className="col-3 m-2">
            <PickCard
              qno={Cards.id}
              question={Cards.question}
              answer={Cards.answer}
              options={Cards.options}
              correct_option={Cards.correctOption}
              setMarks={setMarks}
              marks={marks}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pick;
