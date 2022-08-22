import { IconButton } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { useNavigate } from "react-router-dom";
import "./Mail.css";

const Mail = () => {
  const navigate = useNavigate();

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => navigate("/gmail/")}>
            <ArrowBackIcon className="icon" />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon className="icon" />
          </IconButton>
          <IconButton>
            <ReportGmailerrorredIcon className="icon" />
          </IconButton>
          <IconButton>
            <DeleteIcon className="icon" />
          </IconButton>
          <IconButton>
            <EmailOutlinedIcon className="icon" />
          </IconButton>
          <IconButton>
            <WatchLaterOutlinedIcon className="icon" />
          </IconButton>
          <IconButton>
            <AddTaskOutlinedIcon className="icon" />
          </IconButton>
          <IconButton>
            <DriveFileMoveOutlinedIcon className="icon" />
          </IconButton>
          <IconButton>
            <LabelOutlinedIcon className="icon" />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon className="icon" />
          </IconButton>
        </div>
        <div className="mails_toolsRight">
          <IconButton>
            <NavigateBeforeIcon className="icon--deactivated" />
          </IconButton>
          <IconButton>
            <NavigateNextIcon className="icon" />
          </IconButton>
          <IconButton>
            <KeyboardIcon className="icon" />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon className="icon" />
          </IconButton>
        </div>
      </div>
      <div className="mail__body--container">
        <div className="mail__body">
          <div className="mail__body--header">
            <h2>Subject</h2>
            <LabelImportantOutlinedIcon className="mail__important" />
            <p>Title</p>
            <p className="mail__time">10pm</p>
          </div>
          <div className="mail__message">This is a message</div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
