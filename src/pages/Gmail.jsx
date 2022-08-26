import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import EmailList from "../components/EmailList";
import Header from "../components/Header";
import Mail from "../components/Mail";
import SendMail from "../components/SendMail";
import Sidebar from "../components/Sidebar";
import "./Gmail.css";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "../features/mailSlice";
import { login, selectUser } from "../features/userSlice";
import Login from "../components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { authfb } from "../firebase";

const Gmail = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(authfb, (user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="gmail">
          <Header />
          <div className="gmail__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </div>
  );
};

export default Gmail;
