import { Link } from "react-router-dom";

function GenreChooser() {
  return (
    <>
      <div className="container col-lg-4 col-md-6 col-sm-10 col-11">
        <div className="row">
          <div className="display-4 d-flex m-5">
            Choose a Genre
          </div>
        </div>
        <div className="d-flex justify-content-center my-5">
          <div className="card col-12 p-2">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <Link to={`dsa`}>
                  <button
                    className="btn btn-primary m-1"
                  >
                    DSA
                  </button>
                </Link>
              </div>

              <div className="col d-flex justify-content-center">
                <Link to={`ai`}>
                  <button
                    className="btn btn-primary m-1"
                  >
                    AI
                  </button>
                </Link>
              </div>

              <div className="col d-flex justify-content-center">
                <Link to={`fun`}>
                  <button
                    className="btn btn-primary m-1"
                  >
                    FUN
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GenreChooser