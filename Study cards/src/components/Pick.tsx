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
  const [mess, setMess] = useState<string | null>(null);
  const [qAttened, setQAttended] = useState<number>(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_CARD_DETAILS}/picker-cards`)
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
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  },[]);

  if (error != null) return <PickMess>{error + ""}</PickMess>;
  if (loading) return <PickMess>Loading</PickMess>;

  const showResult = () => {
    const messElement = document.getElementById("heading");
    if (qAttened >= datas.length) {
      messElement?.classList.remove("text-light");
      if (datas.length === marks) {
        messElement?.classList.add("text-success");
        setMess(`${marks + " / " + datas.length} Excellent Great job :)`);
      } else if (datas.length / marks < 2) {
        messElement?.classList.add("text-primary");
        setMess(`${marks + " / " + datas.length} Good job !`);
      } else if (datas.length / marks < 2.5) {
        messElement?.classList.add("text-info");
        setMess(`${marks + " / " + datas.length} Cool !`);
      } else {
        messElement?.classList.add("text-danger");
        setMess(`${marks + " / " + datas.length} Prepare well next time !!!`);
      }
    }
  };
  if (qAttened == datas.length) {
    showResult();
    setQAttended(-1);
  }

  return (
    <div className="container">
      <header className="sticky-top">
        <div className="p-2 mt-3 ps-3 bg-dark card border-5 border-light">
          <div className="row">
            <h1 id="heading" className="col-lg-10 col-md-8 col-sm-6 col-6 text-light bg-dark">
              {mess
                ? `${mess}  Restart ? - > `
                : `MARKS = ${marks}/${datas.length}`}
            </h1>
            <div className="col-2 m-auto">
              <button
                onClick={() => window.location.reload()}
                className="btn btn-secondary"
              >
                <strong>Restart</strong>
              </button>
            </div>
          </div>
        </div>
        <div className="justify-content-center row">
        <div style={{position:"absolute"}} className="col-lg-4 col-md-6 col-sm-10 col-11">
          <div className="toast bg-danger text-light ps-2" id="toast"><h5>Another Question is being attended</h5></div>
        </div>
      </div>
      </header>
      
      <div className="row">
        {datas.map((Cards) => (
          <div
            id={"pickID" + Cards.id.toString()}
            className="col-lg-3 col-md-4 col-sm-6 col-6 my-2"
          >
            <PickCard
              qno={Cards.id}
              qType={Cards.qtype}
              question={Cards.question}
              answer={Cards.answer}
              options={Cards.options}
              correct_option={Cards.correctOption}
              setMarks={setMarks}
              marks={marks}
              setAtterning={setAtterning}
              atterning={atterning}
              setQAttended={setQAttended}
              qAttended={qAttened}
              parentID={"pickID" + Cards.id.toString()}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pick;
