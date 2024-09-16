const Add: React.FC = () => {
  const handleSubmit = () => {
    const type = document.getElementById("type")?.value;
    const qn = document.getElementById("qn")?.value;
    const ans = document.getElementById("ans")?.value;
    try {
      fetch(`http://localhost:8080/cards/add`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qtype: type, question: qn, answer: ans }),
      });
      alert("add sucessusfull");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Type" id="type" />
      <input type="text" placeholder="Question" id="qn" />
      <input type="text" placeholder="Answer" id="ans" />
      <input
        type="submit"
        value="submit"
        onClick={() => {
          handleSubmit();
        }}
      />
    </div>
  );
};

export default Add;
