import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Add from './components/Add';
import Chooser from "./components/Chooser";
import Pick from "./components/Pick";
import GenreChooser from "./components/GenreChooser";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Chooser />}></Route>
          <Route path="/play" element={<GenreChooser />}></Route>
          <Route path="/study" element={<GenreChooser  />}></Route>

          {/* <Route path='/30roundsencodedpassword' element={<Add/>}></Route> */}
          <Route path="/picker" element={<GenreChooser />}></Route>
          <Route path="play/dsa" element={<Home tester={true} genre="dsa" />}></Route>
          <Route path="study/dsa" element={<Home tester={false} genre="dsa" />}></Route>
          <Route path="picker/dsa" element={<Pick genre="dsa" />}></Route>
          <Route path="play/ai" element={<Home tester={true} genre="ai" />}></Route>
          <Route path="study/ai" element={<Home tester={false} genre="ai" />}></Route>
          <Route path="picker/ai" element={<Pick genre="ai" />}></Route>
          <Route path="play/fun" element={<Home tester={true} genre="fun" />}></Route>
          <Route path="study/fun" element={<Home tester={false} genre="fun" />}></Route>
          <Route path="picker/fun" element={<Pick genre="fun" />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
