// import { useState } from 'react'
// import React from 'react'

import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import navLinks from "./data/navLinks";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        
        {navLinks.map((ele, i) => {
          return (
            <Route key={i} path={ele.path} element={<ele.element />}></Route>
          )
        })}
      </Routes>
    </>
  );
};

export default App;
