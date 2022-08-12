import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Searchpage from "./pages/Searchpage";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/search" element={<Search hideButtons={true}/>} />
      </Routes>
    </div>
  );
}

export default App;
