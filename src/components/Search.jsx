import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  function search(event) {
    event.preventDefault();
    console.log(`Searching...${searchInput}`);
    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: searchInput,
    })

    navigate("/search");
  }
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__input--icon" />
        <input
          type="text"
          className="search__input--field"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <MicIcon className="mic--icon" />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button
            className="btn"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="btn" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="btn btn-hidden"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="btn btn-hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
