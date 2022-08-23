import React from "react";
import { Routes,Route } from "react-router-dom";
import EmailList from "../components/EmailList";
import Header from "../components/Header";
import Mail from "../components/Mail";
import SendMail from "../components/SendMail";
import Sidebar from "../components/Sidebar";
import "./Gmail.css";
import {useSelector} from "react-redux";
import { selectSendMessageIsOpen } from "../features/mailSlice";

const Gmail = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
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
      {sendMessageIsOpen && <SendMail/>}
    </div>
  );
};

export default Gmail;
