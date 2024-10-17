import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from './components/Add';
import Chooser from './components/Chooser';
import Pick from './components/Pick';

const App :React.FC=()=> {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Chooser/>}></Route>
          <Route path='/play' element={<Home tester={true}></Home>}></Route>
          <Route path='/study' element={<Home tester={false}></Home>}></Route>

          <Route path='/30roundsencodedpassword' element={<Add/>}></Route>
          <Route path='/picker' element={<Pick/>}></Route>

          
        </Routes>
      </Router>
    </div>
  )
}

export default App