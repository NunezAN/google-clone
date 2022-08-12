import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header--left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__header--right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/Images">Images</Link>
          <AppsIcon className="icon icon-apps"/>
          <Avatar sx={{ bgcolor: "#202124" }}className="icon icon-avatar"></Avatar>
          {/* Icon */}
          {/* Avatar */}
        </div>
      </div>
      <div className="home__body"></div>
    </div>
  );
};

export default Home;
