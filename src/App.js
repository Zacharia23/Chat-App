import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Room from "./Components/Room";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
         <Route exact path='/rooms/:room' element={<Room/>} />
      </Routes>
       
    </Router>
  );
}

export default App;
