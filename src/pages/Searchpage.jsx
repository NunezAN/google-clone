import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import response from "../response";
import { useStateValue } from "../StateProvider";
import UseGoogleSearch from "../useGoogleSearch";
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import "./SearchPage.css";

const Searchpage = () => {
  const [{ term }, dispatch] = useStateValue();
  //live api call
  // const {data} = UseGoogleSearch(term);

  //mock api call
  const data = response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
            alt=""
          />
        </Link>
        <h1>{term}</h1>
        <div className="searchPage__header--body">
          <Search hideButtons></Search>
          <div className="searchPage__options">
            <div className="searchPage__options--left">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <NewspaperIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__options--right">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searhPage__results"></div>
    </div>
  );
};

export default Searchpage;
