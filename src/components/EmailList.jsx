import React from "react";
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

const EmailList = () => {
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
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello Bozo"
          description="this is dank"
          time="10:00pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
