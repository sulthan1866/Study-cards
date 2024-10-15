import PickCard from "../../PickCard";
import "./PickMess.css";

interface Props {
  children: string;
}

function PickMess({ children }: Props) {
  const datas = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

  const loading: React.CSSProperties = {
    animation: "lodin 2s infinite",
  };

  return (
    <div className="container" style={loading}>
      <h1 className="p-2 card mt-3 ps-3 sticky-top bg-dark text-light">
        {children}
      </h1>
      <div className="row">
        {datas.map(() => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 my-2">
            <PickCard
              qno={0}
              question={""}
              answer={""}
              options={["", "", "", ""]}
              correct_option={""}
              setMarks={() => Node}
              marks={0}
              setAtterning={() => Node}
              atterning={false}
              parentID={""}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PickMess;
