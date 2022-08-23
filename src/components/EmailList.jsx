import React, { useEffect, useState } from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import SellIcon from "@mui/icons-material/Sell";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { Checkbox, IconButton } from "@mui/material";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "../firebase";
import {
  getDocs,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("timestamp","desc"));
    onSnapshot(q, (snapshot) =>
      setEmails(
        snapshot.docs.map((elem) => ({ id: elem.id, data: elem.data() }))
      )
    );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__SettingsLeft">
          <Checkbox color="primary" />
          <IconButton>
            <ArrowDropDownIcon className="icon" />
          </IconButton>
          <IconButton>
            <RefreshIcon className="icon" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="icon" />
          </IconButton>
        </div>
        <div className="emailList__SettingsRight">
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
      <div className="emailList__sections">
        <Section
          className="emailList__section"
          Icon={InboxIcon}
          title="Primary"
          selected
        ></Section>
        <Section
          className="emailList__section"
          Icon={SellIcon}
          title="Promotions"
        ></Section>
        <Section
          className="emailList__section"
          Icon={PeopleAltIcon}
          title="Social"
        ></Section>
      </div>
      <div className="emailList__list">
        {emails.map((elem) => (
          <EmailRow
            key={elem.id}
            title={elem.data.to}
            subject={elem.data.subject}
            description={elem.data.message}
            time={new Date(elem.data.timestamp.seconds * 1000).toUTCString()}
          ></EmailRow>
        ))}
      </div>
    </div>
  );
};

export default EmailList;
