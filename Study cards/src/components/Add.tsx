// import { useState } from "react";

// const Add: React.FC = () => {

//   const [typeLength, setTypeLength] = useState<number>(0);
//   const [questionLength, setQuestionLength] = useState<number>(0);
//   const [answerLength, setAnswerLength] = useState<number>(0);
//   const [option1Length, setOption1Length] = useState<number>(0);
//   const [option2Length, setOption2Length] = useState<number>(0);
//   const [option3Length, setOption3Length] = useState<number>(0);
//   const [option4Length, setOption4Length] = useState<number>(0);
//   const [correctOptionLength, setCorrectOptionLength] = useState<number>(0);

  
//   const handleSubmit = () => {
//     const Etype = document.getElementById("type") as HTMLInputElement;
//     const type = Etype.value;
//     const Eqn = document.getElementById("qn") as HTMLInputElement;
//     const qn = Eqn.value;
//     const Eans = document.getElementById("ans") as HTMLInputElement;
//     const ans = Eans.value;

//     const Eop1 = document.getElementById("op1") as HTMLInputElement;
//     const Eop2 = document.getElementById("op2") as HTMLInputElement;
//     const Eop3 = document.getElementById("op3") as HTMLInputElement;
//     const Eop4 = document.getElementById("op4") as HTMLInputElement;

//     const options = [Eop1.value, Eop2.value, Eop3.value, Eop4.value];

//     const Ecorrect_option = document.getElementById("cop") as HTMLInputElement;
//     const correct_option = Ecorrect_option.value;
//     try {
//       fetch(`${import.meta.env.VITE_CARD_DETAILS}/cards/add`, {
//         method: "POST",

//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           qtype: type,
//           question: qn,
//           answer: ans,
//           options: options,
//           correctOption: correct_option,
//         }),
//       });
//       alert("add sucessusfull");
//     } catch (error) {
//       alert(error);
//     }
//   };

//   return (
//    <div className="container mt-4">
//       <div className="row justify-content-center">
//         <div className="col-lg-6 col-md-8 col-sm-10">
//           <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            
//             <div className="mb-3">
//               <label htmlFor="type" className="form-label">Type</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="type"
//                 placeholder="Enter type"
//                 required
//                 autoFocus
//                 maxLength={25}
//                 onInput={(e) => setTypeLength(e.currentTarget.value.length)}
//               />
//               <small>{typeLength}/25 characters</small>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="qn" className="form-label">Question</label>
//               <textarea
//               rows={3}
//                 className="form-control"
//                 id="qn"
//                 placeholder="Enter question"
//                 required
//                 maxLength={150}
//                 onInput={(e) => setQuestionLength(e.currentTarget.value.length)}
//               />
//               <small>{questionLength}/150 characters</small>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="ans" className="form-label">Explanation</label>
//               <textarea
//                 rows={5}
//                 className="form-control"
//                 id="ans"
//                 placeholder="Enter Explanation"
//                 required
//                 maxLength={425}
//                 onInput={(e) => setAnswerLength(e.currentTarget.value.length)}
//               />
//               <small>{answerLength}/425 characters</small>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="op1" className="form-label">Option 1</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="op1"
//                 placeholder="Option 1"
//                 required
//                 maxLength={75}
//                 onInput={(e) => setOption1Length(e.currentTarget.value.length)}
//               />
//               <small>{option1Length}/75 characters</small>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="op2" className="form-label">Option 2</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="op2"
//                 placeholder="Option 2"
//                 required
//                 maxLength={75}
//                 onInput={(e) => setOption2Length(e.currentTarget.value.length)}
//               />
//               <small>{option2Length}/75 characters</small>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="op3" className="form-label">Option 3</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="op3"
//                 placeholder="Option 3"
//                 required
//                 maxLength={75}
//                 onInput={(e) => setOption3Length(e.currentTarget.value.length)}
//               />
//               <small>{option3Length}/75 characters</small>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="op4" className="form-label">Option 4</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="op4"
//                 placeholder="Option 4"
//                 required
//                 maxLength={75}
//                 onInput={(e) => setOption4Length(e.currentTarget.value.length)}
//               />
//               <small>{option4Length}/75 characters</small>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="cop" className="form-label">Correct Option (A/B/C/D)</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="cop"
//                 placeholder="Correct option (A/B/C/D)"
//                 pattern="A|[B-D]"
//                 maxLength={1}
//                 required
//                 onInput={(e) => setCorrectOptionLength(e.currentTarget.value.length)}
//               />
//               <small>{correctOptionLength}/1 characters</small>
//             </div>

//             <div className="text-center">
//               <input
//                 type="submit"
//                 className="btn btn-primary"
//                 value="Submit"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Add;
