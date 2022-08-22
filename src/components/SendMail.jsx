import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./SendMail.css";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

const SendMail = () => {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3 className="sendMail__header--title">New Message</h3>
        <CloseIcon className="sendMail__close" />
      </div>
      <form action="">
        <input placeholder="To" type="text" />
        <input placeholder="Subject" type="text" />
        <input placeholder="Message..." type="text" className="sendMail__message--input"/>
        <div className="sendMail__options">
          <Button className="sendMail__send">Send</Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
