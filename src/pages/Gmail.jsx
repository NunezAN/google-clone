import React from "react";
import { Routes,Route } from "react-router-dom";
import EmailList from "../components/EmailList";
import Header from "../components/Header";
import Mail from "../components/Mail";
import SendMail from "../components/SendMail";
import Sidebar from "../components/Sidebar";
import "./Gmail.css";

const Gmail = () => {
  return (
    <div className="gmail">
      <Header />
      <div className="gmail__body">
        <Sidebar />
        <Routes>
            <Route path="/" element={<EmailList/>} />
            <Route path="/mail" element={<Mail/>} />
        </Routes>
      </div>
      <SendMail/>
    </div>
  );
};

export default Gmail;
