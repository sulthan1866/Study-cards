import PickCard from "../../PickCard";
import "./PickMess.css";

interface Props {
  children: string;
}

function PickMess({ children }: Props) {
  const datas = ["", "", "", "", "", "", "", "", "", "", "", ""];

  const loading: React.CSSProperties = {
    animation: "lodin 2s infinite",
    "cursor":"wait"
  };

  return (
    <div className="container" style={loading}>
      <h1 className="p-2 card mt-3 ps-3 sticky-top bg-dark text-light border-5 border-light">
        {children}
      </h1>
      <div className="row">
        {datas.map(() => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 my-2">
            <PickCard
              qno={0}
              qType={""}
              question={""}
              answer={""}
              options={["", "", "", ""]}
              correct_option={""}
              setMarks={() => Node}
              marks={0}
              setAtterning={() => Node}
              atterning={false}
              setQAttended={() => Node}
              qAttended={-1}
              parentID={""}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PickMess;
