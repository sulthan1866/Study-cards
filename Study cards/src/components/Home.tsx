import { useEffect, useState } from "react";
import Card from "./Card";

interface Cards {
  id: number;
  qtype: string;
  question: string;
  answer: string;
  options: ["", "", "", ""];
  correctOption: string;
}

function Home(){
  const [id, setId] = useState<number>(1);
  const [data, setData] = useState<Cards | null>(null);
  const [datas, setDatas] = useState<Cards[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<boolean>(false);

  const onClick = () => {
    if (value) {
      setValue(false);
    } else {
      setValue(true);
    }
  };

  if (id <= 1) {
    document.getElementById("pre")?.setAttribute("disabled", "");
  } else {
    document.getElementById("pre")?.removeAttribute("disabled");
  }

  if (id >= datas.length) {
    document.getElementById("next")?.setAttribute("disabled", "");
  } else {
    document.getElementById("next")?.removeAttribute("disabled");
  }

  useEffect(() => {
    fetch(`http://localhost:8080/cards/${id}`)
      .then((response) => {
        if (!response.ok) throw response.statusText;
        else {
          return response.json();
        }
      })
      .then((data: Cards) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);
  
  useEffect(() => {
    fetch(`http://localhost:8080/cards`)
      .then((response) => {
        if (!response.ok) throw response.statusText;
        else {
          return response.json();
        }
      })
      .then((datas: Cards[]) => {
        setDatas(datas);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>loading</h1>;

  if (error) return <h1>error</h1>;
  return (
    <div className="container col-lg-4 col-sm-8 col-9">
      {data && (
        <>
          <div className="row display-5 d-flex justify-content-center m-1 mb-1">
            {data.qtype}
          </div>

          <div className="row">
            <div className="d-flex justify-content-center">
              <div className="m-1 mb-5 mt-5">
                <Card
                  qno={data.id}
                  question={data.question}
                  answer={data.answer}
                  options={data.options}
                  correct_option={data.correctOption}
                  value={value}
                  onClick={onClick}
                ></Card>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1">
              <button
                id="pre"
                className="btn btn-primary"
                onClick={() => {
                  setId(id - 1);
                  setValue(false);
                }}
              >
                prev
              </button>
            </div>
            <div className="col-9"></div>
            <div className="col-1">
              <button
                id="next"
                className="btn btn-primary"
                onClick={() => {
                  setId(id + 1);
                  setValue(false);
                }}
              >
                next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
