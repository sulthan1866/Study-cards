const Add: React.FC = () => {
  const handleSubmit = () => {
    const Etype = document.getElementById("type") as HTMLInputElement;
    const type = Etype.value;
    const Eqn = document.getElementById("qn") as HTMLInputElement;
    const qn = Eqn.value;
    const Eans = document.getElementById("ans") as HTMLInputElement;
    const ans = Eans.value;

    const Eop1 = document.getElementById("op1") as HTMLInputElement;
    const Eop2 = document.getElementById("op2") as HTMLInputElement;
    const Eop3 = document.getElementById("op3") as HTMLInputElement;
    const Eop4 = document.getElementById("op4") as HTMLInputElement;

    const options = [Eop1.value, Eop2.value, Eop3.value, Eop4.value];

    const Ecorrect_option = document.getElementById("cop") as HTMLInputElement;
    const correct_option = Ecorrect_option.value;
    try {
      fetch(`http://localhost:8080/cards/add`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          qtype: type,
          question: qn,
          answer: ans,
          options: options,
          correctOption: correct_option,
        }),
      });
      alert("add sucessusfull");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container mt-4">
  <div className="row justify-content-center">
    <div className="col-lg-6 col-md-8 col-sm-10">
      <form onSubmit={(e)=>{e.preventDefault(); handleSubmit();}}>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <input
            type="text"
            className="form-control"
            id="type"
            placeholder="Enter type"
            required
            autoFocus
          />
        </div>

        <div className="mb-3">
          <label htmlFor="qn" className="form-label">Question</label>
          <input
            type="text"
            className="form-control"
            id="qn"
            placeholder="Enter question"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ans" className="form-label">Answer</label>
          <input
            type="text"
            className="form-control"
            id="ans"
            placeholder="Enter answer"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="op1" className="form-label">Option 1</label>
          <input
            type="text"
            className="form-control"
            id="op1"
            placeholder="Option 1"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="op2" className="form-label">Option 2</label>
          <input
            type="text"
            className="form-control"
            id="op2"
            placeholder="Option 2"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="op3" className="form-label">Option 3</label>
          <input
            type="text"
            className="form-control"
            id="op3"
            placeholder="Option 3"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="op4" className="form-label">Option 4</label>
          <input
            type="text"
            className="form-control"
            id="op4"
            placeholder="Option 4"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cop" className="form-label">Correct Option (A/B/C/D)</label>
          <input
            type="text"
            className="form-control"
            id="cop"
            placeholder="Correct option (A/B/C/D)"
            pattern="A|[B-D]"
            required
          />
        </div>

        <div className="text-center">
          <input
            type="submit"
            className="btn btn-primary"
            value="Submit"
           
          />
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default Add;
