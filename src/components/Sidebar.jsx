import React from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LabelIcon from "@mui/icons-material/Label";
import SidebarOption from "./SidebarOption";
import { useDispatch, useSelector } from "react-redux";
import { openSendMessage, selectEmailCount } from "../features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const emailCount = useSelector(selectEmailCount);
  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={()=> dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={emailCount}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={13} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={3} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={10} />
      <SidebarOption Icon={SendIcon} title="Sent" number={2} />
      <SidebarOption Icon={InsertDriveFileIcon} title="Drafts" number={0} />
      <SidebarOption Icon={LabelIcon} title="Categories" number={1} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={1} />
    </div>
  );
};

export default Sidebar;
