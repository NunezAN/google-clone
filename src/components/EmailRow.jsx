import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./EmailRow.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useNavigate } from "react-router-dom";

const EmailRow = ({ id, title, subject, description ,time}) => {
    const navigate = useNavigate();

  return (
    <div className="emailRow" onClick={()=>navigate("/gmail/mail")}>
      <div className="emailRow__options">
        <Checkbox color="primary" />
        <IconButton>
          <StarBorderIcon className="emailRow--icon" />
        </IconButton>
        <IconButton>
          <LabelOutlinedIcon className="emailRow--icon" />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">- {description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
};

export default EmailRow;
