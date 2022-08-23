import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Searchpage from "./pages/Searchpage";
import Gmail from "./pages/Gmail";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/search" element={<Searchpage />} />
          <Route path="/gmail/*" element={<Gmail />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
