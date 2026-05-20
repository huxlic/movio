// import { useState } from 'react'
// import React from 'react'

import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import navLinks from "./data/navLinks";
import MovieDetails from "./pages/MovieDetails";
// import ResultsPage from "./pages/ResultsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>

        {navLinks.map((ele) => {
          return (
            <Route
              key={ele.path}
              path={ele.path}
              element={<ele.element />}
            ></Route>
          );
        })}
        <Route
          path="*"
          element={
            <h1 className="text-3xl font-bold text-center mt-20">
              404 Not Found
            </h1>
          }
        ></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
        {/* <Route path="/results" element={<Results />}></Route> */}
      </Routes>
    </>
  );
};

export default App;
 