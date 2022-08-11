import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/search" element ={
            <h1>This is my search page</h1>
          }/>
      </Routes>
    </div>
  );
}

export default App;
