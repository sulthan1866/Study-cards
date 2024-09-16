import { Link } from "react-router-dom";

function Chooser() {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="display-1">Choose a mode</div>
        </div>
        <div className="card ">
          <div className="row">
            <Link to={`/play`}>
              <div className="">
                <button className="btn btn-primary m-2">Play</button>
              </div>
            </Link>
            <Link to={`/study`}>
              <div className="">
                <button className="btn btn-primary">Study</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chooser;
