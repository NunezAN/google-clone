import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./SendMail.css";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import { collection, addDoc, getFirestore } from "firebase/firestore";
const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  async function onSubmit(formData) {
    const timestamp = new Date();

    const post = {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: timestamp,
    };
    await addDoc(collection(db, "emails"), post);

    dispatch(closeSendMessage());
  }

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3 className="sendMail__header--title">New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is Required</p>}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is Required</p>
        )}
        <textarea
          placeholder="Message..."
          type="text"
          className="sendMail__message--input"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is Required</p>
        )}
        <div className="sendMail__options">
          <Button variant="contained" type="submit" className="sendMail__send">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
