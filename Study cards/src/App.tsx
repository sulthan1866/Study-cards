import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from './components/Add';

const App :React.FC=()=> {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<Add/>}>

          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App