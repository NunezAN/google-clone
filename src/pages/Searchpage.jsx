import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { useStateValue } from "../StateProvider";
import UseGoogleSearch from "../useGoogleSearch";
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import "./SearchPage.css";
import SearchResult from "../components/SearchResult";

const Searchpage = () => {
  const [{ term }, dispatch] = useStateValue();
  //live api call
  const { data } = UseGoogleSearch(term);

  //mock api call
  //   const data = response;


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
        <div className="searchPage__header--body">
          <Search hideButtons></Search>
          <div className="searchPage__options">
            <div className="searchPage__options--left">
              <div className="searchPage__option">
                <SearchIcon className />
                <Link to="/all" onClick={(event) => event.preventDefault()}>
                  All
                </Link>
              </div>
              <div className="searchPage__option">
                <NewspaperIcon />
                <Link to="/news" onClick={(event) => event.preventDefault()}>
                  News
                </Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link
                  to="/shopping"
                  onClick={(event) => event.preventDefault()}
                >
                  Shopping
                </Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images" onClick={(event) => event.preventDefault()}>
                  Images
                </Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps" onClick={(event) => event.preventDefault()}>
                  Maps
                </Link>
              </div>
              <div className="searchPage__option searchPage__option--more">
                <MoreVertIcon />
                <Link to="/more" onClick={(event) => event.preventDefault()}>
                  More
                </Link>
              </div>
            </div>
            <div className="searchPage__options--right">
              <div className="searchPage__option">
                <Link
                  to="/settings"
                  onClick={(event) => event.preventDefault()}
                >
                  Settings
                </Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools" onClick={(event) => event.preventDefault()}>
                  Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultsCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime})
          </p>
          {data?.items.map((item, i) => (
            <SearchResult item={item} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchpage;
