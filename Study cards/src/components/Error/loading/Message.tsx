import Card from "../../Card";

interface Props {
  children: string;
  waitMess:string;
}
function Message({ children ,waitMess}: Props) {
  const onClick = () => {
    return;
  };

  return (
    <div className="container col-lg-4 col-md-6 col-sm-10 col-11">
      {
        <>
          <div className="row display-5 d-flex justify-content-center m-1 mb-1"></div>

          <div className="row">
            <div className="d-flex justify-content-center">
              <div id="card" className="m-1 mb-5 mt-5">
                <Card
                  qno={0}
                  question={waitMess}
                  answer={""}
                  options={[children, children, children, children]}
                  correct_option={""}
                  value={false}
                  tester={false}
                  length={0}
                  onClick={onClick}
                ></Card>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default Message;
