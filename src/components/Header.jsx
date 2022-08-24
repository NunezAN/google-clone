import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar, IconButton } from "@mui/material";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { authfb } from "../firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOut= () => {
    signOut(authfb).then(()=>{
      dispatch(logout());
    });
  }

  return (
    <div className="header">
      <div className="header__left">
        <IconButton className="icon-button">
          <MenuIcon className="icon" />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r4.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon className="icon" />
        <input placeholder="Search in mail" type="text" />
        <TuneIcon className="icon" />
      </div>
      <div className="header__right">
        <IconButton className="icon-button">
          <HelpOutlineIcon className="icon" />
        </IconButton>
        <IconButton className="icon-button">
          <SettingsIcon className="icon" />
        </IconButton>
        <IconButton className="icon-button">
          <AppsIcon className="icon" />
        </IconButton>
        <Avatar onClick={logOut} className="avatar">{user?.displayName.slice(0,1).toUpperCase()}</Avatar>
      </div>
    </div>
  );
};

export default Header;
