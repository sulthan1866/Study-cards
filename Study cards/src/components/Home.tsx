import { useEffect, useState } from "react";
import Card from "./Card";
import Message from "./Error/loading/Message";

interface Props {
  tester: boolean;
  genre:string;
}

interface Cards {
  id: number;
  qtype: string;
  question: string;
  answer: string;
  options: ["", "", "", ""];
  correctOption: string;
}

function Home({ tester ,genre}: Props) {
  const [id, setId] = useState<number>(1);
  const [data, setData] = useState<Cards | null>(null);
  const [datas, setDatas] = useState<Cards[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<boolean>(false);

  const preButton = document.getElementById("pre");
  const nextButton = document.getElementById("next");

  const onClick = () => {
    if (value) {
      if (!tester) setValue(false);
    } else {
      setValue(true);
    }
  };

  if (tester) {
    preButton?.setAttribute("disabled", "");
  }

  if (id <= 1) {
    preButton?.setAttribute("disabled", "");
  } else if (!tester) {
    preButton?.removeAttribute("disabled");
  }

  if (id >= datas.length) {
    nextButton?.setAttribute("disabled", "");
  } else {
    nextButton?.removeAttribute("disabled");
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_CARD_DETAILS}/${genre}/cards/${id}`)
      .then((response) => {
        if (!response.ok) {
          setError(response.statusText);
          throw response.statusText;
        } else {
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
  }, [id,genre]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_CARD_DETAILS}/${genre}/cards`)
      .then((response) => {
        if (!response.ok) {
          setError(response.statusText);
          throw response.statusText;
        } else {
          return response.json();
        }
      })
      .then((datas: Cards[]) => {
        setDatas(datas);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [genre]);

  if (loading) return <Message>Loading</Message>;

  if (error != null) return <Message>{error + ""}</Message>;

  return (
    <div className="container col-lg-4 col-md-6 col-sm-10 col-11">
      {data && (
        <>
          <div className="row display-5 d-flex justify-content-center m-1 mb-1">
            {data.qtype}
          </div>

          <div className="row">
            <div className="d-flex justify-content-center">
              <div id="card" className="m-1 mb-5 mt-5">
                <Card
                  qno={id}
                  question={data.question}
                  answer={data.answer}
                  options={data.options}
                  correct_option={data.correctOption}
                  value={value}
                  tester={tester}
                  length={datas.length}
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
                  if (!(tester && !value)) {
                    setId(id + 1);
                    setValue(false);
                  }
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
}

export default Home;
