








import { useState } from "react";
import { Link } from "react-router-dom";

function Chooser() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <>
      <div className="container col-4">
        <div className="row">
          <div className="display-4 d-flex justify-content-center m-5">
            Choose a mode
          </div>
        </div>
        <div className="d-flex justify-content-center my-5">
          <div className="card col-12 p-2">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <Link to={`/play`}>
                  <button
                    onMouseEnter={() => setHover("play")}
                    onMouseLeave={() => setHover(null)}
                    className="btn btn-primary"
                  >
                    Play
                  </button>
                </Link>
              </div>
              <div className="col d-flex justify-content-center">
                <Link to={`/study`}>
                  <button
                    onMouseEnter={() => setHover("study")}
                    onMouseLeave={() => setHover(null)}
                    className="btn btn-primary"
                  >
                    Study
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="alert alert-warning">
          {(hover!=null)?hover == "play" ? "Test: mark will be counted and options can't be changed once answer is viewed" : "Study: No restrictions but still can choose answer and check if its right":""}
        </div>
      </div>
    </>
  );
}

export default Chooser;
